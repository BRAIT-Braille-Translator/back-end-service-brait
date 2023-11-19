FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Copy .env file
COPY .env .env

EXPOSE 3000

CMD ["npm", "start"]