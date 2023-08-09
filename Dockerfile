FROM node:18.17.0
COPY package.json /app/
COPY external_service.js /app/
 
WORKDIR /app

RUN npm install

CMD ["node", "external_service.js"]