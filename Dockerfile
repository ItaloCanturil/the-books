FROM node:22-bullseye

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

ENV NODE_ENV=development

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev"]