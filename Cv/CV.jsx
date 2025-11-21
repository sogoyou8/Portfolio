import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Données extraites de votre portfolio
  const cvData = {
    profil: {
      nom: "Yoann Sogoyou",
      titre: "Développeur Fullstack",
      age: "24 ans",
      email: "yoann.sogoyou.pro@gmail.com",
      telephone: "07 81 85 83 92",
      linkedin: "linkedin.com/in/yoann-sogoyou",
      github: "github.com/sogoyou8",
      portfolio: "yoann-sogoyou.vercel.app",
      localisation: "Paris, France",
      rythme: "Alternance 2 semaines entreprise / 1 semaine école",
      disponibilite: "Disponible immédiatement",
      photo: "/assets/images/photoCv.jpg"
    },
    
    formation: [
      {periode: "2025 - 2026",
        diplome: "Bachelor 3 Informatique – Spécialisation Développement Web",
        etablissement: "Ynov Campus",
        description: "Spécialisation développement web (React, Node.js, gestion de bases de données SQL et MongoDB)"

      },
      {
        periode: "2023 - 2025",
        diplome: "Bachelor 1 et 2 Informatique",
        etablissement: "Ynov Campus",
        description: "Découverte des fondamentaux de l'informatique, premiers projets de développement web, Approfondissement des compétences, projets collaboratifs et spécialisation technologique"
      },
      {
        periode: "2022 - 2023", 
        diplome: "Baccalauréat Systèmes Numériques (Option C )",
        etablissement: "René Cassin",
        description: "Obtention du diplôme, Formation axée sur les réseaux, les systèmes communicants et l'architecture des réseaux."
      }
    ],

    experience: [
      {
        periode: "Mai - Juillet 2025",
        poste: "Stage Développeur",
        entreprise: "DJENA",
        description: "Développement d’une API REST avec Node.js et Express.js pour la gestion des utilisateurs Intégration d’interfaces React en collaboration avec l’équipe UI/UX",
        competences: ["HTML5", "CSS3", "Express.js", "Node.js", "React", "PHP", "MySQL", "API REST"]
      }
    ],

    // COMPÉTENCES COMPLÈTES DE VOTRE FORMATION
    competences: {
      frontend: [
        { nom: "HTML5", niveau: 90 },
        { nom: "CSS3", niveau: 85 }, 
        { nom: "JavaScript", niveau: 85 },
        { nom: "React", niveau: 80 },
        { nom: "React Native", niveau: 40 },
        { nom: "TypeScript", niveau: 40 },
        { nom: "Next.js", niveau: 50 },
        { nom: "Vue.js", niveau: 40 },
        { nom: "Tailwind CSS", niveau: 85 },
        { nom: "Bootstrap", niveau: 80 },
        { nom: "Framer Motion", niveau: 70 }
      ],
      backend: [
        { nom: "PHP", niveau: 80 },
        { nom: "Node.js", niveau: 75 },
        { nom: "Express.js", niveau: 75 },
        { nom: "Symfony", niveau: 70 },
        { nom: "Twig", niveau: 75 },
        { nom: "EasyAdmin", niveau: 70 },
        { nom: "Python", niveau: 70 },
        { nom: "Java", niveau: 65 }
      ],
      database: [
        { nom: "MySQL", niveau: 85 },
        { nom: "MongoDB", niveau: 75 },
        { nom: "SQL", niveau: 80 },
        { nom: "phpMyAdmin", niveau: 80 }
      ],
      tools: [
        { nom: "Git", niveau: 90 },
        { nom: "Docker", niveau: 65 },
        { nom: "Linux/Ubuntu", niveau: 75 },
        { nom: "Terminal/Bash", niveau: 75 },
        { nom: "Nginx", niveau: 60 },
        { nom: "Trello", niveau: 80 },
        { nom: "Postman", niveau: 80 },
        { nom: "Figma", niveau: 70 },
        { nom: "Discord", niveau: 95 },
        { nom: "VS Code", niveau: 95 }
      ],
      security: [
        { nom: "JWT", niveau: 75 },
        { nom: "Bcrypt", niveau: 70 },
        { nom: "APIs REST", niveau: 80 }
      ],
      other: [
        { nom: "Streamlit", niveau: 65 },
        { nom: "Pandas", niveau: 60 },
        { nom: "Mistral AI", niveau: 55 },
        { nom: "pfSense", niveau: 50 },
        { nom: "VLAN", niveau: 50 }
      ]
    },

    projets: [
      {
        nom: "Space Shooter JS",
        description: "Jeu d’arcade JavaScript où tu pilotes un vaisseau pour survivre à des vagues d’aliens et collecter des pouvoirs. Score, pause, bonus, et plus à venir !",
        technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
        statut: "En ligne"
      },
      {
        nom: "Spotails",
        description: "Application web immersive mêlant cocktails et univers musical : découvrez, gérez et administrez des recettes de cocktails thématiques dans une interface moderne .",
        technologies: [
          "React", "Bootstrap", "Framer Motion",
          "Node.js", "Express.js", "MongoDB",
          "JWT", "Bcrypt.js", "Multer"
        ],
        statut: "Terminé"
      },
      {
        nom: "Portfolio Personnel",
        description: "Développement d’un portfolio moderne et responsive pour présenter mon parcours, mes compétences et une mise en avant des réalisations.",
        technologies: ["React", "Tailwind CSS", "jsPDF", "html2canvas"],
        statut: "En ligne"
      },
      {
        nom: "E-Commerce Dynamique",
        description: "Développement d’une plateforme e-commerce complète en PHP orienté objet : gestion du catalogue produits, panier, commandes, factures PDF, favoris.",
        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "API REST"],
        statut: "En ligne"
      },
      {
        nom: "FootPhysiqueTracker",
        description: "Application web pour joueurs de football amateurs : suivi des entraînements, objectifs physiques, statistiques, notifications et exports PDF/CSV.",
        technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "Chart.js", "CSS3", "API REST"],
        statut: "En cours"
      },
      
    ],

    langues: [
      { langue: "Français", niveau: "Natif" },
      { langue: "Anglais", niveau: "Technique (B2)" }
    ],

    atouts: [
        {
            skill: "Adaptabilité rapide",
            exemple: "Maîtrise de nouvelles technologies (React, Docker) en quelques semaines"
        },
        {
            skill: "Esprit d'équipe", 
            exemple: "Projets collaboratifs en binôme pendant le stage chez DJENA"
        },
        {
            skill: "Résolution de problèmes",
            exemple: "Debug complexe d'APIs REST pendant le stage"
        },

    ],

    centresInteret: [
      "Football en club",
      "Sport",
      "Mystère",
      "Casses-têtes"
    ]
  };

  // 📄 FONCTION PDF OPTIMISÉE POUR A4
  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      const cvElement = document.getElementById('cv-content');
      
      if (!cvElement) {
        throw new Error('Élément CV non trouvé');
      }

      // Attendre que tous les éléments soient chargés
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 794,  // Largeur A4 en pixels
        height: 1123 // Hauteur A4 en pixels
      });

      const imgData = canvas.toDataURL('image/png', 0.98);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      // Ajout de l'image au format A4 exact
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save(`CV_Yoann_Sogoyou_${new Date().getFullYear()}.pdf`);
      
    } catch (error) {
      console.error('Erreur PDF:', error);
      alert('Erreur lors de la génération du PDF');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">CURRICULUM VITAE</h1>
            <p className="text-gray-600 mb-4">Développeur Fullstack • Recherche alternance septembre 2025</p>
          </div>
          <div id="cv-content"
            className="bg-white shadow-lg flex overflow-hidden"
            style={{
              width: '210mm',
              minHeight: '297mm',
              maxHeight: '297mm',
              margin: 0,
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            
            {/* COLONNE GAUCHE - 35% */}
            <div 
              className="bg-gray-800 text-white"
              style={{ 
                width: '35%',
                padding: '8px',
                fontSize: '10px',
                lineHeight: '1.2',
               height: '100%',
               overflowY: 'auto'
              }}
            >
              
              {/* Photo et En-tête */}
              <div className="text-center mb-2">
                <div className="w-20 h-20 mx-auto mb-1 overflow-hidden rounded-full shadow-lg">
                  <img 
                    src="/assets/images/photoCv.jpg"
                    alt="Photo de profil" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gray-600 flex items-center justify-center text-sm font-bold"
                    style={{ display: 'none' }}
                  >
                    YS
                  </div>
                </div>
                
                <h1 className="text-sm font-bold mb-1">{cvData.profil.nom}</h1>
                <div className="w-full h-0.5 bg-blue-400 mb-1"></div>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-semibold">{cvData.profil.titre}</h2>
                {/*<p className="text-xs text-gray-300">{cvData.profil.age}</p>*/}
              </div>

              {/* Recherche */}
              <div className="mb-1.5 p-1 rounded text-center">
                <p className="text-xs font-bold">🎯 {cvData.profil.rythme}</p>
                {/*<p className="text-xs text-blue-100">{cvData.profil.disponibilite}</p>*/}
              </div>

              {/* Contact */}
              <div className="mb-1.5">
                <h3 className="text-xs font-bold mb-1 text-blue-200 border-b border-gray-600 pb-0.5">
                  CONTACT
                </h3>
                <div className="space-y-0.5 text-xs">
                  <div className="flex items-center space-x-1">
                    <span>📧</span>
                    <span className="break-all">{cvData.profil.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📱</span>
                    <span>{cvData.profil.telephone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📍</span>
                    <span>{cvData.profil.localisation}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>💼</span>
                    <span className="break-all">{cvData.profil.linkedin}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🐙</span>
                    <span>{cvData.profil.github}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🌐</span>
                    <span className="break-all">{cvData.profil.portfolio}</span>
                  </div>
                </div>
              </div>

              {/* Langues */}
              <div className="mb-1.5">
                <h3 className="text-xs font-bold mb-1 text-blue-200 border-b border-gray-600 pb-0.5">
                  LANGUES
                </h3>
                <div className="space-y-0.5">
                  {cvData.langues.map((langue, index) => (
                    <div key={index} className="bg-gray-700 rounded p-0.5">
                      <div className="font-bold text-xs">{langue.langue}</div>
                      <div className="text-blue-300 text-xs">{langue.niveau}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-blue-200 border-b border-gray-600 pb-0.5">
                  🎨 FRONTEND
                </h3>
                <div className="grid grid-cols-2 gap-0.5">
                  {cvData.competences.frontend.map((comp, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded p-0.5 text-center">
                      <span className="text-xs font-semibold">{comp.nom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-purple-200 border-b border-gray-600 pb-0.5">
                  ⚙️ BACKEND
                </h3>
                <div className="grid grid-cols-2 gap-0.5">
                  {cvData.competences.backend.map((comp, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white rounded p-0.5 text-center">
                      <span className="text-xs font-semibold">{comp.nom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-orange-200 border-b border-gray-600 pb-0.5">
                  🗄️ DATABASE
                </h3>
                <div className="grid grid-cols-2 gap-0.5">
                  {cvData.competences.database.map((db, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white rounded p-0.5 text-center">
                      <span className="text-xs font-semibold">{db.nom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outils */}
              <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-green-200 border-b border-gray-600 pb-0.5">
                  🛠️ OUTILS
                </h3>
                <div className="grid grid-cols-2 gap-0.5">
                  {cvData.competences.tools.map((tool, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white rounded p-0.5 text-center">
                      <span className="text-xs font-semibold">{tool.nom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sécurité */}
              <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-red-200 border-b border-gray-600 pb-0.5">
                  🔒 SÉCURITÉ
                </h3>
                <div className="grid grid-cols-1 gap-0.5">
                  {cvData.competences.security.map((sec, index) => (
                    <div key={index} className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded p-0.5 text-center">
                      <span className="text-xs font-semibold">{sec.nom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              {/*
                <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-yellow-200 border-b border-gray-600 pb-0.5">
                  🌟 AUTRES
                </h3>
                <div className="grid grid-cols-2 gap-0.5">
                  {cvData.competences.other.map((other, index) => (
                    <div key={index} className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white rounded p-0.5 text-center">
                      <span className="text-xs font-semibold">{other.nom}</span>
                    </div>
                  ))}
                </div>
              </div>
              */}

              {/* Atouts */}
              <div className="mb-1">
                <h3 className="text-xs font-bold mb-1 text-blue-200 border-b border-gray-600 pb-0.5">
                  ✨ ATOUTS
                </h3>
                <div className="space-y-0.5">
                  {cvData.atouts.map((atout, index) => (
                    <div key={index} className="bg-gray-700/50 rounded p-0.5">
                      <div className="text-xs font-bold text-blue-200 mb-0.5">{atout.skill}</div>
                      <p className="text-xs">{atout.exemple}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Centres d'intérêt */}
              <div>
                <h3 className="text-xs font-bold mb-1 text-blue-200 border-b border-gray-600 pb-0.5">
                  🎯 CENTRES D'INTÉRÊT
                </h3>
                <div className="space-y-0.5">
                  {cvData.centresInteret.map((interet, index) => (
                    <div key={index} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded p-0.5">
                      <span className="text-xs font-medium">{interet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* COLONNE DROITE - 65% */}
            <div className="flex-1" style={{ padding: '8px', fontSize: '10px', lineHeight: '1.2' }}>
              
              {/* Profil Professionnel */}
              <div className="mb-2">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-2 rounded">
                  <h3 className="text-base font-bold text-gray-800 mb-1 flex items-center">
                    <span className="mr-2">👨‍💻</span>
                    PROFIL PROFESSIONNEL
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Étudiant en <strong className="text-blue-600">Bachelor 3 Informatique – Spécialisation Développement Web</strong> Passionné par les technologies 
                    modernes et doté d’une solide base technique, je maîtrise <strong className="text-purple-600">React, Node.js, PHP, Docker</strong>.
                    J’ai acquis une expérience concrète en <strong className="text-green-600">développement web, APIs REST, intelligence artificielle et infrastructure réseau</strong>.
                    Je suis actuellement à la recherche d'une <strong className="text-orange-600">alternance dès que possible</strong> pour approfondir mes compétences et relever de 
                    nouveaux défis techniques en environnement professionnel.
                  </p>
                </div>
              </div>

              {/* Formations */}
              <div className="mb-2">
                <h3 className="text-base font-bold text-gray-800 mb-1 flex items-center">
                  <span className="mr-2">🎓</span>
                  FORMATIONS
                  <div className="flex-1 h-px bg-blue-500 ml-4"></div>
                </h3>
                <div className="space-y-1">
                  {cvData.formation.map((form, index) => (
                    <div key={index} className="border border-gray-200 rounded p-1.5">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">{form.etablissement}</h4>
                          <p className="text-blue-600 font-semibold text-sm">{form.diplome}</p>
                        </div>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {form.periode}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs">{form.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expériences */}
              <div className="mb-2">
                <h3 className="text-base font-bold text-gray-800 mb-1 flex items-center">
                  <span className="mr-2">💼</span>
                  EXPÉRIENCES
                  <div className="flex-1 h-px bg-green-500 ml-4"></div>
                </h3>
                <div className="space-y-1">
                  {cvData.experience.map((exp, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded p-1.5">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">{exp.poste}</h4>
                          <p className="text-green-600 font-semibold text-sm">{exp.entreprise}</p>
                        </div>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {exp.periode}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mb-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.competences.map((comp, compIndex) => (
                          <span key={compIndex} className="bg-white text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold border border-green-200">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projets */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-1 flex items-center">
                  <span className="mr-2">🚀</span>
                  PROJETS RÉALISÉS
                  <div className="flex-1 h-px bg-purple-500 ml-4"></div>
                </h3>
                <div className="space-y-1">
                  {cvData.projets.map((projet, index) => (
                    <div key={index} className="bg-purple-50 border border-purple-200 rounded p-1.5">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-gray-800 text-sm">{projet.nom}</h4>
                        <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {projet.statut}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mb-1">{projet.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {projet.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-white text-purple-700 px-2 py-0.5 rounded-full text-xs font-semibold border border-purple-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* bouton téléchargement */}
      <div className="text-center mt-4">
        <button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
        >
          {isDownloading ? '⏳ Génération...' : '📥 Télécharger PDF'}
        </button>
      </div>
    </div>
  );
};

export default CV;