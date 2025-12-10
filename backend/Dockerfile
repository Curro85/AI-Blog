FROM node:18

WORKDIR /app

COPY package.json  package-lock.json ./

RUN npm install --production

RUN apt-get update && apt-get install -y sqlite3

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]