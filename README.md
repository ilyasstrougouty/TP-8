# Full-Stack App (TP8)

Ce projet contient l'application Full-Stack pour le TP8.

## Structure

- `backend/` : Serveur Express, connexion MongoDB, et API REST.
- `frontend/` : Application React, buildée dans `frontend/build`.

## Instructions d'installation et d'exécution locale

1. **Prérequis** : Node.js installé. Une base de données MongoDB (locale ou Atlas).
2. **Backend** :
   ```bash
   cd backend
   npm install
   # Assurez-vous que les variables dans backend/.env sont correctes
   node server.js
   ```
3. **Frontend (Développement)** :
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. **Tester la production localement** :
   Le serveur backend servira automatiquement les fichiers frontend buildés si vous accédez à `http://localhost:5000`.

## Déploiement

### 1. GitHub
```bash
git remote add origin <URL_DE_VOTRE_REPO>
git branch -M main
git push -u origin main
```

### 2. Render / Railway
- Connectez votre dépôt GitHub.
- **Build command** : `npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend` (ou si Render supporte un dossier racine, configurez le Root Directory sur `backend` et utilisez `npm install`). 
*Note: Dans le TP, il est suggéré de lancer `npm install` et `node backend/server.js`. Assurez-vous d'avoir pushé le dossier `frontend/build` ou de le builder sur Render.*
- **Start command** : `node backend/server.js` (ou `node server.js` si le root est backend).
- N'oubliez pas d'ajouter les variables d'environnement (`MONGO_URI`, `JWT_SECRET`, `PORT`).
