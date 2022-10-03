FROM node:16.17.1-alpine3.16 AS builder
# Add a workdir directory
WORKDIR /app
# Install dependencies
COPY . .
RUN npm install npm@8.19.2 && npm install --omit=dev \
    && npm rebuild node-sass && npm run build

# Use NGINX
FROM nginx:1.23.1-alpine AS production
# Update and upgrade
RUN apk update --no-cache && apk upgrade
# Copy from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Copy nginx configuration
COPY dockerfiles/nginx/app.conf /etc/nginx/conf.d/default.conf
# Start nginx
CMD nginx -g 'daemon off;'