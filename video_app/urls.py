from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_video, name='upload_video'),
    path('videos/', views.video_list, name='video_list'),
    path('video_player/<int:video_id>/search-subtitles/', views.search_subtitles, name='search_subtitles'),
    path('video_player/<int:video_id>/', views.video_player, name='video_player'),
]