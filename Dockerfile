# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy your static files to the Nginx HTML directory
COPY html /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8082 to the outside world
EXPOSE 8082