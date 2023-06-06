FROM node:18.12.1

WORKDIR /server

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install

CMD ["npm", "run", "start"];