# The instructions for the first stage
FROM node:10-alpine as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/hardcoder/Desktop/docker-info-examples/node-with-docker

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]