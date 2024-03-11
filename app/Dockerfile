FROM node:20-alpine AS build

WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

FROM node:20-alpine AS run

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./build
RUN npm ci --production

USER node
EXPOSE 3000
CMD ["node","build"]