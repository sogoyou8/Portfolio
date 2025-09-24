import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Presentation from './components/Presentation.jsx'
import APropos from './components/APropos.jsx'
import Blog from './components/Blog.jsx'
import RapportEcrit from './components/RapportEcrit.jsx'
import Annexes from './components/Annexes.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [currentSection, setCurrentSection] = useState('accueil');

  return (
    <div className="App">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {currentSection === 'accueil' && <Presentation setCurrentSection={setCurrentSection} />}
        {currentSection === 'apropos' && <APropos />}
        {currentSection === 'blog' && <Blog />}
        {currentSection === 'rapport' && <RapportEcrit />}
        {currentSection === 'annexes' && <Annexes />}
      </main>
      <Footer />
    </div>
  );
}

export default App
