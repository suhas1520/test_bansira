FROM node:16.20.2-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install

FROM node:alpine AS dev

WORKDIR /app

COPY --from=builder /app .

RUN npm install --only=dev

CMD ["node", "index.js"]

