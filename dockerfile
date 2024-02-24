# Use uma imagem oficial do Node.js como base
FROM node:18.17

# Defina o diretório de trabalho no contêiner
WORKDIR /home/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN yarn
# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta 5173 para que o aplicativo possa ser acessado
EXPOSE 5173

# Comando para iniciar o aplicativo
CMD ["yarn", "run", "dev", "--host"]
