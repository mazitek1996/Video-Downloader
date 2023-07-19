from django.urls import path
from videodownloader.views import video_download

urlpatterns = [
    path('download/', video_download, name='video_download'),
]
