FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Placeholder for now
RUN echo "{}" > package.json

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
