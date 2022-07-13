FROM node:16.16.0-alpine3.16 AS builder
# Add a workdir directory
WORKDIR /app
# Install dependencies
COPY . .
RUN npm install npm@8.13.2 && npm install --production \
    && npm rebuild node-sass && npm run build

# Use NGINX
FROM nginx:1.23.0-alpine AS production
# Update and upgrade
RUN apk update --no-cache && apk upgrade
# Copy from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Copy nginx configuration
COPY dockerfiles/nginx/app.conf /etc/nginx/conf.d/default.conf
# Start nginx
CMD nginx -g 'daemon off;'