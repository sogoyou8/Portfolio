import React from 'react'
import './APropos.css'

const APropos = () => {
  return (
    <section id="apropos" className="apropos-hero">
      <div className="apropos-bg">
        <div className="glow-blob blob-1" />
        <div className="glow-blob blob-2" />
      </div>

      <div className="apropos-container">
        <div className="header">
          <h2 className="title">À PROPOS DU STAGE</h2>
          <p className="subtitle">Contexte, objectifs et rôle sur le projet</p>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Contexte & Entreprise</h3>
            <p>Association DJENA • Avril → Juillet 2025 • Équipe réduite, focus impact utilisateur.</p>
            <ul>
              <li>Refonte du site et application forum</li>
              <li>Front moderne sur base legacy PHP/MySQL</li>
              <li>Accessibilité, performances, UX</li>
            </ul>
          </div>

          <div className="card">
            <h3>Objectifs Pédagogiques B2</h3>
            <ul>
              <li>Intégration API et sécurité des échanges</li>
              <li>Gestion d’état, formulaires, validation</li>
              <li>Mise en place d’un chat en temps réel (socket.io)</li>
            </ul>
          </div>

          <div className="card">
            <h3>Rôle & Responsabilités</h3>
            <ul>
              <li>Composants React réutilisables + hooks</li>
              <li>Liaison BDD ↔ API ↔ Front (REST + WebSocket)</li>
              <li>Perf (lazy, memo), accessibilité, tests manuels</li>
            </ul>
          </div>

          <div className="card">
            <h3>Outils & Méthodo</h3>
            <ul>
              <li>Git (feature branches, PR, code review)</li>
              <li>Jira/Trello pour suivi tâches et roadmaps</li>
              <li>Figma pour maquettes et handoff</li>
            </ul>
          </div>
        </div>

        <div className="cta-wrap">
          <a href="#annexes" className="btn">Voir les preuves techniques</a>
          <a href="#rapport" className="btn alt">Aller au rapport écrit</a>
        </div>
      </div>
    </section>
  )
}

export default APropos