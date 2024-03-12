FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .

CMD ["nginx","-g", "daemon off;"]