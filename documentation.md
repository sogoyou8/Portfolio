# 📚 Documentation Complète du Portfolio

## 🏗️ Architecture Générale

Le portfolio est construit avec **React + Vite + Tailwind CSS** selon une architecture modulaire où chaque section est un composant indépendant.

---

## 📁 Structure des Fichiers

```
Portfolio/
├── 📄 Configuration
│   ├── package.json          # Dépendances et scripts du projet
│   ├── vite.config.js        # Configuration Vite (bundler)
│   ├── tailwind.config.js    # Configuration Tailwind CSS
│   ├── postcss.config.js     # Configuration PostCSS pour Tailwind
│   └── index.html            # Point d'entrée HTML
├── 📂 src/
│   ├── 🎨 Styles
│   │   └── index.css         # Styles globaux + directives Tailwind
│   ├── ⚛️ Composants React
│   │   ├── Navbar.jsx        # Navigation fixe
│   │   ├── Hero.jsx          # Section d'accueil
│   │   ├── About.jsx         # Section à propos
│   │   ├── Projects.jsx      # Portfolio de projets
│   │   ├── Skills.jsx        # Compétences techniques
│   │   └── Contact.jsx       # Formulaire de contact
│   ├── 🚀 Application
│   │   ├── App.jsx           # Composant racine assemblant tout
│   │   └── main.jsx          # Point d'entrée JavaScript
│   └── 📦 assets/           # Images et ressources statiques
└── 📖 Documentation
    └── README.md            # Documentation du projet
```

---

## 🔧 Fichiers de Configuration

### `package.json`
**But :** Définit les dépendances et scripts du projet
```json
{
  "dependencies": {
    "react": "^19.0.0",      // Framework UI
    "react-dom": "^19.0.0"   // Rendu DOM pour React
  },
  "devDependencies": {
    "vite": "^6.3.5",         // Build tool moderne et rapide
    "tailwindcss": "^3.4.0",  // Framework CSS utilitaire
    "postcss": "^8.4.0",      // Processeur CSS
    "autoprefixer": "^10.4.0" // Ajoute les préfixes CSS automatiquement
  },
  "scripts": {
    "dev": "vite",            // Lance le serveur de développement
    "build": "vite build",    // Crée la version de production
    "preview": "vite preview" // Prévisualise le build de production
  }
}
```

### `tailwind.config.js`
**But :** Configure Tailwind CSS pour scanner les fichiers et générer les styles
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Fichiers à scanner pour les classes CSS
  ],
  theme: {
    extend: {}, // Personnalisations du thème (couleurs, fonts, etc.)
  },
  plugins: [], // Plugins Tailwind additionnels
}
```

### `postcss.config.js`
**But :** Configure PostCSS pour traiter le CSS avec Tailwind
```javascript
export default {
  plugins: {
    tailwindcss: {},    // Active Tailwind CSS
    autoprefixer: {},   // Ajoute les préfixes navigateurs automatiquement
  },
}
```

### `vite.config.js`
**But :** Configuration de Vite (bundler moderne)
- Hot Module Replacement (HMR) pour le développement
- Optimisation du build de production
- Gestion des assets et des imports

---

## 🎨 Styles

### `src/index.css`
**But :** Point d'entrée des styles globaux
```css
@tailwind base;       /* Styles de base (reset CSS) */
@tailwind components; /* Composants réutilisables */
@tailwind utilities;  /* Classes utilitaires */
```
**Fonctionnement :** 
- Tailwind génère automatiquement tous les styles nécessaires
- Seules les classes utilisées dans le code sont incluses (tree-shaking)

---

## ⚛️ Composants React

### `src/main.jsx`
**But :** Point d'entrée de l'application React
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
**Fonctionnement :**
- Monte l'application React dans l'élément HTML `#root`
- `React.StrictMode` active les vérifications de développement

### `src/App.jsx`
**But :** Composant racine qui assemble toutes les sections
```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// ... autres imports

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />    {/* Navigation fixe */}
      <Hero />      {/* Section d'accueil */}
      <About />     {/* À propos */}
      <Projects />  {/* Projets */}
      <Skills />    {/* Compétences */}
      <Contact />   {/* Contact */}
    </div>
  )
}
```
**Fonctionnement :**
- Importe tous les composants de section
- Les arrange dans l'ordre logique d'un portfolio
- Utilise Tailwind pour le layout (`min-h-screen`)

---

## 🧩 Composants de Section

### `src/components/Navbar.jsx`
**But :** Navigation fixe en haut de page
```jsx
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // État du menu mobile
  
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50">
      {/* Navigation desktop */}
      <div className="hidden md:block">
        <a href="#home">Accueil</a>
        <a href="#about">À propos</a>
        // ...
      </div>
      
      {/* Menu hamburger mobile */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {/* Icône hamburger */}
      </button>
      
      {/* Menu mobile conditionnel */}
      {isOpen && (
        <div className="md:hidden">
          {/* Liens mobile */}
        </div>
      )}
    </nav>
  )
}
```
**Fonctionnement :**
- **Navigation par ancres** : `href="#section"` → `id="section"`
- **Responsive** : Menu hamburger sur mobile, navigation classique sur desktop
- **Position fixe** : Reste visible pendant le scroll
- **État React** : `useState` pour gérer l'ouverture/fermeture du menu mobile

