import { useEffect, useState } from 'react';

const Skills = () => {
  // États pour le filtrage
  const [activeFilter, setActiveFilter] = useState('all');
  //const [highlightedSkills, setHighlightedSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState({});

  // 📊 DONNÉES DYNAMIQUES basées sur vos vraies compétences
  const skillsData = {
    frontend: [
      { name: "React", level: 70, projects: 3, category: "library", icon: "⚛️", specialty: "Interface Moderne" },
      { name: "JavaScript", level: 60, projects: 4, category: "language", icon: "⚡", specialty: "Code Dynamique" },
      { name: "HTML5", level: 80, projects: 5, category: "markup", icon: "🏗️", specialty: "Structure Web" },
      { name: "CSS3", level: 80, projects: 5, category: "styling", icon: "🎨", specialty: "Design Visuel" },
      { name: "Bootstrap", level: 75, projects: 2, category: "framework", icon: "🅱️", specialty: "Style Rapide" },
      { name: "Tailwind CSS", level: 50, projects: 1, category: "framework", icon: "🎯", specialty: "CSS Moderne" },
      { name: "Chart.js", level: 65, projects: 2, category: "library", icon: "📊", specialty: "Graphiques Dynamiques" }
    ],
    backend: [
      { name: "Node.js", level: 65, projects: 3, category: "runtime", icon: "🚀", specialty: "Serveur JS" },
      { name: "Express.js", level: 65, projects: 3, category: "framework", icon: "🔧", specialty: "API Rapide" },
      { name: "PHP", level: 80, projects: 2, category: "language", icon: "🔥", specialty: "Web Backend" },
      { name: "Symfony", level: 40, projects: 1, category: "framework", icon: "⚔️", specialty: "Framework PHP" },
      { name: "MySQL", level: 70, projects: 4, category: "database", icon: "💎", specialty: "Base de Données" },
      { name: "MongoDB", level: 50, projects: 1, category: "database", icon: "🍃", specialty: "Base NoSQL" },
      { name: "APIs REST", level: 60, projects: 2, category: "architecture", icon: "🔗", specialty: "Communication Web" },
      { name: "JWT", level: 60, projects: 2, category: "security", icon: "🔐", specialty: "Auth sécurisée" }
    ],
    tools: [
      { name: "Git", level: 75, projects: 5, category: "version", icon: "🎯", specialty: "Contrôle Version" },
      { name: "npm", level: 70, projects: 4, category: "package", icon: "📦", specialty: "Gestionnaire Packages" },
      { name: "VS Code", level: 90, projects: 6, category: "editor", icon: "💻", specialty: "Éditeur Pro" },
      { name: "phpMyAdmin", level: 75, projects: 3, category: "database", icon: "🗃️", specialty: "Admin DB" },
      { name: "Postman", level: 75, projects: 4, category: "api", icon: "📡", specialty: "Tests API" },
      { name: "Figma", level: 60, projects: 2, category: "design", icon: "🎨", specialty: "Design UI" },
      { name: "Docker", level: 45, projects: 1, category: "devops", icon: "🐳", specialty: "Conteneurisation" },
      { name: "Linux", level: 55, projects: 2, category: "devops", icon: "🐧", specialty: "Système Unix" }
    ],
    mobile: [
      { name: "React Native", level: 35, projects: 0, category: "mobile", icon: "📱", specialty: "Apps Mobiles" },
      { name: "PWA", level: 40, projects: 1, category: "mobile", icon: "🔧", specialty: "Web Apps" }
    ]
  };

  // 🛠️ OUTILS SUPPLÉMENTAIRES (style ROCKSTAR)
  const tools = [
    { name: "VS Code", category: "IDE", icon: "💻", level: "Expert" },
    { name: "Docker", category: "DevOps", icon: "🐳", level: "Débutant" },
    { name: "Postman", category: "API", icon: "📡", level: "Avancé" },
    { name: "phpMyAdmin", category: "Database", icon: "🗃️", level: "Intermédiaire" },
    { name: "GitHub", category: "Version", icon: "🐙", level: "Confirmé" },
    { name: "npm", category: "Package", icon: "📦", level: "Confirmé" },
    { name: "Webpack", category: "Build", icon: "⚡", level: "Débutant" },
    { name: "Composer", category: "PHP", icon: "🎼", level: "Débutant" },
    { name: "Trello", category: "Gestion", icon: "📋", level: "Intermédiaire" },
    { name: "Discord", category: "Communication", icon: "💬", level: "Expert" }
  ];

  // 🎯 BOUTONS DE FILTRAGE - Avec fullstack et mobile
  const filterButtons = [
    { id: 'all', name: 'Tous', icon: '🎯' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'fullstack', name: 'Fullstack', icon: '🔥' },
    { id: 'devops', name: 'DevOps', icon: '🐳' },
    { id: 'mobile', name: 'Mobile', icon: '📱' }
  ];

  // Initialisation du filtrage
  useEffect(() => {
    setFilteredSkills(skillsData);
  }, []);

  // Fonction de filtrage - Mise à jour avec fullstack et mobile
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    
    let filtered = { frontend: [], backend: [], tools: [], mobile: [] };
    
    switch (filterId) {
      case 'all':
        filtered = skillsData;
        break;
      case 'frontend':
        filtered = { frontend: skillsData.frontend, backend: [], tools: [], mobile: [] };
        break;
      case 'backend':
        filtered = { frontend: [], backend: skillsData.backend, tools: [], mobile: [] };
        break;
      case 'fullstack':
        // Combine frontend et backend pour fullstack
        filtered = { 
          frontend: skillsData.frontend, 
          backend: skillsData.backend, 
          tools: [], 
          mobile: [] 
        };
        break;
      case 'devops':
        filtered = { 
          frontend: [], 
          backend: [], 
          tools: skillsData.tools.filter(skill => skill.category === 'devops'),
          mobile: [] 
        };
        break;
      case 'mobile':
        filtered = { 
          frontend: [], 
          backend: [], 
          tools: [],
          mobile: skillsData.mobile || []
        };
        break;
      case 'tools':
        filtered = { 
          frontend: [], 
          backend: [], 
          tools: skillsData.tools.filter(skill => skill.category !== 'devops'),
          mobile: [] 
        };
        break;
      default:
        filtered = skillsData;
    }
    
    setFilteredSkills(filtered);
  };

  // 🎯 SYSTÈME DE FILTRAGE depuis Hero/About
  useEffect(() => {
  const handleFilterSkills = (event) => {
    const { category, source, badgeName } = event.detail;
    
    console.log(`🎯 Filtrage déclenché depuis ${source}: ${category} - ${badgeName}`);
    
    // 1. Applique le filtrage
    setActiveFilter(category);
    handleFilterChange(category);
    
    // 2. Scroll vers la section Skills d'abord
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // 3. Après un délai, scroll vers la compétence spécifique
      setTimeout(() => {
        const specificSkill = document.querySelector(`[data-skill="${badgeName}"]`);
        if (specificSkill) {
          specificSkill.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          // 4. Highlight spécifique de la compétence
          specificSkill.classList.add('skill-highlight-specific');
          setTimeout(() => {
            specificSkill.classList.remove('skill-highlight-specific');
          }, 3000);
        }
      }, 800); // Délai pour laisser le temps au filtrage
    }
  };

  window.addEventListener('filterSkills', handleFilterSkills);
  
  return () => {
    window.removeEventListener('filterSkills', handleFilterSkills);
  };
}, []);  

  // 🧮 CALCULS DYNAMIQUES - Mis à jour pour inclure mobile
  const getAllSkills = () => {
    return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools, ...(skillsData.mobile || [])];
  };

  const getTotalSkills = () => getAllSkills().length;

  const getHighLevelSkills = () => {
    return getAllSkills().filter(skill => skill.level >= 70).length;
  };

  const getAverageLevel = () => {
    const skills = getAllSkills();
    const average = skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length;
    return Math.round(average);
  };

  const getTopSkills = () => {
    return getAllSkills()
      .sort((a, b) => b.level - a.level)
      .slice(0, 3)
      .map(skill => skill.name);
  };

  const scrollToSection = (target) => {
    if (target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // 📊 STATISTIQUES DYNAMIQUES VÉRIDIQUES
  const dynamicStats = [
    { 
      value: getTotalSkills(), 
      label: "Technologies\nAPPRISES", 
      icon: "⚡",
      description: "Nombre total de technologies que vous maîtrisez",
      clickable: true,
      target: "#skills"
    },
    { 
      value: getHighLevelSkills(), 
      label: "Compétences\nSOLIDES", 
      icon: "💪",
      description: "Technologies avec un niveau supérieur à 70%",
      clickable: false
    },
    { 
      value: `${getAverageLevel()}%`, 
      label: "Niveau\nMOYEN", 
      icon: "📊",
      description: "Votre niveau moyen sur toutes les technologies",
      clickable: false
    },
    { 
      value: "2+", 
      label: "Années\nÉTUDES", 
      icon: "🎓",
      description: "Bachelor 2 Informatique à Ynov Campus",
      clickable: true,
      target: "#about"
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 80) return "from-emerald-400 via-green-500 to-teal-600";
    if (level >= 70) return "from-blue-400 via-cyan-500 to-indigo-600";
    if (level >= 60) return "from-purple-400 via-violet-500 to-fuchsia-600";
    return "from-orange-400 via-red-500 to-pink-600";
  };

  const getCategoryStyle = (category) => {
    const styles = {
      "IDE": "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white shadow-blue-500/50",
      "DevOps": "bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white shadow-green-500/50",
      "API": "bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 text-white shadow-orange-500/50",
      "Design": "bg-gradient-to-br from-pink-600 via-rose-700 to-fuchsia-800 text-white shadow-pink-500/50",
      "Version": "bg-gradient-to-br from-gray-600 via-slate-700 to-zinc-800 text-white shadow-gray-500/50",
      "Build": "bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 text-white shadow-purple-500/50",
      "Package": "bg-gradient-to-br from-red-600 via-rose-700 to-pink-800 text-white shadow-red-500/50",
      "PHP": "bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white shadow-indigo-500/50",
      "Gestion": "bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 text-white shadow-emerald-500/50",
      "Communication": "bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white shadow-violet-500/50"
    };
    return styles[category] || styles["Version"];
  };

  // Fonction pour rendre une carte de compétence
  const renderSkillCard = (skill, index, category, delay = 0) => (
    <div 
      key={`${category}-${index}`} 
      data-skill={skill.name}
      data-category={category}
      className="card-rockstar animate-slideInLeft transition-all duration-500"
      style={{animationDelay: `${delay * 0.15}s`}}
    >
      {/* Effet de glow au hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
      
      <div className="relative">
        {/* Header avec icône et niveau */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-lg">
              {skill.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-400 font-medium italic">
                {skill.specialty}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-black text-gradient-rockstar">
              {skill.level}%
            </div>
            <div className="text-xs text-gray-500 font-medium">LEVEL</div>
          </div>
        </div>
        
        {/* Barre de progression ROCKSTAR */}
        <div className="relative mb-4">
          <div className="h-4 bg-gray-800 rounded-full border border-gray-700 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} relative transition-all duration-1000 ease-out rounded-full`}
              style={{ width: `${skill.level}%` }}
            >
              {/* Effet de brillance animée */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-slide"></div>
            </div>
          </div>
          
          {/* Étincelles niveau */}
          <div className="flex justify-between text-xs text-gray-500 mt-2 font-semibold">
            <span className={skill.level >= 25 ? "text-yellow-400" : ""}>JUNIOR</span>
            <span className={skill.level >= 50 ? "text-orange-400" : ""}>RÉGULIER</span>
            <span className={skill.level >= 75 ? "text-red-400" : ""}>SENIOR</span>
            <span className={skill.level >= 90 ? "text-pink-400" : ""}>MASTER</span>
          </div>
        </div>

        {/* Badge de maîtrise et projets */}
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            skill.level >= 80 ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black" :
            skill.level >= 70 ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-white" :
            skill.level >= 60 ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white" :
            skill.level < 50 ? "bg-gradient-to-r from-red-400 to-pink-500 text-white" :
            "bg-gradient-to-r from-orange-400 to-red-500 text-white"
          } shadow-lg`}>
            {skill.level >= 80 ? "🏆 MASTER" :
             skill.level >= 70 ? "⭐ SENIOR" :
             skill.level >= 60 ? "💪 CONFIRMÉ" : 
             skill.level < 50 ? "📚 APPRENTISSAGE" : "🔥 JUNIOR"}
          </span>
          
          <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
            {skill.projects} projet{skill.projects > 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen bg-gradient-rockstar py-20 relative overflow-hidden">
      {/* Effets de fond rockstar */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Titre ROCKSTAR */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="relative inline-block">
            <h2 className="title-rockstar mb-6">
              SKILLS
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-500 animate-pulse"></div>
            <span className="text-2xl animate-bounce">🎸</span>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            <span className="text-gradient-rockstar font-bold">Code Like a ROCKSTAR</span> • 
            Technologies qui me font vibrer et outils qui déchaînent ma créativité
          </p>
        </div>

        {/* 🎛️ BOUTONS DE FILTRAGE - 6 boutons avec fullstack et mobile */}
        <div className="mb-16 animate-fadeInUp">
          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => handleFilterChange(button.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${
                  activeFilter === button.id
                    ? 'bg-white text-black shadow-xl'
                    : 'bg-gray-800 text-gray-300 border-2 border-gray-600 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{button.icon}</span>
                  <span>{button.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Section Compétences FILTRÉES */}
        <div className="mb-20">
          <h3 className="subtitle-rockstar animate-fadeInUp">
            🔥 <span className="text-gradient-fire">TECH ARSENAL</span> 🔥
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FRONTEND filtrés */}
            {filteredSkills.frontend?.map((skill, index) => 
              renderSkillCard(skill, index, 'frontend', index)
            )}

            {/* BACKEND filtrés */}
            {filteredSkills.backend?.map((skill, index) => 
              renderSkillCard(skill, index, 'backend', (filteredSkills.frontend?.length || 0) + index)
            )}

            {/* TOOLS filtrés */}
            {filteredSkills.tools?.map((skill, index) => 
              renderSkillCard(skill, index, skill.category === 'devops' ? 'devops' : 'tools', 
                (filteredSkills.frontend?.length || 0) + (filteredSkills.backend?.length || 0) + index)
            )}

            {/* MOBILE filtrés */}
            {filteredSkills.mobile?.map((skill, index) => 
              renderSkillCard(skill, index, 'mobile', 
                (filteredSkills.frontend?.length || 0) + (filteredSkills.backend?.length || 0) + (filteredSkills.tools?.length || 0) + index)
            )}
          </div>

          {/* Message si aucun résultat */}
          {(filteredSkills.frontend?.length || 0) + (filteredSkills.backend?.length || 0) + (filteredSkills.tools?.length || 0) + (filteredSkills.mobile?.length || 0) === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🤷‍♂️</div>
              <p className="text-xl text-gray-400 mb-4">Aucune compétence trouvée pour ce filtre</p>
              <button 
                onClick={() => handleFilterChange('all')}
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                Voir toutes les compétences
              </button>
            </div>
          )}
        </div>

        {/* Section Outils ROCKSTAR */}
        <div className="mb-20">
          <h3 className="subtitle-rockstar animate-fadeInUp">
            ⚡ <span className="text-gradient-cyber">POWER TOOLS</span> ⚡
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className={`${getCategoryStyle(tool.category)} p-6 rounded-2xl font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-white/20 group relative overflow-hidden`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Effet de particules */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-lg">
                    {tool.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-black text-lg">{tool.name}</div>
                    <div className="text-sm opacity-90 font-semibold">{tool.category}</div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full mt-2 font-bold">
                      {tool.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 TECH ARSENAL DYNAMIQUE ROCKSTAR */}
        <div className="form-rockstar animate-fadeInUp relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-red-500/5 to-pink-500/5 animate-pulse"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-center text-gradient-rockstar mb-12">
              🛠️ TECH ARSENAL 🛠️
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {dynamicStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`group relative ${stat.clickable ? 'cursor-pointer' : ''}`}
                  title={stat.description}
                  onClick={() => stat.clickable && scrollToSection(stat.target)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-black text-gradient-rockstar mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-gray-300 font-bold text-sm leading-tight whitespace-pre-line group-hover:text-yellow-400 transition-colors duration-300">
                      {stat.label}
                    </div>
                    {stat.clickable && (
                      <div className="text-xs text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                        👆 Cliquer pour voir
                      </div>
                    )}
                  </div>

                  {/* Tooltip au hover */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                    {stat.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* 🏆 TOP SKILLS SECTION ROCKSTAR */}
            <div className="mt-12 text-center">
              <h4 className="text-xl font-bold text-gray-300 mb-4">🏆 TOP SKILLS</h4>
              <div className="flex justify-center space-x-4">
                {getTopSkills().map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300"
                  >
                    #{index + 1} {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 📈 PROGRESSION INDICATOR ROCKSTAR */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-red-500/20 px-6 py-3 rounded-full border border-yellow-500/30">
                <span className="text-yellow-400 text-xl animate-pulse">🎸</span>
                <span className="text-gray-300 font-medium">
                  En progression constante vers le niveau suivant !
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action ROCKSTAR */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="relative inline-block">
            <p className="text-2xl text-gray-300 mb-8 font-light">
              Prêt à <span className="text-gradient-rockstar font-bold">ROCKER</span> ensemble ?
            </p>
            
            <a href="#contact" className="btn-rockstar-primary">
              <span className="text-2xl group-hover:animate-bounce">🎸</span>
              <span>LET'S ROCK TOGETHER</span>
              <span className="text-2xl group-hover:animate-bounce" style={{animationDelay: '0.2s'}}>🚀</span>
              
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-2xl"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;