FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .


EXPOSE 9000

CMD ["node","app.js"]


# Multi stage

# FROM node:22 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci

# COPY . .

# # build TS → JS
# RUN npm run build


# FROM node:22 AS production

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci --only=production


# COPY --from=builder /app/dist ./dist

# # if you need prisma or other assets, copy them too
# # COPY --from=builder /app/prisma ./prisma

# EXPOSE 9000

# CMD ["node", "dist/app.js"]