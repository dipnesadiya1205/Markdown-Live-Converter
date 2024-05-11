FROM node:18.16.0 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

COPY . ./

RUN npm install

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/port80

# RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]