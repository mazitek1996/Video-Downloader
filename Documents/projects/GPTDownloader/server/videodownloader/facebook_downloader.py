
import youtube_dl

def download_video(url, format):
    options = {
        'format': 'bestvideo+bestaudio/best' if format == 'video' else 'bestaudio/best',
        'outtmpl': 'videos/%(title)s.%(ext)s',
        'verbose': True,
        # Add more options specific to Facebook if needed
    }

    try:
        with youtube_dl.YoutubeDL(options) as ydl:
            info_dict = ydl.extract_info(url, download=False)
            video_title = info_dict.get('title', 'video')
            filename = ydl.prepare_filename(info_dict)
            ydl.download([url])
            return filename
    except Exception as e:
        raise e
