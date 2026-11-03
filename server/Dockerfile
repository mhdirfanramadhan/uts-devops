# Tahap 1: pasang dependency
FROM node:22-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
# tanpa --omit=dev: chalk dan cross-env ada di devDependencies tapi dipakai saat runtime
RUN npm ci

# Tahap 2: runtime
FROM node:22-alpine
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
