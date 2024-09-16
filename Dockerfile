

FROM python:3.8.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install FFmpeg
RUN apt-get update && apt-get install -y \
    ffmpeg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Verify FFmpeg installation
RUN ffmpeg -version

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy project
COPY . /app/

# Create necessary directories and set permissions
RUN mkdir -p /app/media/subtitles /app/staticfiles \
    && chown -R www-data:www-data /app

# Run the application
CMD ["gunicorn",  "--timeout", "300","videoprocessor.wsgi:application", "--bind", "0.0.0.0:8000"]