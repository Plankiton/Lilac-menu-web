FROM node:16-buster as node
RUN apt update && apt install yarn xsel xclip -y

ADD . /PreAmar
WORKDIR /PreAmar/
RUN yarn install
RUN yarn build
RUN yarn global add serve
