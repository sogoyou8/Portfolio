import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100dvh] bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Effets de fond EXPLOSIFS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-2 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-24 right-2 w-28 h-28 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-24 right-1/4 w-20 h-20 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "6s" }}></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center px-2 sm:px-4 relative z-10 max-w-2xl w-full mx-auto">
        {/* Titre PRINCIPAL */}
        <div className="animate-fadeInUp mb-4 sm:mb-6">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-2 sm:mb-4 animate-float leading-tight">
              YOANN
            </h1>
          </div>
          {/* Sous-titre */}
          <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 animate-slideInLeft">
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>D</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>E</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>V</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>E</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>L</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>O</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.7s" }}>P</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.8s" }}>E</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.9s" }}>U</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1s" }}>R</span>
          </div>
        </div>

        {/* Description */}
        <div className="animate-slideInLeft mb-4 sm:mb-8" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
            <div className="h-1 w-6 sm:w-12 bg-gradient-to-r from-yellow-400 to-red-500 animate-pulse"></div>
            <span className="text-lg sm:text-2xl animate-spin" style={{ animationDuration: "3s" }}>⚡</span>
            <div className="h-1 w-6 sm:w-12 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"></div>
          </div>
          <div className="animate-fadeInUp">
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto font-light">
              <span className="text-gradient-cyber font-bold">FULLSTACK</span> en quête d'alternance •
              Code avec <span className="text-yellow-400 font-bold">PASSION</span> •
              Crée avec <span className="text-pink-400 font-bold">STYLE</span>
            </p>
          </div>
        </div>

        {/* Badges de spécialités */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-8 animate-fadeInUp" style={{ animationDelay: "1s" }}>
          {[
            { text: "Frontend", icon: "🎨", color: "from-blue-500 to-cyan-500", section: "skills", filter: "frontend" },
            { text: "Backend", icon: "⚙️", color: "from-green-500 to-teal-500", section: "skills", filter: "backend" },
            { text: "Fullstack", icon: "🚀", color: "from-purple-500 to-pink-500", section: "skills", filter: "fullstack" },
            { text: "DevOps", icon: "🛠️", color: "from-orange-500 to-red-500", section: "skills", filter: "devops" },
            { text: "Mobile", icon: "📱", color: "from-indigo-500 to-purple-500", section: "skills", filter: "mobile" }
          ].map((badge, index) => (
            <div
              key={index}
              onClick={(clickEvent) => {
                // 1. Scroll vers Skills avec timing parfait
                const skillsSection = document.getElementById(badge.section);
                if (skillsSection) {
                  skillsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });

                  // 2. Déclenche le filtre avec délai optimisé
                  setTimeout(() => {
                    const event = new CustomEvent("filterSkills", {
                      detail: {
                        category: badge.filter,
                        source: "hero-badge",
                        badgeName: badge.text,
                      },
                    });
                    window.dispatchEvent(event);
                  }, 80);

                  // 3. Feedback visuel immédiat
                  const clickedBadge = clickEvent.currentTarget;
                  clickedBadge.style.transform = "scale(0.95)";
                  setTimeout(() => {
                    clickedBadge.style.transform = "scale(1)";
                  }, 150);
                }
              }}
              className={`bg-gradient-to-r ${badge.color} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl border-2 border-white/20 hover:border-white/40 group relative overflow-hidden`}
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              {/* Effet de click animé */}
              <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 rounded-full"></div>
              <span className="text-base sm:text-lg mr-1 sm:mr-2 group-hover:scale-125 transition-transform duration-300 inline-block relative z-10">
                {badge.icon}
              </span>
              <span className="relative z-10">{badge.text}</span>
              {/* Tooltip informatif */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20 shadow-xl">
                👆 Voir mes compétences {badge.text.toLowerCase()}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
              </div>
              {/* Indicateur de redirection */}
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center items-center animate-fadeInUp mb-4 sm:mb-8" style={{ animationDelay: "1.5s" }}>
          <a
            href="#projects"
            className="group relative inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black font-black text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 border-2 border-transparent hover:border-white/30"
          >
            <span className="text-xl sm:text-2xl group-hover:animate-bounce">🚀</span>
            <span>DÉCOUVRIR MES PROJETS</span>
            <span className="text-xl sm:text-2xl group-hover:animate-bounce" style={{ animationDelay: "0.2s" }}>💻</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-2xl"></div>
          </a>
        </div>

        {/* Stats compactes */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-xs sm:max-w-xl mx-auto animate-fadeInUp" style={{ animationDelay: "2s" }}>
          {[
            {
              value: "2+",
              label: "Années\nd'expérience",
              icon: "🔥",
              action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              value: "100%",
              label: "Motivation pour\nl'alternance",
              icon: "💯",
              action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              value: "24/7",
              label: "Passion pour\nle code",
              icon: "⚡",
              action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
            },
          ].map((stat, index) => (
            <div
              key={index}
              onClick={stat.action}
              className="text-center group cursor-pointer relative"
            >
              <div className="text-lg sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-base sm:text-xl mb-0.5 sm:mb-1 group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-gray-400 text-xs font-medium leading-tight whitespace-pre-line group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flèche de scroll */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 -ml-6 animate-bounce cursor-pointer group"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/20 group-hover:border-yellow-400/50 transition-all duration-300">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={9} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded border border-white/20 whitespace-nowrap">
            Scroll pour découvrir
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;