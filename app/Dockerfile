FROM node:16

WORKDIR /code

COPY . /code

RUN yarn install

EXPOSE 3000

ENV NODE_ENV=develop

CMD ["yarn", "dev"]