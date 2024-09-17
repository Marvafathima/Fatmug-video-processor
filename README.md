**Video Subtitle Processor**

Description
This project is a web application that allows admins to upload videos to process and extract subtitles. It features a login system for both administrators and regular users. Administrators have the ability to upload videos, while users can watch videos and search for subtitles.There is two apps for this project-app1 and video_app.app1 handles authentication and authorization of users such as login,signup,logout,while video_app includes video processing and subtitle extraction.

Features

User authentication (login for both admin and regular users)
Video upload (admin only)
Extract Multiple language subtitles from the video after processing.
Subtitle search functionality
Dockerized for easy deployment

Tech Stack

Backend: Django
Database: PostgreSQL
Containerization: Docker

**Prerequisites**

Docker
Docker Compose

**Installation and Setup***

1. Clone the repository:
git clone https://github.com/Marvafathima/Fatmug-video-processor.git
cd video_subtitle_processor

2.Create a .env file in the root directory of the project with the following content:
DB_NAME=your_db_name
DB_HOST=db
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DJANGO_SECRET_KEY=your_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS="*"

3. Build and run the Docker containers:
sudo docker compose build
sudo docker compose up
sudo docker compose exec web python manage.py migrate
sudo docker compose exec web python manage.py makemigrations
sudo docker compose exec web python manage.py createsuperuser

5. Access the application at http://localhost:8000 (or the port you've configured)

**Usage**

Login:

Use admin credentials to access admin features
Use regular user credentials for standard access


For Admins:

Navigate to the upload section to add new videos


For Users:

Browse available videos
Play videos
Use the search function to find specific subtitles
