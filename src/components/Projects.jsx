const Projects = () => {
  const projects = [
    {
      title: "B2DEV - E-commerce IA",
      image: "/assets/images/B2DEV.png",
      technologies: ["PHP", "MySQL", "JavaScript", "Chart.js", "Bootstrap", "API REST", "IA"],
      description: "E-commerce complet avec IA prédictive (régression linéaire), dashboard analytique temps réel, API REST et notifications intelligentes. Architecture POO professionnelle.",
      github: "https://github.com/sogoyou8/B2DEV",
      demo: "#", 
      featured: true,
      status: "🤖 AI",
      category: "AI/Fullstack"
    },
    {
      title: "Spotails",
      image: "/assets/images/spotails.png",
      technologies: ["React", "JavaScript", "CSS"],
      description: "Application web inspirée de Spotify avec interface moderne et fonctionnalités de lecture audio.",
      github: "https://github.com/DallasJr/Spotails",
      demo: "#",
      featured: true,
      status: "🔥 HOT",
      category: "Frontend"
    },
    {
      title: "E-commerce Dynamique (Basique)",
      image: "/assets/images/E-Commerce-Dynamique.png",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      description: "Site e-commerce avec gestion des utilisateurs, panier, favoris, commandes et back-office d'administration (CRUD).",
      github: "https://github.com/sogoyou8/e-commerce-dynamique",
      demo: "#",
      featured: false, // Plus featured car remplacé par B2DEV
      status: "💪 SOLID",
      category: "Fullstack"
    },
    {
      title: "FootPhysiqueTracker",
      image: "frontend/public/screenshot-dashboard.png",
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "Chart.js", "CSS", "API REST"],
      description: "Application web moderne pour joueurs de football amateurs : suivi des entraînements, objectifs physiques, statistiques de match, graphiques interactifs, notifications/rappels et exports PDF/CSV. Interface pensée pour la motivation et l’analyse personnalisée.",
      github: "https://github.com/sogoyou8/FootPhysiqueTracker",
      demo: "#",
      featured: false,
      status: "⚡ EPIC",
      category: "Fullstack"
    },
    {
      title: "API REST NINJA",
      image: "assets/images/projets-a-venir.jpg",
      technologies: ["PHP", "Symfony", "MySQL", "JWT"],
      description: "API REST ultra-sécurisée pour la gestion d'utilisateurs avec authentification JWT et documentation complète.",
      github: "#",
      demo: "#",
      featured: false,
      status: "💪 SOLID",
      category: "Backend"
    },
    {
      title: "Space Shooter JS",
      image: "/assets/images/Projet JS.png",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      description: "Jeu d’arcade JavaScript où tu pilotes un vaisseau pour survivre à des vagues d’aliens et collecter des pouvoirs. Score, pause, bonus, et plus à venir !",
      github: "https://github.com/sogoyou8/Projet_JS",
      demo: "#",
      featured: false,
      status: "🚀 LIVE",
      category: "Frontend"
    },
    {
      title: "Mobile App ROCKSTAR",
      image: "assets/images/projets-a-venir.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      description: "Application mobile cross-platform avec notifications push et synchronisation cloud.",
      github: "#",
      demo: "#",
      featured: false,
      status: "🎸 NEW",
      category: "Mobile"
    },
    {
      title: "AI Bot WIZARD",
      image: "assets/images/projets-a-venir.jpg",
      technologies: ["Python", "OpenAI", "Flask", "Docker"],
      description: "Bot IA conversationnel avec traitement du langage naturel et apprentissage adaptatif.",
      github: "#",
      demo: "#",
      featured: false,
      status: "🤖 AI",
      category: "AI/ML"
    }
  ];

  const getProjectColor = (category) => {
    const colors = {
      "Frontend": "from-blue-500 via-purple-500 to-pink-500",
      "Backend": "from-green-500 via-teal-500 to-cyan-500",
      "Fullstack": "from-yellow-400 via-red-500 to-pink-500",
      "Mobile": "from-purple-500 via-pink-500 to-red-500",
      "AI/ML": "from-cyan-400 via-blue-500 to-purple-600"
    };
    return colors[category] || colors["Frontend"];
  };

  const getStatusStyle = (status) => {
    const styles = {
      "🔥 HOT": "bg-gradient-to-r from-red-500 to-orange-500 text-white animate-pulse",
      "⚡ EPIC": "bg-gradient-to-r from-yellow-400 to-orange-500 text-black animate-bounce",
      "💪 SOLID": "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
      "🚀 LIVE": "bg-gradient-to-r from-green-500 to-teal-500 text-white animate-ping",
      "🎸 NEW": "bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse",
      "🤖 AI": "bg-gradient-to-r from-cyan-400 to-blue-500 text-black animate-zoom"
    };
    return styles[status] || styles["💪 SOLID"];
  };

  const handleDemoClick = (demoUrl) => {
    if (!demoUrl || demoUrl === "#") {
      alert("🚧 Demo coming soon !");
      return;
    }
    window.open(demoUrl, "_blank");
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-cyber py-20 relative overflow-hidden">
      {/* Effets de fond CYBER */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono animate-slide"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Titre EXPLOSIF */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 animate-float">
              PROJECTS
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
            <span className="text-3xl animate-spin" style={{animationDuration: '4s'}}>💻</span>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Mes <span className="text-gradient-cyber font-bold">CRÉATIONS </span> 
            les plus <span className="text-cyan-400 font-bold">ÉPIQUES</span> et 
            <span className="text-purple-400 font-bold"> INNOVANTES</span>
          </p>
        </div>

        {/* Projets Featured */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 animate-fadeInUp">
            ⭐ <span className="text-gradient-cyber">FEATURED PROJECTS</span> ⭐
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={index} 
                className="project-card-rockstar animate-slideInLeft group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Badge de statut */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Badge de catégorie */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getProjectColor(project.category)} text-white`}>
                    {project.category}
                  </span>
                </div>
                
                {/* Image avec overlay */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Effet de scan */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="p-8">
                  {/* Titre avec effet glow */}
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gradient-cyber transition-all duration-300 relative">
                    {project.title}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  
                  {/* Technologies avec effets */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-bold hover:shadow-glow-cyber hover:scale-105 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
                  
                  {/* Boutons avec effets CYBER */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full mt-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber group/btn w-full flex items-center justify-center"
                    >
                      <span className="text-xl mr-2 group-hover/btn:animate-bounce">⚡</span>
                      <span>CODE</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-pulse rounded-xl"></div>
                    </a>
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        handleDemoClick(project.demo);
                      }}
                      className="group/demo relative w-full flex items-center justify-center space-x-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-glow-cyber hover:scale-105"
                    >
                      <span className="text-xl group-hover/demo:animate-ping">🚀</span>
                      <span>{project.demo && project.demo !== "#" ? "DEMO" : "DEMO COMING SOON"}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autres Projets */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12 animate-fadeInUp">
            💎 <span className="text-gradient-fire">MORE AWESOME PROJECTS</span> 💎
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div 
                key={index} 
                className="project-card-rockstar animate-slideInRight group"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Badge de statut compact */}
                <div className="absolute top-3 right-3 z-20">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusStyle(project.status)}`}>
                    {project.status.split(' ')[0]}
                  </span>
                </div>

                {/* Badge de catégorie compact */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getProjectColor(project.category)} text-white`}>
                    {project.category}
                  </span>
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm w-full flex items-center justify-center h-12"
                    >
                      Code
                    </a>
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        handleDemoClick(project.demo);
                      }}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm w-full flex items-center justify-center h-12"
                    >
                      <span className="text-xl mr-2">🚀</span>
                      <span className="truncate">{project.demo && project.demo !== "#" ? "Demo" : "Demo Coming Soon"}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats des projets */}
        <div className="form-rockstar animate-fadeInUp relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-600/5 animate-pulse"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-center text-gradient-cyber mb-10">
              📊 PROJECT STATS 📊
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: `${projects.length}`, label: "Projects\nBUILT", icon: "💻" },
                { value: "5+", label: "Technologies\nUSED", icon: "⚡" },
                { value: "2", label: "Featured\nPROJECTS", icon: "⭐" },
                { value: "100%", label: "Code\nQUALITY", icon: "🎯" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="text-6xl md:text-7xl font-black text-gradient-cyber mb-3 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-gray-300 font-bold text-sm leading-tight whitespace-pre-line group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="relative inline-block">
            <p className="text-2xl text-gray-300 mb-8 font-light">
              Envie de voir plus de <span className="text-gradient-cyber font-bold">CRÉATIONS</span> ?
            </p>
            
            <a href="#contact" className="btn-cyber text-xl">
              <span className="text-2xl group-hover:animate-bounce">💻</span>
              <span>COLLABORONS ENSEMBLE</span>
              <span className="text-2xl group-hover:animate-ping">🚀</span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-xl"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;