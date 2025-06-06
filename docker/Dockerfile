# Image de base
FROM node:20-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package pour installer uniquement les dépendances d'abord
COPY app/package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du projet
COPY app/ .

# Port exposé (React utilise 3000 par défaut)
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "dev"]
