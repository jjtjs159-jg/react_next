FROM node:12

# ENV PORT 8000

# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 9000


# CMD "npm" "run" "dev"
CMD ["npm", "start"]