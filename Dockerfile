FROM node:18.14.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

#CMD [ "node", "server.js" ]
RUN npm run dev