### `src/components/Hero.jsx`
**But :** Section d'accueil avec présentation
```jsx
const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Salut, je suis <span className="text-blue-400">Yoann</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Développeur Fullstack en recherche d'alternance
        </p>
        <a href="#projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Voir mes projets
        </a>
      </div>
    </section>
  )
}
```
**Fonctionnement :**
- **Layout centré** : `flex items-center justify-center`
- **Responsive typography** : `text-5xl md:text-7xl`
- **Dégradé de fond** : `bg-gradient-to-br from-gray-900 to-gray-800`
- **Call-to-action** : Bouton qui redirige vers la section projets

### `src/components/About.jsx`
**But :** Présentation personnelle et professionnelle
```jsx
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">À propos</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3>Yoann Développeur</h3>
            <p>Étudiant en Bachelor 2 Ynov Informatique</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h4>Formation</h4>
              <p>Bachelor 2 Ynov Informatique</p>
            </div>
            <div>
              <h4>Objectif</h4>
              <p>Alternance en développement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```
**Fonctionnement :**
- **Layout en carte** : Contenu dans une `bg-white rounded-lg shadow-lg`
- **Grid responsive** : `grid md:grid-cols-2`
- **Placeholder image** : Cercle gris pour la photo de profil
- **Contenu statique** : Informations hardcodées dans le composant

### `src/components/Projects.jsx`
**But :** Showcase des projets réalisés
```jsx
const Projects = () => {
  const projects = [
    {
      title: "Spotails",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React", "JavaScript", "CSS"],
      description: "Application web inspirée de Spotify...",
      github: "https://github.com/DallasJr/Spotails",
      demo: "#"
    },
    // ... autres projets
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2>Mes Projets</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <img src={project.image} alt={project.title} />
              
              <div className="p-6">
                <h3>{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p>{project.description}</p>
                
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Démo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```
**Fonctionnement :**
- **Données dynamiques** : Array d'objets projets
- **Rendu conditionnel** : `map()` pour générer les cartes
- **Grid responsive** : `md:grid-cols-2 lg:grid-cols-3`
- **Effets hover** : `hover:transform hover:scale-105`
- **Tags technos** : Boucle imbriquée pour afficher les technologies
- **Liens externes** : `target="_blank" rel="noopener noreferrer"`

### `src/components/Skills.jsx`
**But :** Visualisation des compétences techniques
```jsx
const Skills = () => {
  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 90 },
    // ... autres compétences
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-100 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Technologies & Outils */}
      <div className="flex flex-wrap justify-center gap-4">
        {["VS Code", "Docker", "Postman", "Figma"].map((tool, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </section>
  )
}
```
**Fonctionnement :**
- **Barres de progression** : CSS `width` dynamique avec `style={{ width: \`${skill.level}%\` }}`
- **Animation** : `transition-all duration-1000 ease-out`
- **Données structurées** : Array d'objets avec nom et niveau
- **Double section** : Compétences + Outils

### `src/components/Contact.jsx`
**But :** Formulaire de contact et informations
```jsx
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {/* ... autres champs */}
          </form>
        </div>
        
        {/* Informations de contact */}
        <div>
          <a href="mailto:yoann.sogoyou.pro@gmail.com">
            <svg>{/* Icône email */}</svg>
            yoann.sogoyou.pro@gmail.com
          </a>
          {/* ... autres liens */}
        </div>
      </div>
    </section>
  )
}
```
**Fonctionnement :**
- **État du formulaire** : `useState` pour gérer les champs
- **Gestion des événements** : `handleChange` et `handleSubmit`
- **Formulaire contrôlé** : `value` et `onChange` sur chaque input
- **Prévention du comportement par défaut** : `e.preventDefault()`
- **Layout en 2 colonnes** : Formulaire + informations de contact
- **Icônes SVG** : Icônes intégrées pour email, GitHub, LinkedIn

---

## 🔄 Flux de Données

```
1. main.jsx → Monte App.jsx dans le DOM
2. App.jsx → Importe et rend tous les composants
3. Chaque composant :
   - Gère ses propres données (useState)
   - Applique les styles Tailwind
   - Rend son JSX
4. Navigation → Liens d'ancres vers les sections
5. Interactions → État React pour les formulaires et menus
```

---

## 🎯 Concepts React Utilisés

- **Composants fonctionnels** : `const Component = () => {}`
- **JSX** : Syntaxe XML dans JavaScript
- **Props** : Passage de données entre composants (peu utilisé ici)
- **État local** : `useState` pour les interactions
- **Événements** : `onClick`, `onChange`, `onSubmit`
- **Rendu conditionnel** : `{condition && <element>}`
- **Listes** : `array.map()` pour générer des éléments
- **Refs et ancres** : Navigation par `href="#id"`

---

## 🎨 Concepts Tailwind Utilisés

- **Layout** : `flex`, `grid`, `min-h-screen`
- **Responsive** : `md:`, `lg:` préfixes
- **Colors** : `bg-gray-900`, `text-white`
- **Spacing** : `p-6`, `m-4`, `gap-8`
- **Typography** : `text-4xl`, `font-bold`
- **Effects** : `hover:`, `transition-all`
- **Positioning** : `fixed`, `relative`

---

## 🚀 Performance et Optimisations

- **Tree-shaking CSS** : Tailwind n'inclut que les classes utilisées
- **Hot Module Replacement** : Rechargement instantané en développement
- **Code splitting** : Vite optimise automatiquement le bundle
- **Lazy loading** : Possibilité d'ajouter avec `React.lazy()`

---

Cette architecture modulaire permet une maintenance facile et une personnalisation simple de chaque section ! 🎉