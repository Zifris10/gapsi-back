FROM node:18-alpine

WORKDIR /usr/local/gapsi/dev

COPY package.json ./

RUN npm install

COPY . ./

RUN ln -snf /usr/share/zoneinfo/America/Mexico_City /etc/localtime && echo America/Mexico_City > /etc/timezone

EXPOSE 4040

CMD [ "npm", "run", "dev"]