# import instaloader
#
# def download_video(url):
#     try:
#         loader = instaloader.Instaloader()
#         loader.download_video(url)
#         filename = loader.get_item_by_url(url).basename
#         return filename
#     except Exception as e:
#         raise e


import instaloader

def download_video(url):
    try:
        loader = instaloader.Instaloader()
        post = instaloader.Post.from_shortcode(loader.context, url)
        loader.download_post(post, target='#download')
        filename = post.url.split("/")[-1] + ".mp4"
        return filename
    except Exception as e:
        raise e
