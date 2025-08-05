# Portfolio - Développeur Fullstack

Un portfolio moderne et responsive développé avec React et Tailwind CSS, présentant mes compétences et projets en tant qu'étudiant développeur fullstack.

## 🚀 Aperçu

Ce portfolio présente :
- Une interface moderne et responsive
- Mes compétences techniques
- Mes projets récents
- Un formulaire de contact fonctionnel
- Une navigation fluide avec ancres

## 🛠️ Technologies utilisées

- **Frontend :** React 19, Vite
- **Styling :** Tailwind CSS
- **Build Tool :** Vite
- **Linting :** ESLint
- **Déploiement :** Prêt pour Vercel/Netlify

## 📦 Installation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 🏗️ Structure du projet

```
Portfolio/
├── public/                 # Fichiers publics (images, favicon, etc.)
│   └── assets/
│       └── images/
│           └── photoCv.jpg # Place ici toutes tes images utilisées dans le code (ex: PNG, JPG)
├── src/
│   ├── components/         # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Sections du portfolio

### 🏠 Hero Section
- Introduction personnalisée
- Appel à l'action vers les projets
- Design moderne avec dégradés

### 👤 À propos
- Présentation personnelle
- Formation et objectifs
- Recherche d'alternance

### 💼 Projets
- Showcase de 3 projets principaux
- Technologies utilisées
- Liens GitHub et démos

### ⚡ Compétences
- Barres de progression des compétences
- Technologies et outils maîtrisés
- Visualisation claire des niveaux

### 📬 Contact
- Formulaire de contact fonctionnel
- Liens vers réseaux sociaux
- Informations de disponibilité

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 Personnalisation

### Modifier les informations personnelles

1. **Nom et titre** : Modifiez dans [`Hero.jsx`](src/components/Hero.jsx)
2. **À propos** : Éditez [`About.jsx`](src/components/About.jsx)
3. **Projets** : Ajoutez vos projets dans [`Projects.jsx`](src/components/Projects.jsx)
4. **Compétences** : Mettez à jour [`Skills.jsx`](src/components/Skills.jsx)
5. **Contact** : Changez les liens dans [`Contact.jsx`](src/components/Contact.jsx)

## 🚀 Déploiement

**Vercel (recommandé) :**
- Pousse ton code sur GitHub.
- Va sur [vercel.com](https://vercel.com/), connecte ton repo, clique sur "Deploy".

### Netlify
```bash
npm run build
# Puis glisser-déposer le dossier dist/ sur netlify.com
```

## 🐛 Résolution de problèmes

### Erreur Tailwind CSS
Si Tailwind ne fonctionne pas :
```bash
npm uninstall tailwindcss
npm install -D tailwindcss@^3.4.0
```

### Port déjà utilisé
Si le port 5173 est occupé :
```bash
npm run dev -- --port 3000
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

- **Email :** [yoann.sogoyou.pro@gmail.com](mailto:yoann.sogoyou.pro@gmail.com)
- **LinkedIn :** [linkedin.com/in/yoann-sogoyou](https://linkedin.com/in/yoann-sogoyou)
- **GitHub :** [github.com/sogoyou8](https://github.com/sogoyou8)

---

⭐ **N'hésitez pas à donner une étoile si ce projet vous a été utile !**

*Développé avec ❤️ par un étudiant Ynov en recherche d'alternance*