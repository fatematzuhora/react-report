FROM --platform=linux/x86-64 node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]