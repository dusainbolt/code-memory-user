FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 4000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 4000
CMD [ "yarn", "start" ]