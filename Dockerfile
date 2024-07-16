FROM oven/bun:1 AS build

WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:stable-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .

CMD ["nginx","-g", "daemon off;"]
