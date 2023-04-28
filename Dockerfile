#Step 1
FROM node:12-alpine 

WORKDIR /app

COPY . /app

RUN npm install 

COPY package.json /app

RUN npm run build 

