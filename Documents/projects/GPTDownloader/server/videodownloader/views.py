
from django.shortcuts import render
from .youtube_downloader import download_video as youtube_download
from .facebook_downloader import download_video as facebook_download
from .vimeo_downloader import download_video as vimeo_download
from .instagram_downloader import download_video as instagram_download
from .twitter_downloader import download_video as twitter_download
from .tiktok_downloader import download_video as tiktok_download
def video_download(request):
    if request.method == 'POST':
        url = request.POST.get('url')
        website = request.POST.get('website')
        format = request.POST.get('format')

        if website == 'youtube':
            try:
                filename = youtube_download(url, format)
                return render(request, 'success.html', {'filename': filename})
            except Exception as e:
                return render(request, 'error.html', {'message': str(e)})
        elif website == 'facebook':
            try:
                filename = facebook_download(url, format)
                return render(request, 'success.html', {'filename': filename})
            except Exception as e:
                return render(request, 'error.html', {'message': str(e)})
        elif website == 'vimeo':
            try:
                filename = vimeo_download(url, format)
                return render(request, 'success.html', {'filename': filename})
            except Exception as e:
                return render(request, 'error.html', {'message': str(e)})
        elif website == 'instagram':
            try:
                filename = instagram_download(url)
                return render(request, 'success.html', {'filename': filename})
            except Exception as e:
                return render(request, 'error.html', {'message': str(e)})
        elif website == 'twitter':
            try:
                filename = twitter_download(url, format)
                return render(request, 'success.html', {'filename': filename})
            except Exception as e:
                return render(request, 'error.html', {'message': str(e)})
        elif website == 'tiktok':
            try:
                filename = tiktok_download(url)
                return render(request, 'success.html', {'filename': filename})
            except Exception as e:
                return render(request, 'error.html', {'message': str(e)})
        else:
            return render(request, 'error.html', {'message': 'Invalid website selection'})
    else:
        return render(request, 'download.html')

