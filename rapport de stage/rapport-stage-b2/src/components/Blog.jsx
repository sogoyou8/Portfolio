import React, { useMemo, useState, useEffect } from 'react'
import './Blog.css'

const Blog = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Tous')
  const [openId, setOpenId] = useState(null)

  const articles = [
    {
      id: 1,
      title: "Bienvenue — Contexte et objectifs du stage B2",
      date: "2025-05-01",
      category: "Introduction",
      excerpt: "Cadre du stage chez DJENA, objectifs pédagogiques et organisation. Blog de suivi des livrables et apprentissages.",
      content: `Objectifs
- Monter en compétence sur React et l’écosystème frontend
- Contribuer à des livrables utiles: refonte du site + application forum
- Adopter des méthodes pro: Git, Trello, revues de code, documentation

Organisation
- Équipe resserrée: président (relations/coordination), référent technique (architecture/reviews), stagiaire
- Contexte associatif: impact social, ressources limitées, pragmatisme

Livrables suivis dans ce blog
- Refonte du site (UX, accessibilité, performance)
- Application forum (échanges, modération, notifications)
- Améliorations formulaires bénévoles et docs`
    },
    {
      id: 2,
      title: "Découverte du monde professionnel — Mes premières semaines chez DJENA",
      date: "2025-05-15",
      category: "Intégration",
      excerpt: "Immersion, outils collaboratifs, premiers développements avec React sur une base existante.",
      content: `Contexte
- Association DJENA (prévention harcèlement scolaire)
- Rôles présentés de manière générale: président (relations/coordination), référent technique (accompagnement technique)

Outils et setup
- VS Code, Vite, Chrome DevTools
- Trello (Kanban), Git (branches/features), Figma (maquettes)

Premier focus technique
- Intégration progressive de React pour dynamiser les formulaires et vues
- Respect du backend existant (API legacy en PHP/MySQL)
- Accessibilité et feedback utilisateur comme priorités

Résultats des 2 premières semaines
- Formulaires plus clairs (validations, messages d’erreur)
- Base de composants réutilisables
- Méthodologie et autonomie en progression`
    },
    {
      id: 3,
      title: "Technologies apprises et perfectionnées pendant le stage",
      date: "2025-06-10",
      category: "Technique",
      excerpt: "Montée en puissance sur React, intégration API, qualité de code et perfs.",
      content: `React
- Hooks: useState, useEffect, useMemo/useCallback
- Formulaires contrôlés, gestion d’état local et contexte léger
- Architecture UI: composants atomiques, composition

API & gestion d’erreurs
- fetch/axios, annulation via AbortController
- États de chargement, toasts, fallback UI
- Pagination, filtrage, debounce

Qualité & outils
- Vite, ESLint/Prettier, Chrome/React DevTools
- Accessibilité (ARIA, focus), perfs (lazy-loading, code splitting)`
    },
    {
      id: 4,
      title: "Projets réalisés chez DJENA — Site web et application forum",
      date: "2025-06-25",
      category: "Projets",
      excerpt: "Refonte du site (UX, a11y, perfs) et application forum en React consommant l’API existante.",
      content: `Projet 1 — Refonte du site
- UI responsive, navigation clarifiée, contenus structurés
- Accessibilité (contrastes, focus, clavier)
- Optimisations: images, lazy-loading, typographie

Projet 2 — Application Forum
- Catégories, posts, réponses, likes
- Rôles (membre/modération), signalement, masquage
- SPA React (routing/hooks), API REST (legacy) + MySQL

Impacts
- Échanges centralisés et capitalisés
- Parcours “devenir bénévole” simplifié
- Temps de chargement réduit`
    },
    {
      id: 5,
      title: "Recherche d’alternance B3 — Objectifs et stratégie 2025",
      date: "2025-07-01",
      category: "Avenir",
      excerpt: "Cible React/Node, roadmap technique, calendrier et attentes d’alternance.",
      content: `Profil post‑stage
- Refonte site + app forum (React)
- Outils: Git, Trello, Figma, Vite

Cibles & stack
- Entreprises SaaS/EdTech/Impact — React/Node
- A renforcer: TypeScript, Next.js, tests (Jest/Cypress), CI/CD

Stratégie
- Portfolio/démos → candidatures ciblées
- Meetups + itérations techniques
- Signature visée d’ici mars 2025`
    }
  ]

  const categories = useMemo(
    () => ['Tous', ...Array.from(new Set(articles.map(a => a.category)))],
    [articles]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter(a => {
      const inCat = category === 'Tous' || a.category === category
      const inText = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      return inCat && inText
    })
  }, [articles, query, category])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenId(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const open = articles.find(a => a.id === openId)

  return (
    <section id="blog" className="blog">
      {/* Fond et titre style “PROJECTS” */}
      <div className="blog-hero">
        <div className="glow a" />
        <div className="glow b" />
        <div className="hero-glass">
          <h2 className="hero-title">
            <span className="gradient">BLOG B2</span>
          </h2>
        </div>
        <div className="hero-sub">
          Chroniques de stage • React • UX • Méthodes pro
        </div>
        <div className="hero-divider">
          <span className="bar" />
          <span className="chip">✨</span>
          <span className="bar" />
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="blog-controls">
        <div className="filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Rechercher un article…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grille d’articles */}
      <div className="blog-grid">
        {filtered.map(a => (
          <article key={a.id} className="blog-card">
            <div className="card-inner">
              <div className="card-top">
                <span className="badge">{a.category}</span>
                <time className="date">{new Date(a.date).toLocaleDateString('fr-FR')}</time>
              </div>
              <h3 className="card-title">{a.title}</h3>
              <p className="card-excerpt">{a.excerpt}</p>
              <div className="card-actions">
                <button className="btn neon" onClick={() => setOpenId(a.id)}>Lire l’article</button>
              </div>
            </div>
            <div className="card-glow" />
          </article>
        ))}
      </div>

      {/* Modale de lecture */}
      {open && (
        <div className="modal" onClick={() => setOpenId(null)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="badge">{open.category}</span>
              <h3 className="modal-title">{open.title}</h3>
              <button className="close" onClick={() => setOpenId(null)}>✖</button>
            </div>
            <div className="modal-meta">
              <time>{new Date(open.date).toLocaleDateString('fr-FR')}</time>
            </div>
            <div className="modal-content">
              {open.content.split('\n').map((line, i) =>
                line.trim().startsWith('- ') ? (
                  <li key={i}>{line.replace('- ', '')}</li>
                ) : line.trim().length === 0 ? (
                  <br key={i} />
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>
            <div className="modal-footer">
              <button className="btn neon" onClick={() => setOpenId(null)}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog