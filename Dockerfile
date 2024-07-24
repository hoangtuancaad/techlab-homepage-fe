FROM node:22-bullseye-slim

WORKDIR /src
COPY . /src

# Building the app
RUN npm cache verify
RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "start" ]
