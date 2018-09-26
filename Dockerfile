FROM node:8.11.4

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install

EXPOSE 9001

CMD ["npm", "start"]
