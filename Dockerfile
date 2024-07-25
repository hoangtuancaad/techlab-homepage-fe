FROM node:22-bullseye-slim

WORKDIR /src
COPY . /src

# Building the app
RUN yarn cache clean
RUN yarn
RUN yarn build

ENTRYPOINT [ "yarn", "start" ]
