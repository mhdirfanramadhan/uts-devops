# Tahap 1: Build React App
FROM node:22-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ARG API_URL=http://localhost:3000/api
RUN echo "API_URL=$API_URL" > .env
RUN npm run build

# Tahap 2: Runtime Web Server
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]