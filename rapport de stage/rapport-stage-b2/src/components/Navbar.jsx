import React, { useEffect } from 'react';
import { FileText, Presentation, BookOpen, Paperclip, Home } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: <Home size={20} /> },
    { id: 'apropos', label: 'À propos', icon: <Presentation size={20} /> },
    { id: 'blog', label: 'Blog B2 (5 articles)', icon: <BookOpen size={20} /> },
    { id: 'rapport', label: 'Rapport Écrit', icon: <FileText size={20} /> },
    { id: 'annexes', label: 'Annexes & Preuves', icon: <Paperclip size={20} /> }
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setCurrentSection && setCurrentSection(id);
    scrollToId(id);
    history.replaceState(null, '', `#${id}`);
  };

  useEffect(() => {
    const onScroll = () => {
      const navH = document.querySelector('.navbar')?.offsetHeight || 70;
      const y = window.scrollY + navH + 10;
      const sections = ['accueil','blog','rapport','annexes','apropos']; // <-- inclure apropos
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setCurrentSection && setCurrentSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setCurrentSection]);

  // Gère chargement direct avec #hash
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (id) setTimeout(() => scrollToId(id), 0);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo = lien Accueil */}
        <a
          href="#accueil"
          onClick={(e) => handleClick(e, 'accueil')}
          className="nav-logo"
          aria-label="Aller à l'accueil"
        >
          <h2>📋 Rapport de Stage B2 - YNOV</h2>
          <p>Yoann Sogoyou - Mai à Juillet 2024 chez DJENA</p>
        </a>

        <div className="nav-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`nav-item ${currentSection === item.id ? 'active' : ''}`}
              role="link"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;