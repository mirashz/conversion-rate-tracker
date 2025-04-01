# Stage 1: Build
FROM node:20.12.2-alpine AS builder

WORKDIR /app

# Install dependencies (cached layer)
COPY ./package*.json ./
RUN npm ci

# Copy source and build
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
RUN npm run build

# Stage 2: Runtime
FROM node:20.12.2-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy built files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY ./package.json ./ 

# Expose both HTTP and WebSocket ports
EXPOSE 3001 8081

# Health check for backend service
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3001/health || exit 1

# Run the app
CMD ["node", "dist/server.js"]
