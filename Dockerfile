# ESTÁGIO 1: Construção
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ESTÁGIO 2: Servidor web (Rootless)
FROM nginx:alpine

# 1. Criar pastas necessárias e dar permissão ao seu usuário do Synology
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
    && chown -R 1029:100 /usr/share/nginx/html \
    && chown -R 1029:100 /var/cache/nginx \
    && chown -R 1029:100 /var/log/nginx \
    && touch /var/run/nginx.pid \
    && chown 1029:100 /var/run/nginx.pid

# 2. Copiar os arquivos do build
COPY --from=builder /app/dist /usr/share/nginx/html

# 3. Copiar sua config (vamos ajustar ela abaixo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 4. Mudar para o usuário limitado antes de rodar
USER 1029

# O Nginx agora rodará na 8080 (porta alta permitida)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]