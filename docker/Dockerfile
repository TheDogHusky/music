FROM node:23-bookworm as builder

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:23-bookworm as runner

WORKDIR /app
COPY --from=builder /app/.output ./.output
ENV PORT=8000
ENV NODE_ENV=production

CMD ["node", ".output/server/index.mjs"]
