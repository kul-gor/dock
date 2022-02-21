FROM node:current-alpine3.15

WORKDIR /app

COPY . .

RUN npm ci

COPY www ./www/igor

EXPOSE 8045

CMD ["npm start"]