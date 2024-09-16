
import os
import subprocess
import json
import logging
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.conf import settings
from .forms import VideoUploadForm
from .models import Video, Subtitle
from .utils import parse_timestamp 
from django.contrib import messages
from django.contrib.auth.decorators import login_required


logger = logging.getLogger(__name__)

@login_required
def upload_video(request):
    """
    Handle video uploads via a form and initiate video processing.
    """
    if request.method == 'POST':
        form = VideoUploadForm(request.POST, request.FILES)
        if form.is_valid():
            video = form.save()
            try:
                process_video(video)
                
                messages.success(request, 'Video uploaded and processed successfully.')
            except Exception as e:
                logger.error(f"Video processing failed: {e}")
                messages.error(request, 'Video processing failed.')
            return redirect('video_list')
    else:
        form = VideoUploadForm()
    
    return render(request, 'video_upload.html', {'form': form})

def process_video(video):
    """
    Process a video to extract subtitles and store them in the database.
    """
    video_path = video.file.path
    subtitle_base_path = os.path.join(settings.MEDIA_ROOT, 'subtitles', f'{video.id}')
    
    # Ensuring subtitle directory exists or not
    os.makedirs(os.path.dirname(subtitle_base_path), exist_ok=True)

    try:
        subtitle_info = get_subtitle_info(video_path)

        for stream in subtitle_info:
            stream_index = stream['index']
            language = stream.get('tags', {}).get('language', 'und')
            subtitle_file = f'{subtitle_base_path}_{language}.srt'

            extract_subtitle(video_path, stream_index, subtitle_file)
            process_subtitle_file(video, subtitle_file, language)
        
        video.processed = True
        video.save()
        logger.info("Video processing completed successfully.")

    except subprocess.CalledProcessError as e:
        logger.error(f"Subprocess error during video processing: {e}")
        logger.debug(f"Output: {e.stdout}, Error: {e.stderr}")
        raise
    except Exception as e:
        logger.exception("An unexpected error occurred during video processing.")
        raise

def get_subtitle_info(video_path):
    """
    Retrieve subtitle stream information using ffprobe.
    """
    command = [
        'ffprobe', '-v', 'quiet', '-print_format', 'json', 
        '-show_streams', '-select_streams', 's', video_path
    ]
    try:
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        info = json.loads(result.stdout)
        return info['streams']
    except subprocess.CalledProcessError as e:
        logger.error(f"Failed to get subtitle info: {e}")
        raise

def extract_subtitle(video_path, stream_index, output_path):
    """
    Extract subtitles from a video file using ffmpeg.
    """
    command = [
        'ffmpeg', '-i', video_path, '-map', f'0:{stream_index}', 
        '-c:s', 'srt', output_path
    ]
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        logger.error(f"Failed to extract subtitle: {e}")
        raise

def process_subtitle_file(video, subtitle_file, language):
    """
    Process the extracted subtitle file and store the data in the database.
    """
    try:
        with open(subtitle_file, 'r', encoding='utf-8') as file:
            content = file.read()

        subtitle_blocks = content.split('\n\n')
        for block in subtitle_blocks:
            lines = block.split('\n')
            if len(lines) >= 3:
                index = lines[0]
                timestamp = lines[1]
                text = ' '.join(lines[2:])
                Subtitle.objects.create(
                    video=video,
                    language=language,
                    timestamp=timestamp,
                    text=text
                )
    except FileNotFoundError:
        logger.error(f"Subtitle file not found: {subtitle_file}")
        raise
    except Exception as e:
        logger.exception("An error occurred while processing the subtitle file.")
        raise

@login_required
def video_list(request):
    """
    Display a list of all uploaded videos.
    """
    videos = Video.objects.all()
    return render(request, 'video_list.html', {'videos': videos})

@login_required
def video_player(request, video_id):
    """
    Render the video player with subtitle options.
    """
    try:
        video = Video.objects.get(id=video_id)
        languages = Subtitle.objects.filter(video=video).values_list('language', flat=True).distinct()
        subtitle_data = {
            lang: [
                {
                    'start': parse_timestamp(sub.timestamp.split(' --> ')[0]),
                    'end': parse_timestamp(sub.timestamp.split(' --> ')[1]),
                    'text': sub.text
                }
                for sub in Subtitle.objects.filter(video=video, language=lang).order_by('id')
            ] 
            for lang in languages
        }
        context = {
            'video': video,
            'subtitle_data': subtitle_data,
            'languages': list(languages),
        }
        return render(request, 'video_player.html', context)
    except Video.DoesNotExist:
        logger.error(f"Video with ID {video_id} does not exist.")
        return redirect('video_list')
    except Exception as e:
        logger.exception("An error occurred while rendering the video player.")
        return redirect('video_list')

def search_subtitles(request, video_id):
    """
    Search for keywords in subtitles for a given video and language.
    """
    query = request.GET.get('keyword', '')
    language = request.GET.get('language', '')

    try:
        subtitles = Subtitle.objects.filter(
            video_id=video_id, language=language, text__icontains=query
        ).order_by('id')
        if not subtitles.exists():
            return JsonResponse({'message': 'No keywords found in subtitles.'}, status=404)

        results = [
            {
                'start': parse_timestamp(sub.timestamp.split(' --> ')[0]),
                'text': sub.text
            } for sub in subtitles
        ]
        return JsonResponse(results, safe=False)
    except Exception as e:
        logger.exception("An error occurred during subtitle search.")
        return JsonResponse({'error': 'An error occurred while searching subtitles.'}, status=500)

