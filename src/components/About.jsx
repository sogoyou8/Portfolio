const About = () => {
  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const experiences = [
    {
      period: "2025 - Été",
      title: "Stage Développeur", //FULLSTACK?
      company: "DJENA",
      description: "Stage en développement web où j'ai pu mettre en pratique mes compétences et découvrir le monde professionnel",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "stage"
    },
    {
      period: "2024 - 2025",
      title: "Bachelor 2 Informatique",
      company: "Ynov Campus",
      description: "Approfondissement des compétences, projets collaboratifs et spécialisation technologique",
      tech: [
      // Frontend & Frameworks
      "React", 
      "Framer Motion",
      "Bootstrap",
      "Tailwind CSS",
      
      // Backend & APIs
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "PHP", 
      "Symfony", 
      "Twig",
      "EasyAdmin",
      "JWT", 
      "Bcrypt", 
      "npm",
      "APIs REST",

      // Database & Tools
      "MySQL",
      "phpMyAdmin",
      
      // Data Science & IA
      "Python", 
      "Streamlit", 
      "Mistral AI", 
      "Pandas",
      
      // Infrastructure & Réseau
      "pfSense", 
      "VLAN", 
      "Nginx",
      "Docker", 
      
      // Outils
      "Git",
      "Postman",
      "Figma",
      "Trello",
      "Discord"
    ],
      type: "formation"
    },
    {
      period: "2023 - 2024",
      title: "Bachelor 1 Informatique",
      company: "Ynov Campus",
      description: "Découverte des fondamentaux de l'informatique, premiers projets de développement web ",
      tech: [
      // Web Development 
      "HTML5", 
      "CSS3", 
      "JavaScript", 
      //"PHP", 
      "Bootstrap",
      
      // Programming Languages
      "Go", 
      "Java",
      "C",
      
      // Systems & Infrastructure
      "Linux", 
      "Ubuntu",
      "Terminal/Bash",
      "Cisco",
      "Réseaux",
      
      // Database & Tools
      "MySQL", 
      "SQL",
      "Git",
      "Discord",
      
      // Computer Science Fundamentals
      "Algorithmes",
      "POO",
      "Structures de données"
    ],
      type: "formation"
    }
  ];

  const values = [
    {
      icon: "💻",
      title: "Code Propre",
      description: "Un code lisible aujourd'hui, c'est du temps gagné demain. Je privilégie la simplicité et la maintenabilité."
    },
    {
      icon: "🧠",
      title: "Apprentissage",
      description: "Chaque projet est une occasion d'apprendre. Je reste curieux et ouvert aux nouvelles technologies."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Les meilleures solutions naissent du travail d'équipe. J'aime partager mes idées et apprendre des autres."
    },
    {
      icon: "🎯",
      title: "Pragmatisme",
      description: "Résoudre de vrais problèmes avec des solutions concrètes. L'utilisateur final reste toujours ma priorité."
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 relative overflow-hidden">
      {/* Effets de fond subtils */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse-soft" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Titre élégant */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            À <span className="text-gradient">Propos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes valeurs et ma vision du développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Présentation personnelle */}
          <div className="animate-slideInLeft">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-gray-200/50">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-custom rounded-full mr-6 shadow-glow flex items-center justify-center text-white text-2xl font-bold animate-pulse-soft">
                  Y
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Yoann</h3>
                  <p className="text-gradient font-semibold text-lg">Développeur Fullstack</p>
                  <p className="text-gray-600">Bachelor 2 • Ynov Campus</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Étudiant en <strong className="text-blue-600">Bachelor 2 Informatique</strong> à Ynov Campus depuis 2 ans. 
                  Ce qui a commencé comme un choix d'orientation s'est transformé en une véritable passion pour le développement web.
                </p>
                
                <p>
                  Je me spécialise dans le <strong className="text-green-600">développement fullstack</strong>, avec un intérêt particulier pour l'aspect créatif du <strong className="text-purple-600">front-end </strong> 
                  et la logique du <strong className="text-pink-600">back-end </strong> . Mes projets personnels me permettent d'explorer des technologies 
                  et concepts non couverts en cours académique.
                </p>
                
                <p>
                  Mon objectif pour septembre 2025 : intégrer une équipe de développement en <strong className="text-orange-600">alternance </strong> 
                  pour appliquer mes compétences sur des projets concrets et continuer mon apprentissage 
                  aux côtés de développeurs expérimentés.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-sm text-gray-600">
                    🚀 <strong>Ce qui me motive :</strong> Transformer des idées en applications concrètes 
                    et voir l'impact positif sur les utilisateurs.
                  </p>
                </div>
              </div>

              {/* Statistiques interactives CLIQUABLES */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
                {/* Années d'expérience */}
                <div 
                  onClick={() => scrollToSection('#about')}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-sm text-gray-600 font-medium">Années d'apprentissage</div>
                </div>

                {/* Technologies - Clique vers Skills */}
                <div 
                  onClick={() => scrollToSection('#skills')}
                  className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm text-gray-600 font-medium group-hover:text-purple-700 transition-colors duration-300">
                      Technologies maîtrisées
                      <div className="text-xs text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 flex items-center justify-center">
                        👆 Voir mes compétences
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projets - Clique vers Projects */}
                <div 
                  onClick={() => scrollToSection('#projects')}
                  className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-green-600 mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-sm text-gray-600 font-medium group-hover:text-green-700 transition-colors duration-300">
                      Projets réalisés
                      <div className="text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                        👆 Découvrir mes projets
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact - Clique vers Contact */}
                <div 
                  onClick={() => scrollToSection('#contact')}
                  className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-orange-600 mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm text-gray-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                      Motivation alternance
                      <div className="text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                        👆 Me contacter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parcours et expériences */}
          <div className="animate-slideInRight">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Mon Parcours</h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-blue-500 hover:border-purple-500 animate-fadeInUp"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{exp.title}</h4>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => {
                      // Fonction pour rediriger vers Skills avec filtre spécifique
                      const handleTechClick = (clickEvent) => {
                        document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'});
                        
                        // Déterminer la catégorie pour le filtre
                        let category = 'all';
                        if (['React', 'JavaScript', 'HTML', 'HTML5', 'CSS', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Framer Motion'].includes(tech)) {
                          category = 'frontend';
                        } else if (['Node.js', 'Express.js', 'PHP', 'Symfony', 'APIs REST', 'JWT', 'Bcrypt'].includes(tech)) {
                          category = 'backend';
                        } else if (['MySQL', 'MongoDB', 'SQL', 'phpMyAdmin'].includes(tech)) {
                          category = 'database';
                        } else if (['Git', 'Docker', 'Postman', 'Figma', 'Trello', 'Discord', 'npm', 'EasyAdmin'].includes(tech)) {
                          category = 'tools';
                        }
                        
                        // Émettre un événement personnalisé pour filtrer
                        setTimeout(() => {
                          const customEvent = new CustomEvent('filterSkills', {
                            detail: { 
                              category: 'frontend', // ou la catégorie appropriée
                              source: 'about-tech',
                              badgeName: tech // Le nom de la technologie cliquée
                            } 
                          });
                          window.dispatchEvent(customEvent);
                        }, 80);
                      };

                      return (
                        <span 
                          key={techIndex}
                          onClick={handleTechClick}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 hover:scale-110 cursor-pointer relative overflow-hidden group ${
                            // 🔥 "JE SUIS VOTRE DÉVELOPPEUR FULLSTACK" - Rouge Impact
                            tech === 'React' || tech === 'JavaScript' || tech === 'HTML5' || tech === 'CSS3' || tech === 'HTML' || tech === 'CSS' ? 
                              'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-400/70 border-2 border-red-400/40 animate-pulse tech-hire-me' :
                            
                            // 🟢 "BACKEND SOLIDE, ÉQUIPE RENFORCÉE" - Vert Success
                            tech === 'Node.js' || tech === 'Express.js' || tech === 'PHP' || tech === 'Symfony' ? 
                              'bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-400/70 border-2 border-emerald-400/40 animate-pulse tech-hire-me' :
                            
                            // 🟠 "DONNÉES MAÎTRISÉES, PROJET SÉCURISÉ" - Orange Confiance
                            tech === 'MySQL' || tech === 'MongoDB' || tech === 'SQL' || tech === 'phpMyAdmin' ? 
                              'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-400/70 border-2 border-orange-400/40 animate-pulse tech-hire-me' :
                            
                            // 🟣 "API & SÉCURITÉ = VOTRE ATOUT" - Violet Pro
                            tech === 'APIs REST' || tech === 'JWT' || tech === 'Bcrypt' ? 
                              'bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-400/70 border-2 border-violet-400/40 animate-pulse tech-hire-me' :
                            
                            // 🔵 "DESIGN MODERNE, CLIENTS SATISFAITS" - Bleu Professionnel
                            tech === 'Bootstrap' || tech === 'Tailwind CSS' || tech === 'Twig' || tech === 'Framer Motion' ? 
                              'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md shadow-blue-400/40 hover:shadow-lg hover:shadow-blue-300/60 border border-blue-300/30 tech-valuable' :
                            
                            // 🟡 "WORKFLOW OPTIMISÉ, LIVRAISON RAPIDE" - Jaune Efficacité
                            tech === 'Git' || tech === 'Docker' || tech === 'Postman' ? 
                              'bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-900 shadow-md shadow-yellow-400/40 hover:shadow-lg hover:shadow-yellow-300/60 border border-yellow-300/30 tech-valuable' :
                            
                            // 🟢 "OUTILS PRO, RÉSULTATS GARANTIS" - Teal Productivité
                            tech === 'EasyAdmin' || tech === 'npm' ? 
                              'bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-md shadow-teal-400/40 hover:shadow-lg hover:shadow-teal-300/60 border border-teal-300/30 tech-valuable' :
                            
                            // 🟣 "DESIGN & GESTION = PROJETS RÉUSSIS" - Rose Créativité  
                            tech === 'Figma' || tech === 'Trello' ? 
                              'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-md shadow-pink-400/40 hover:shadow-lg hover:shadow-pink-300/60 border border-pink-300/30 tech-valuable' :
                            
                            // 🟣 "COMMUNICATION ÉQUIPE EFFICACE" - Violet Collaboration
                            tech === 'Discord' ? 
                              'bg-gradient-to-r from-violet-400 to-purple-500 text-white shadow-md shadow-violet-400/40 hover:shadow-lg hover:shadow-violet-300/60 border border-violet-300/30 tech-valuable' :
                            
                            // 🔵 "DATA SCIENCE, VALEUR AJOUTÉE" - Cyan Polyvalence
                            tech === 'Python' || tech === 'Streamlit' || tech === 'Mistral AI' || tech === 'Pandas' ? 
                              'bg-gradient-to-r from-cyan-300 to-cyan-400 text-cyan-900 shadow-sm shadow-cyan-300/30 hover:shadow-md hover:shadow-cyan-200/50 border border-cyan-200/30 tech-bonus' :
                            
                            // ⚫ "INFRASTRUCTURE COMPRISE" - Gris Infrastructure
                            tech === 'pfSense' || tech === 'VLAN' || tech === 'HAProxy' || tech === 'Nginx' || tech === 'Linux' || tech === 'Ubuntu' ? 
                              'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-sm shadow-gray-400/30 hover:shadow-md hover:shadow-gray-300/50 border border-gray-300/30 tech-bonus' :
                            
                            // 🟫 "PROGRAMMING FUNDAMENTALS" - Brun Académique
                            tech === 'Go' || tech === 'Java' || tech === 'C' || tech === 'Algorithmes' || tech === 'POO' || tech === 'Structures de données' ? 
                              'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-500/30 hover:shadow-md hover:shadow-amber-400/50 border border-amber-400/30 tech-bonus' :
                            
                            // 🔵 "SYSTEM ADMINISTRATION" - Indigo Technique
                            tech === 'Terminal/Bash' || tech === 'Cisco' || tech === 'Réseaux' ? 
                              'bg-gradient-to-r from-indigo-400 to-indigo-500 text-white shadow-sm shadow-indigo-400/30 hover:shadow-md hover:shadow-indigo-300/50 border border-indigo-300/30 tech-bonus' :
                            
                            // 🔘 "AUTRES COMPÉTENCES" - Gris Standard
                            'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 shadow-sm hover:shadow-md border border-gray-200/30 tech-standard'
                          }`}
                        >
                        {/* Tooltip de redirection */}
                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-40 shadow-xl">
                          👆 Voir dans mes compétences
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90"></div>
                        </div>

                        {/* Messages d'embauche pour les compétences clés */}
                        {(tech === 'React' || tech === 'JavaScript' || tech === 'HTML' || tech === 'HTML5' || tech === 'CSS' || tech === 'CSS3' ||
                          tech === 'Node.js' || tech === 'Express.js' || tech === 'PHP' || tech === 'Symfony' || tech === 'MySQL' || tech === 'MongoDB' || tech === 'APIs REST' ||
                          tech === 'Bootstrap' || tech === 'Tailwind CSS' || tech === 'Twig' || tech === 'Framer Motion' || tech === 'phpMyAdmin' ||
                          tech === 'Postman' || tech === 'Figma' || tech === 'npm' || tech === 'Linux' || tech === 'Ubuntu') && (
                          <>
                            {/* ✨ ÉTOILES FLOTTANTES AUTOUR */}
                            <div className="absolute -top-1 -left-1 w-3 h-3 text-yellow-400 animate-ping opacity-75">
                              ⭐
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 text-blue-400 animate-ping opacity-75" style={{animationDelay: '0.5s'}}>
                              ✨
                            </div>
                            <div className="absolute top-1 -right-2 w-2 h-2 text-purple-400 animate-ping opacity-60" style={{animationDelay: '1s'}}>
                              ⚡
                            </div>

                            {/* 🌊 VAGUE D'ÉNERGIE QUI TRAVERSE */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-pulse group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>

                            {/* 🎯 CERCLES CONCENTRIQUES AU HOVER */}
                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute inset-0 border-2 border-white/50 rounded-lg animate-ping"></div>
                              <div className="absolute inset-1 border border-white/30 rounded-lg animate-ping" style={{animationDelay: '0.3s'}}></div>
                            </div>

                            {/* 💫 PARTICULES MAGIQUES */}
                            <div className="absolute -top-2 left-1/2 w-1 h-1 bg-white rounded-full animate-bounce opacity-70" style={{animationDelay: '0.2s'}}></div>
                            <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full animate-bounce opacity-70" style={{animationDelay: '0.7s'}}></div>
                            <div className="absolute -bottom-2 left-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-70" style={{animationDelay: '1.2s'}}></div>

                            {/* 🔥 AURA ÉNERGÉTIQUE AUTOUR */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-current/20 to-transparent rounded-lg blur-sm animate-pulse opacity-50"></div>
                            
                            {/* 📱 TOOLTIP AMÉLIORÉ AVEC ANIMATION */}
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-xs px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-30 shadow-xl border border-gray-600">
                              {/* Flèche du tooltip */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                              
                              {/* Icône + texte */}
                              <div className="flex items-center space-x-2">
                                <span className="animate-pulse">
                                  {tech === 'React' && "⚛️"}
                                  {tech === 'JavaScript' && "⚡"}
                                  {(tech === 'HTML' || tech === 'HTML5') && "🏗️"}
                                  {(tech === 'CSS' || tech === 'CSS3') && "🎨"}
                                  {tech === 'Node.js' && "🚀"}
                                  {tech === 'Express.js' && "🔧"}
                                  {tech === 'PHP' && "💪"}
                                  {tech === 'Symfony' && "🏛️"}
                                  {tech === 'MySQL' && "🔒"}
                                  {tech === 'MongoDB' && "🍃"}
                                  {tech === 'APIs REST' && "🔗"}
                                  {tech === 'Bootstrap' && "🎨"}
                                  {tech === 'Tailwind CSS' && "🎯"}
                                  {tech === 'Twig' && "🏗️"}
                                  {tech === 'Framer Motion' && "✨"}
                                  {tech === 'phpMyAdmin' && "📊"}
                                  {tech === 'Postman' && "📡"}
                                  {tech === 'Figma' && "🎨"}
                                  {tech === 'npm' && "📦"}
                                  {tech === 'Linux' && "🐧"}
                                  {tech === 'Ubuntu' && "🖥️"}
                                </span>
                                <span className="font-bold">
                                  {tech === 'React' && "Interface moderne garantie"}
                                  {tech === 'JavaScript' && "Interactivité maximale"}
                                  {(tech === 'HTML' || tech === 'HTML5') && "Structure web parfaite"}
                                  {(tech === 'CSS' || tech === 'CSS3') && "Design web professionnel"}
                                  {tech === 'Node.js' && "Performance serveur"}
                                  {tech === 'Express.js' && "API robuste & rapide"}
                                  {tech === 'PHP' && "Backend robuste"}
                                  {tech === 'Symfony' && "Framework PHP pro"}
                                  {tech === 'MySQL' && "Données sécurisées"}
                                  {tech === 'MongoDB' && "Base NoSQL moderne"}
                                  {tech === 'APIs REST' && "Intégrations fluides"}
                                  {tech === 'Bootstrap' && "Framework CSS populaire"}
                                  {tech === 'Tailwind CSS' && "CSS utility-first moderne"}
                                  {tech === 'Twig' && "Templates Symfony"}
                                  {tech === 'Framer Motion' && "Animations React"}
                                  {tech === 'phpMyAdmin' && "Gestion de base de données"}
                                  {tech === 'Postman' && "Tests API efficaces"}
                                  {tech === 'Figma' && "Design UI moderne"}
                                  {tech === 'npm' && "Gestionnaire de paquets Node"}
                                  {tech === 'Linux' && "Système d'exploitation fiable"}
                                  {tech === 'Ubuntu' && "Distribution Linux populaire"}
                                </span>
                              </div>
                              
                              {/* Badge "COMPÉTENCE CLÉS" dans le tooltip */}
                              <div className="text-center mt-1 text-yellow-400 font-bold text-[10px] animate-pulse">
                                👑 COMPÉTENCE CLÉS 👑
                              </div>
                            </div>
                          </>
                        )}

                        <span className="relative z-10 drop-shadow-sm">{tech}</span>
                      </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valeurs et philosophie */}
        <div className="animate-fadeInUp">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Mes <span className="text-gradient">Valeurs</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 border border-gray-200/50 animate-slideInLeft"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 animate-bounce" style={{animationDelay: `${index * 0.5}s`}}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-fadeInUp">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-glow hover:shadow-card transition-all duration-500">
            <h3 className="text-3xl font-bold mb-4">Prêt à collaborer ?</h3>
            <p className="text-xl mb-6 opacity-90">
              Mes Travaux parlent mieux que les mots - découvrez mes réalisations concrètes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a 
                href="#projects" 
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg font-bold"
              >
                Voir mes Projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;