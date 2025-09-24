import React from 'react'
import './Presentation.css'

const Presentation = ({ setCurrentSection }) => {
  const go = (section) => {
    if (setCurrentSection) setCurrentSection(section)
    else window.location.hash = section
  }

  return (
    <section id="accueil" className="accueil-hero" style={{width: '100%'}}>
      {/* Fond néon */}
      <div className="accueil-bg">
        <div className="glow-blob blob-1" />
        <div className="glow-blob blob-2" />
        <div className="scan-line" />
      </div>

      <div className="accueil-container" style={{width: '100%', maxWidth: '100%'}}>
        {/* Titre style “PROJECTS” */}
        <div className="title-wrap">
          <div className="title-glass">
            <h1 className="hero-title">
              <span className="t-gradient">RAPPORT DE STAGE</span>
            </h1>
            <div className="title-shadow" />
          </div>
          <div className="title-sub">
            Association DJENA • Avril à Juillet 2025 • Focus React et UX
          </div>
          <div className="title-divider">
            <span className="bar left" />
            <span className="chip">⚡</span>
            <span className="bar right" />
          </div>
        </div>

        {/* Accroche */}
        <p className="hero-tagline">
          Mes créations les plus utiles et innovantes pour l’association : refonte du site et application forum. 
          Méthodes pro, accessibilité, performances, intégration API.
        </p>

        {/* CTAs vers les sections */}
        <div className="cta-row">
          <button className="cta neon pink" onClick={() => go('blog')}>
            <span className="emoji">📝</span>
            <span className="text">Blog B2</span>
          </button>
          <button className="cta neon cyan" onClick={() => go('rapport')}>
            <span className="emoji">📋</span>
            <span className="text">Rapport écrit</span>
          </button>
          <button className="cta neon lime" onClick={() => go('annexes')}>
            <span className="emoji">📎</span>
            <span className="text">Annexes & Preuves</span>
          </button>
          <button className="cta neon purple" onClick={() => go('apropos')}>
            <span className="emoji">👤</span>
            <span className="text">À propos</span>
          </button>
        </div>

        {/* Points clés */}
        <div className="pillars">
          <div className="pillar">
            <div className="p-icon">⚛️</div>
            <div className="p-title">React moderne</div>
            <div className="p-desc">Hooks, composants réutilisables, formulaires, état, perf</div>
          </div>
          <div className="pillar">
            <div className="p-icon">🛠️</div>
            <div className="p-title">Intégration API</div>
            <div className="p-desc">Front React sur base legacy PHP/MySQL, sécurité et validation</div>
          </div>
          <div className="pillar">
            <div className="p-icon">👥</div>
            <div className="p-title">Produits livrés</div>
            <div className="p-desc">Refonte du site DJENA et app forum avec modération</div>
          </div>
        </div>

        {/* Indication navigation */}
        <div className="scroll-hint">
          <span className="dot" />
          <span className="hint-text">Choisissez une section ci‑dessus</span>
        </div>
      </div>
    </section>
  )
}

export default Presentation