FROM nginx:1.25.3-alpine3.18-slim
# Update and upgrade
RUN apk update && \
    apk add --upgrade apk-tools && \
    apk upgrade --available && \
    rm -rf /var/cache/apk/*
# Copy from builder
COPY build /usr/share/nginx/html
# Copy nginx configuration
COPY dockerfiles/production/build/nginx/app.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]