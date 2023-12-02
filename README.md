# back-end-service-brait


## Getting Started

### Installation
1. clone the repo
   ```sh
   git clone https://github.com/BRAIT-Braille-Translator/back-end-service-brait.git
   ```
2. install npm package
   ```sh
   npm install
   ```
3. change example env to .env file
   ```sh
    cp .env.example .env 
     ```
4. run docker compose
   ```sh
    docker-compose up -d
     ```
5. update .env DATABASE_URL depends on your database url
   ```sh
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
     ```
6. run prisma migrate to migrate schema
   ```sh
   npx prisma migrate dev --name init
     ```
7. run npm run start to run the service
   ```sh
   npm run start
     ```
