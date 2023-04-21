FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --only=production && \
    npm cache clean --force

COPY . .

RUN npx prisma migrate dev --name init --preview-feature

EXPOSE 3000

CMD ["npm", "run", "dev"]
