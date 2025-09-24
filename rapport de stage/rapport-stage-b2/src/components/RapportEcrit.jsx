import React from 'react'
import './RapportEcrit.css'

const RapportEcrit = () => {
  const go = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrint = () => window.print()

  return (
    <section id="rapport" className="rapport">
      {/* Hero néon */}
      <div className="rapport-hero">
        <div className="glow a" />
        <div className="glow b" />
        <div className="hero-glass">
          <h2 className="hero-title">
            <span className="gradient">RAPPORT ÉCRIT</span>
          </h2>
        </div>
        <div className="hero-sub">DJENA • Stage B2 • 2025</div>
        <div className="hero-divider">
          <span className="bar" />
          <span className="chip">📋</span>
          <span className="bar" />
        </div>

        <div className="hero-actions">
          <button className="btn neon" onClick={handlePrint}>Imprimer / Export PDF</button>
          <a className="btn outline" href="#annexes" onClick={(e)=>{e.preventDefault(); go('annexes')}}>Voir Annexes & Preuves</a>
        </div>
      </div>

      {/* Sommaire rapide */}
      <nav className="rapport-toc" aria-label="Sommaire">
        {[
          { id:'intro', label:'Introduction' },
          { id:'contexte', label:'Contexte' },
          { id:'missions', label:'Missions' },
          { id:'realisations', label:'Réalisations' },
          { id:'methodo', label:'Méthodologie' },
          { id:'competences', label:'Compétences' },
          { id:'bilan', label:'Bilan & Suites' }
        ].map(s => (
          <button key={s.id} className="toc-chip" onClick={() => go(s.id)}>{s.label}</button>
        ))}
      </nav>

      <div className="rapport-content">
        {/* INTRO */}
        <section id="intro" className="section-card">
          <h3 className="section-title">Introduction</h3>
          <p>
            Ce rapport présente mon stage B2 au sein de l’association DJENA. Objectifs principaux:
            montée en compétence sur React, livraison d’outils utiles (refonte du site et application
            forum) et bonnes pratiques professionnelles (Git, Trello, revues de code).
          </p>
          <div className="callout info">
            <strong>Livrables clés:</strong> refonte UI/UX du site, SPA forum en React consommant l’API legacy,
            formulaires bénévoles améliorés, documentation et screenshots disponibles en annexes.
          </div>
        </section>

        {/* CONTEXTE */}
        <section id="contexte" className="section-card">
          <h3 className="section-title">Contexte</h3>
          <ul className="bullets">
            <li>Association DJENA — prévention du harcèlement scolaire (impact social fort).</li>
            <li>Contrainte: base serveur existante (PHP/MySQL legacy) à respecter.</li>
            <li>Équipe resserrée: coordination, référent technique, stagiaire.</li>
            <li>Environnement: Vite, React, VS Code, Git, Trello, Figma.</li>
          </ul>
        </section>

        {/* MISSIONS */}
        <section id="missions" className="section-card">
          <h3 className="section-title">Missions</h3>
          <ul className="bullets">
            <li>Refonte du site: navigation, accessibilité, performance.</li>
            <li>Création d’une application forum (catégories, posts, réponses, likes, modération).</li>
            <li>Amélioration des formulaires bénévoles (validations, feedbacks, RGPD).</li>
            <li>Documentation, captures avant/après et handoff.</li>
          </ul>
        </section>

        {/* RÉALISATIONS */}
        <section id="realisations" className="section-card">
          <h3 className="section-title">Réalisations majeures</h3>
          <div className="grid-2">
            <div className="mini-card">
              <h4>Refonte du site</h4>
              <ul>
                <li>UI responsive, hiérarchie claire, composants réutilisables.</li>
                <li>Accessibilité: contrastes, focus, navigation clavier.</li>
                <li>Perfs: images optimisées, lazy-loading, typographie.</li>
              </ul>
            </div>
            <div className="mini-card">
              <h4>Application forum</h4>
              <ul>
                <li>Catégories, posts, réponses, likes, recherche, pagination.</li>
                <li>Modération: rôles, signalement, masquage.</li>
                <li>SPA React avec API PHP/MySQL existante.</li>
              </ul>
            </div>
          </div>
          <p className="hint">Captures et comparatifs avant/après disponibles dans la section Annexes.</p>
        </section>

        {/* MÉTHODO */}
        <section id="methodo" className="section-card">
          <h3 className="section-title">Méthodologie & Outils</h3>
          <ul className="bullets">
            <li>Gestion: Trello (To do → In progress → Review → Done), points réguliers.</li>
            <li>Qualité: ESLint/Prettier, revues de code, rétro-actions.</li>
            <li>UX: maquettes Figma, tests manuels et itérations rapides.</li>
            <li>Sécurité & RGPD: champs nécessaires, transparence, validation côté serveur.</li>
          </ul>
        </section>

        {/* COMPÉTENCES */}
        <section id="competences" className="section-card">
          <h3 className="section-title">Compétences consolidées</h3>
          <div className="tags">
            {[
              'React (hooks, composition, formulaires)',
              'Intégration API (fetch/axios, erreurs, loaders)',
              'Accessibilité (ARIA, focus management)',
              'Performance (lazy-load, pagination, debounce)',
              'Collaboration (Git, Trello, Figma)',
            ].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </section>

        {/* BILAN */}
        <section id="bilan" className="section-card">
          <h3 className="section-title">Bilan & Suites</h3>
          <p>
            Le stage a permis de livrer des améliorations visibles pour DJENA et d’acquérir
            des réflexes pro en React. Prochaines étapes: durcir la stack (TypeScript, tests
            E2E), améliorer l’observabilité et finaliser les fonctionnalités avancées du forum.
          </p>
          <div className="callout tip">
            <strong>Astuce:</strong> utiliser le bouton “Imprimer / Export PDF” pour générer un PDF propre du rapport.
          </div>
        </section>
      </div>
    </section>
  )
}

export default RapportEcrit