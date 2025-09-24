import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, FileText, Calendar, User } from 'lucide-react';

const Soutenance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Objectifs des soutenances",
      content: (
        <div className="slide-content">
          <h3>🎯 Pourquoi cette soutenance ?</h3>
          <ul className="slide-list">
            <li>✅ Évaluer l'expérience professionnelle acquise</li>
            <li>✅ Valoriser les compétences développées</li>
            <li>✅ Mesurer la progression B1 → B2</li>
            <li>✅ Valider la préparation pour l'alternance B3</li>
          </ul>
          <div className="slide-note">
            <strong>Note orateur :</strong> Expliquer l'importance de cette étape dans le cursus YNOV
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Progression des compétences",
      content: (
        <div className="slide-content">
          <h3>📈 Évolution B1 → B2 → B3 → Mastères</h3>
          <div className="progression-timeline">
            <div className="progression-step completed">
              <div className="step-number">B1</div>
              <div className="step-content">
                <h4>Découverte</h4>
                <p>Fondamentaux de l'informatique</p>
              </div>
            </div>
            <div className="progression-step current">
              <div className="step-number">B2</div>
              <div className="step-content">
                <h4>Autonomie</h4>
                <p>Outils multiples, projets concrets</p>
              </div>
            </div>
            <div className="progression-step future">
              <div className="step-number">B3</div>
              <div className="step-content">
                <h4>Spécialisation</h4>
                <p>Architecture, DevOps</p>
              </div>
            </div>
          </div>
          <div className="slide-note">
            <strong>Note orateur :</strong> Détailler les technologies maîtrisées au stage
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Supports B1/B2",
      content: (
        <div className="slide-content">
          <h3>📚 Livrables obligatoires B1/B2</h3>
          <div className="supports-grid">
            <div className="support-item">
              <FileText size={40} />
              <h4>Portfolio</h4>
              <p>Showcase des projets et compétences</p>
            </div>
            <div className="support-item">
              <Presentation size={40} />
              <h4>Rapport</h4>
              <p>Document structuré de l'expérience</p>
            </div>
            <div className="support-item">
              <FileText size={40} />
              <h4>Blog</h4>
              <p>5 articles dont bilan obligatoire</p>
            </div>
          </div>
          <div className="slide-note">
            <strong>Note orateur :</strong> Montrer les liens vers les réalisations concrètes
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Supports B3/Mastères",
      content: (
        <div className="slide-content">
          <h3>🚀 Évolution vers les niveaux supérieurs</h3>
          <div className="future-supports">
            <div className="future-item">
              <h4>B3 - Forme libre</h4>
              <p>Projets plus complexes, architecture avancée</p>
            </div>
            <div className="future-item">
              <h4>Mastères - Innovation</h4>
              <p>Recherche, innovation, leadership technique</p>
            </div>
          </div>
          <div className="slide-note">
            <strong>Note orateur :</strong> Expliquer les perspectives d'évolution
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Structure de soutenance",
      content: (
        <div className="slide-content">
          <h3>📋 Plan de présentation</h3>
          <div className="structure-flow">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <div className="flow-content">
                <h4>Introduction</h4>
                <p>Contexte, entreprise, missions</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-number">2</div>
              <div className="flow-content">
                <h4>Tâches réalisées</h4>
                <p>Projets, technologies, défis</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-number">3</div>
              <div className="flow-content">
                <h4>Bilan</h4>
                <p>Compétences acquises</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-number">4</div>
              <div className="flow-content">
                <h4>Perspectives</h4>
                <p>Alternance B3, objectifs</p>
              </div>
            </div>
          </div>
          <div className="slide-note">
            <strong>Note orateur :</strong> Détailler l'expérience chez DJENA selon cette structure
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Conclusion",
      content: (
        <div className="slide-content">
          <h3>🎯 Objectifs atteints</h3>
          <div className="conclusion-summary">
            <div className="achievement">
              <h4>✅ Compétences techniques</h4>
              <p>React, Node.js, PHP, MySQL maîtrisés</p>
            </div>
            <div className="achievement">
              <h4>✅ Compétences transversales</h4>
              <p>Travail en équipe, communication, autonomie</p>
            </div>
            <div className="achievement">
              <h4>✅ Préparation alternance</h4>
              <p>Profil prêt pour septembre 2025</p>
            </div>
          </div>
          <div className="slide-note">
            <strong>Note orateur :</strong> Conclure sur les perspectives d'alternance 2025
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="soutenance-container">
      <div className="soutenance-header">
        <h2 className="soutenance-title">🎤 Soutenance - 6 Slides</h2>
        <p className="soutenance-subtitle">
          Structure imposée selon les consignes YNOV
        </p>
        <button className="download-ppt-btn">
          <Download size={20} />
          Télécharger le PowerPoint
        </button>
      </div>

      <div className="slideshow-container">
        <div className="slide-navigation">
          <button onClick={prevSlide} className="nav-btn prev-btn">
            <ChevronLeft size={24} />
          </button>
          
          <div className="slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <button onClick={nextSlide} className="nav-btn next-btn">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slide-display">
          <div className="slide-header">
            <h3>Slide {slides[currentSlide].id}: {slides[currentSlide].title}</h3>
          </div>
          <div className="slide-body">
            {slides[currentSlide].content}
          </div>
        </div>

        <div className="slide-thumbnails">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            >
              Slide {slide.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soutenance;