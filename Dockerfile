FROM node:14-slim

WORKDIR /src/cyferd
ADD . /src/cyferd
RUN yarn install
