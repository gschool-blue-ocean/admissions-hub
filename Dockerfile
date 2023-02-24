FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm",  "start"]
