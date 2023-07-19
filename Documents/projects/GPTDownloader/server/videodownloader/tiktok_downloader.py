#
# import requests
# import json
# import re
#
#
# def download_video(url):
#     # Extract the video ID from the TikTok URL
#     video_id = re.search(r'(?<=video/)\d+', url).group(0)
#
#     # Construct the API endpoint URL
#     api_url = f"https://www.tiktok.com/oembed?url=https://www.tiktok.com/@/video/{video_id}"
#
#     try:
#         # Send a GET request to the API endpoint
#         response = requests.get(api_url)
#         response_json = json.loads(response.text)
#
#         # Extract the video URL from the API response
#         video_url = response_json['html'].split('src="')[1].split('"')[0]
#
#         # Download the video
#         response = requests.get(video_url, stream=True)
#         filename = f"videos/{video_id}.mp4"
#
#         with open(filename, 'wb') as f:
#             for chunk in response.iter_content(chunk_size=1024):
#                 if chunk:
#                     f.write(chunk)
#
#         return filename
#     except Exception as e:
#         raise e
#
#

import requests
import json
import re
import os


def validate_tiktok_url(url):
    # Validate the TikTok video URL format
    pattern = r'https?://(?:www\.)?tiktok\.com/@[^/]+/video/[^/]+'
    return re.match(pattern, url)


def download_video(url, output_dir="videos"):
    if not validate_tiktok_url(url):
        raise ValueError("Invalid TikTok video URL")

    # Extract the video ID from the TikTok URL
    video_id = re.search(r'(?<=video/)[^/]+', url).group(0)

    # Construct the API endpoint URL
    api_url = f"https://www.tiktok.com/oembed?url=https://www.tiktok.com/@/video/{video_id}"

    try:
        # Send a GET request to the API endpoint
        response = requests.get(api_url)
        response_json = json.loads(response.text)

        # Extract the video URL from the API response
        video_url = response_json['html'].split('src="')[1].split('"')[0]

        # Download the video
        response = requests.get(video_url, stream=True)

        # Create the output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)

        # Set the output filename
        filename = os.path.join(output_dir, f"{video_id}.mp4")

        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)

        return filename
    except requests.exceptions.RequestException as e:
        raise ValueError(f"Error occurred during the request: {str(e)}")
    except (KeyError, IndexError) as e:
        raise ValueError("Failed to extract video URL from the API response")
    except Exception as e:
        raise ValueError(f"An unexpected error occurred: {str(e)}")
