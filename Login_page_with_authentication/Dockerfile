FROM node:14
# Create app directory
WORKDIR /usr/src/login_file

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]