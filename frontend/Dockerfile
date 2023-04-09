FROM node:18-alpine

WORKDIR app/frontend

COPY *.json ./

RUN npm install

COPY . .

ADD ./public ./public
ADD ./src ./src



