# Imagem base extremamente leve com Alpine Linux
FROM nginx:alpine

# Metadados da Imagem
LABEL maintainer="Zafira Comunicação e Marketing <legal@zafiramkt.com.br>"
LABEL description="Portal Jurídico e Institucional Zafira Postiz"

# Remover página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar arquivo de configuração do Nginx com suporte a URLs limpas
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar todos os arquivos estáticos do portal
COPY public/ /usr/share/nginx/html/

# Expor a porta 80 interna exigida
EXPOSE 80

# Comando padrão de inicialização
CMD ["nginx", "-g", "daemon off;"]
