# Stage 1: Build
FROM node:20.12.2-alpine AS builder

WORKDIR /app

# Install dependencies (cached layer)
COPY package*.json ./
RUN npm ci

# Copy source and build (environment variables injected via compose)
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:1.25.4-alpine

# Copy build output and custom nginx config
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]