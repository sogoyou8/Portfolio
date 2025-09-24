import React, { useState } from 'react'
import './Annexes.css'

const Annexes = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('connexion')

  const annexesData = {
    connexion: {
      title: "🔐 Gestion Connexion Utilisateur",
      description: "Système d'authentification sécurisé avec sessions et validation",
      items: [
        {
          type: "Backend Architecture",
          content: "Mise en place d'un système de connexion robuste avec gestion des sessions utilisateur, validation des données et sécurisation des routes.",
          tech: ["PHP Sessions", "MySQL", "Validation", "Sécurité"]
        },
        {
          type: "Code Exemple - Connexion",
          content: `// Gestion de la connexion utilisateur
function loginUser($email, $password) {
    $user = getUserByEmail($email);
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_role'] = $user['role'];
        return ['success' => true, 'user' => $user];
    }
    return ['success' => false, 'error' => 'Identifiants invalides'];
}`,
          tech: ["PHP", "Security", "Sessions"]
        },
        {
          type: "Middleware de Sécurité",
          content: "Protection des routes et vérification des permissions utilisateur avant chaque action sensible.",
          tech: ["Middleware", "Authorization", "Route Protection"]
        }
      ]
    },
    chat: {
      title: "💬 Gestion Chat & Socket.io",
      description: "Architecture temps réel pour le système de chat et communication",
      items: [
        {
          type: "Architecture Socket.io",
          content: "Implémentation d'un système de chat temps réel avec gestion des channels, messages et utilisateurs connectés.",
          tech: ["Socket.io", "WebSockets", "Real-time"]
        },
        {
          type: "Code Backend - Chat Controller",
          content: `class ChatSocketController {
    handleConnection(socket) {
        socket.join('live:user:' + socket.user.id);
        socket.on('chat:message', (data) => {
            this.broadcastToGroup(data);
        });
    }

    async broadcastToGroup(payload) {
        const members = await this.fetchMembersFromChannel(payload.channel);
        members.forEach(member => {
            this.io.to('live:user:' + member).emit('chat:message:incoming', payload);
        });
    }
}`,
          tech: ["Node.js", "Socket.io", "Real-time Communication"]
        },
        {
          type: "Liaison BDD ↔ Front",
          content: "Synchronisation entre la base de données MySQL et l'interface React via APIs REST et WebSockets pour une expérience utilisateur fluide.",
          tech: ["API REST", "MySQL", "React", "State Management"]
        }
      ]
    },
    backend: {
      title: "⚙️ Backend & Infrastructure",
      description: "Screenshots et preuves techniques du développement backend",
      items: [
        {
          type: "Base de Données",
          content: "Conception et optimisation de la structure MySQL pour supporter les fonctionnalités forum avec relations complexes entre utilisateurs, messages et channels.",
          tech: ["MySQL", "Database Design", "Optimization"]
        },
        {
          type: "API Development",
          content: "Développement d'APIs REST sécurisées pour toutes les interactions front-end avec validation, gestion d'erreurs et documentation.",
          tech: ["REST API", "PHP", "Validation", "Error Handling"]
        },
        {
          type: "Screenshots Backend",
          content: "Captures d'écran du code backend montrant l'implémentation des fonctionnalités critiques : authentification, chat, modération.",
          tech: ["PHP", "Architecture", "Code Quality"]
        },
        {
          type: "Performance & Sécurité",
          content: "Optimisations des requêtes, mise en cache et sécurisation contre les attaques courantes (XSS, CSRF, injection SQL).",
          tech: ["Security", "Performance", "Best Practices"]
        }
      ]
    }
  }

  const handleDownload = (type) => {
    // Chemins corrigés selon la structure du dossier
    const filePaths = {
      convention: '/asset/CONVENTION DE STAGE_DJENA_PYC (1).pdf',
      screenshots: '/asset/image/image_stage.png', // ou image2_stage.png
      cv: '/asset/image/CV YOANN SOGOYOU 2025.pdf'
    };

    if (filePaths[type]) {
      // Ouvre le fichier dans un nouvel onglet
      window.open(filePaths[type], '_blank');
    } else {
      console.log(`Fichier ${type} non trouvé`);
    }
  }

  return (
    <section id="annexes" className="annexes-hero">
      <div className="annexes-bg">
        <div className="glow-blob blob-1" />
        <div className="glow-blob blob-2" />
        <div className="code-lines" />
      </div>

      <div className="annexes-container">
        {/* Header */}
        <div className="header-section">
          <div className="title-wrap">
            <h1 className="section-title">
              <span className="title-gradient">ANNEXES & PREUVES</span>
            </h1>
            <p className="section-subtitle">
              Code source, architecture technique et documentation détaillée
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs-navigation">
          {Object.keys(annexesData).map(key => (
            <button 
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">
                {key === 'connexion' && '🔐'}
                {key === 'chat' && '💬'}
                {key === 'backend' && '⚙️'}
              </span>
              <span className="tab-text">
                {key === 'connexion' && 'Connexion User'}
                {key === 'chat' && 'Chat & Socket.io'}
                {key === 'backend' && 'Backend Screens'}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div className="content-header">
            <h2 className="content-title">{annexesData[activeTab].title}</h2>
            <p className="content-description">{annexesData[activeTab].description}</p>
          </div>

          <div className="content-grid">
            {annexesData[activeTab].items.map((item, index) => (
              <div key={index} className="content-card">
                <div className="card-header">
                  <h3 className="card-title">{item.type}</h3>
                  <div className="tech-badges">
                    {item.tech.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="card-content">
                  {item.content.includes('function') || item.content.includes('class') ? (
                    <pre className="code-block">
                      <code>{item.content}</code>
                    </pre>
                  ) : (
                    <p className="text-content">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="documents-section">
          <h3 className="documents-title">📁 Documents & Ressources</h3>
          <div className="documents-grid">
            <div className="document-card">
              <div className="doc-icon">📋</div>
              <div className="doc-info">
                <h4>Convention de Stage</h4>
                <p>Document officiel DJENA - Modalités du stage</p>
              </div>
              <button 
                className="download-btn"
                onClick={() => handleDownload('convention')}
              >
                📥 Ouvrir PDF
              </button>
            </div>

            <div className="document-card">
              <div className="doc-icon">📸</div>
              <div className="doc-info">
                <h4>Screenshots Code</h4>
                <p>Captures d'écran du développement backend</p>
              </div>
              <button 
                className="download-btn"
                onClick={() => handleDownload('screenshots')}
              >
                👀 Voir Images
              </button>
            </div>

            <div className="document-card">
              <div className="doc-icon">📝</div>
              <div className="doc-info">
                <h4>CV Technique</h4>
                <p>CV détaillé avec compétences acquises</p>
              </div>
              <button 
                className="download-btn"
                onClick={() => handleDownload('cv')}
              >
                📄 Ouvrir CV
              </button>
            </div>

            {/* Nouvelle carte pour la deuxième image */}
            <div className="document-card">
              <div className="doc-icon">📷</div>
              <div className="doc-info">
                <h4>Screenshots Code 2</h4>
                <p>Captures supplémentaires du backend</p>
              </div>
              <button 
                className="download-btn"
                onClick={() => window.open('/asset/image/image2_stage.png', '_blank')}
              >
                👀 Voir Image 2
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="navigation-footer">
          <button 
            className="nav-btn prev"
            onClick={() => setCurrentSection && setCurrentSection('rapport')}
          >
            ← Rapport Écrit
          </button>
          <button 
            className="nav-btn next"
            onClick={() => setCurrentSection && setCurrentSection('blog')}
          >
            Blog B2 →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Annexes