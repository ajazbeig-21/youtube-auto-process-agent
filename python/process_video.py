from moviepy.editor import VideoFileClip, concatenate_videoclips

def process_video(input_video_path):
    # Process video here (e.g., remove noise, add music, cut blanks)
    video = VideoFileClip(input_video_path)
    output_path = input_video_path.replace('uploads', 'processed')  # Adjust as needed
    video.write_videofile(output_path)
    return output_path

