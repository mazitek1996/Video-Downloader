# from pytube import YouTube
# import ffmpeg
# import os
#
# def download_video(url, format):
#     try:
#         youtube = YouTube(url)
#         if format == 'video':
#             stream = youtube.streams.filter(progressive=True).order_by('resolution').desc().first()
#         else:
#             stream = youtube.streams.filter(only_audio=True).first()
#         if stream is not None:
#             output_path = 'videos/'
#             stream.download(output_path=output_path)
#             filename = f"videos/{youtube.title}.{stream.mime_type.split('/')[-1]}"
#             if format == 'audio':
#                 mp4_filename = f"videos/{youtube.title}.mp4"
#                 mp3_filename = f"videos/{youtube.title}.mp3"
#                 ffmpeg.input(mp4_filename).output(mp3_filename, format='mp3').run(overwrite_output=True)
#                 os.remove(mp4_filename)
#                 filename = mp3_filename
#             return filename
#         else:
#             raise Exception('No suitable streams found.')
#     except Exception as e:
#         raise e
#
#
# from pytube import YouTube
# import ffmpeg
# import os
#
# class NoSuitableStreamsFoundError(Exception):
#     """Exception raised when no suitable streams are found for download."""
#     pass
#
# def download_video(url, format):
#     try:
#         youtube = YouTube(url)
#         if format == 'video':
#             stream = youtube.streams.get_highest_resolution()
#         else:
#             stream = youtube.streams.get_audio_only()
#         if stream is not None:
#             output_path = 'videos/'
#             stream.download(output_path=output_path)
#             filename = f"videos/{youtube.title}.{stream.extension}"
#             if format == 'audio':
#                 mp4_filename = f"videos/{youtube.title}.mp4"
#                 mp3_filename = f"videos/{youtube.title}.mp3"
#                 ffmpeg.input(mp4_filename).output(mp3_filename, format='mp3').run(overwrite_output=True)
#                 os.remove(mp4_filename)
#                 filename = mp3_filename
#             return filename
#         else:
#             raise NoSuitableStreamsFoundError('No suitable streams found.')
#     except NoSuitableStreamsFoundError as e:
#         raise e
#     except Exception as e:
#         raise NoSuitableStreamsFoundError('Error occurred during video download.') from e
from pytube import YouTube
import ffmpeg
import os
import math
import time

class NoSuitableStreamsFoundError(Exception):
    """Exception raised when no suitable streams are found for download."""
    pass

def download_video(url, format):
    def calculate_progress(stream, chunk, bytes_remaining):
        total_size = stream.filesize
        bytes_downloaded = total_size - bytes_remaining

        # Calculate the progress percentage
        progress = (bytes_downloaded / total_size) * 100

        # Calculate the estimated time remaining
        elapsed_time = time.time() - start_time
        download_speed = bytes_downloaded / elapsed_time
        remaining_time = (total_size - bytes_downloaded) / download_speed

        # Display the progress, video quality, and estimated time
        print(f"Progress: {progress:.2f}% | Video Quality: {stream.resolution} | Time Remaining: {remaining_time:.2f} seconds", end='\r')

    try:
        youtube = YouTube(url)
        if format == 'video':
            stream = youtube.streams.filter(progressive=True).order_by('resolution').desc().first()
        else:
            stream = youtube.streams.filter(only_audio=True).first()
        if stream is not None:
            output_path = 'videos/'
            start_time = time.time()
            stream.download(output_path=output_path)
            filename = f"videos/{youtube.title}.{stream.mime_type.split('/')[-1]}"
            if format == 'audio':
                mp4_filename = f"videos/{youtube.title}.mp4"
                mp3_filename = f"videos/{youtube.title}.mp3"
                ffmpeg.input(mp4_filename).output(mp3_filename, format='mp3').run(overwrite_output=True)
                os.remove(mp4_filename)
                filename = mp3_filename
            return filename
        else:
            raise NoSuitableStreamsFoundError('No suitable streams found.')
    except NoSuitableStreamsFoundError as e:
        raise e
    except Exception as e:
        raise NoSuitableStreamsFoundError('Error occurred during video download.') from e
