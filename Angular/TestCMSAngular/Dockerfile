FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

FROM nginx:latest
COPY --from=build /app/dist/test-cmsangular /usr/share/nginx/html