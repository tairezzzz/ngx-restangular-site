FROM node:10
WORKDIR /app
COPY package*.json /app/

RUN npm set unsafe-perm true
RUN npm install
COPY ./ /app/

# Run build
RUN npm run build:ssr
