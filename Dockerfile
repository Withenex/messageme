FROM node:12.18
WORKDIR /usr/src/message-brandon
COPY . .
RUN npm install
CMD ["npm","run","start"]