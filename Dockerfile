# ESTÁGIO 1: Contrução
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Se estiver usando Vite, o comando padrão geralmente gera uma pasta 'dist'.
# Se for Create React App, gera uma pasta 'build'.
RUN npm run build

# ESTÁGIO 2: Servidor web
FROM nginx:alpine
# Copie o resultado do build para o Nginx (ajuste 'dist' ou 'build' conforme necessário)
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]