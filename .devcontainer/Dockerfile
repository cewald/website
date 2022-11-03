FROM node:18-alpine

WORKDIR /var/www
EXPOSE 3000

COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache \
  bash curl wget git rsync

RUN npm ci

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]
