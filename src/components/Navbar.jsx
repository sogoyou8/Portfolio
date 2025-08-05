import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home', icon: '🏠' },
    { name: 'À propos', href: '#about', icon: '👤' },
    { name: 'Projets', href: '#projects', icon: '💻' },
    { name: 'Compétences', href: '#skills', icon: '⚡' },
    { name: 'Contact', href: '#contact', icon: '📧' }
  ];

  // Détection du scroll pour l'effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo ROCKSTAR */}
          <div className="flex-shrink-0 animate-fadeInUp">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-black via-red-600 to-orange-500 rounded-xl blur-md opacity-15 group-hover:opacity-60 transition duration-700 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-80 transition duration-400"></div>
              
              <div className="relative bg-black/98 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-red-600/70 group-hover:border-orange-400/90 transition-all duration-300 shadow-2xl hover:shadow-orange-600/60">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-red-400 group-hover:animate-bounce group-hover:text-orange-300 transition-all duration-300 group-hover:scale-125">
                      𒌐  
                  </span>
                  <div className="relative">
                    <span 
                      className="text-2xl font-black text-gradient-rockstar group-hover:animate-shake transition-all duration-300 relative z-10"
                      style={{
                        fontFamily: 'Impact, Arial Black',
                        textShadow: '3px 3px 0px #000, -2px -2px 0px #cc0000, 0 0 15px #ff4400, 0 0 25px #ff6600'
                      }}
                    >
                      YOANN
                    </span>                    
                    <span 
                      className="absolute top-0 left-0 text-2xl font-black text-red-400 opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                      style={{
                        fontFamily: 'Impact, Arial Black',
                        transform: 'translate(-2px, -1px)',
                        filter: 'blur(1px)'
                      }}
                    >
                      YOANN
                    </span>
                    <span 
                      className="absolute top-0 left-0 text-2xl font-black text-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        fontFamily: 'Impact, Arial Black',
                        transform: 'translate(1px, 1px)',
                        filter: 'blur(0.5px)'
                      }}
                    >
                      YOANN
                    </span>
                  </div>
                  <span className="text-xs text-orange-400 group-hover:animate-bounce group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-125">
                    🔥
                  </span>
                </div>                
                <div className="absolute -top-2 -right-2 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping">
                  ⚡
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-orange-300 via-red-500 to-black opacity-0 group-hover:opacity-100 transition-all duration-500"></div>                
                <div className="absolute inset-0 rounded-lg border border-orange-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              </div>
            </a>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 animate-slideInLeft ${
                    activeSection === item.href.substring(1)
                      ? 'text-yellow-400 bg-white/10 shadow-glow-yellow border border-yellow-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Effet de glow au hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  
                  <div className="relative flex items-center space-x-2">
                    <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="hidden lg:block">{item.name}</span>
                  </div>

                  {/* Indicateur de section active */}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block animate-slideInRight">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black font-black text-sm px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow-yellow"
            >
              <span className="text-lg group-hover:animate-bounce">🚀</span>
              <span>CONTACT</span>
              
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-xl"></div>
            </a>
          </div>

          {/* Menu Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              
              <div className="relative">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-2 bg-black/50 backdrop-blur-xl rounded-2xl mt-2 border border-white/10 shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`group relative flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-yellow-400 bg-gradient-to-r from-yellow-400/10 to-red-500/10 border border-yellow-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-bold">{item.name}</span>

                {/* Indicateur actif */}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </a>
            ))}

            {/* CTA Mobile */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black font-black py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="text-xl group-hover:animate-bounce">🚀</span>
                <span>CONTACTEZ-MOI</span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-xl"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;