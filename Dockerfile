FROM node:12 as node

WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html