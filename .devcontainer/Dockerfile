FROM node:17-alpine

WORKDIR /var/www
EXPOSE 3000

COPY package.json ./
COPY yarn.lock ./

RUN apk add --no-cache \
  bash curl wget git rsync

RUN yarn install

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
