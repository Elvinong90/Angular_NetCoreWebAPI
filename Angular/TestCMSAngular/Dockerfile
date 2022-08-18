FROM node:18-alpine3.16 as build
WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

FROM nginx
COPY --from=build /usr/app/nginx.conf  /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist/test-cmsangular /usr/share/nginx/html