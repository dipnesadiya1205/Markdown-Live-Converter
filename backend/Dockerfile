FROM node:18.16.0

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

RUN npm install typescript@5.* -g

COPY . .

CMD ["npm","start"]