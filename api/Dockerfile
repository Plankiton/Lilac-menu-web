FROM golang:1.15.6 as golang

RUN apt update
RUN apt install -y gcc

ADD . /PreAmar/
WORKDIR /PreAmar/
RUN go mod tidy
RUN go build -o PreAmar .
