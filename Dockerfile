FROM node:20-alpine3.18 as builder

WORKDIR /src
COPY package.json ./
# Install dependencies.
RUN npm install
COPY  . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]

