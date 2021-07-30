FROM node:16-buster as node
RUN apt update && apt install yarn -y

ADD . /PreAmar
WORKDIR /PreAmar/
RUN yarn install
RUN yarn build
