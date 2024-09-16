from django.db import models

import os
class Video(models.Model):
    file = models.FileField(upload_to='videos/')
    thumbnail=models.ImageField(upload_to='thumbnails/',default='image')
    created_at = models.DateTimeField(auto_now_add=True)
    processed = models.BooleanField(default=False)
    title = models.CharField(max_length=255,default="title of test video")
    def __str__(self):
        return self.file.name
   
    def __str__(self):
        return self.title

class Subtitle(models.Model):
    video = models.ForeignKey(Video, related_name='subtitles', on_delete=models.CASCADE)
    language = models.CharField(max_length=50)
    timestamp = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return f"{self.video.title} - {self.language} - {self.timestamp}"
