import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
/*import Blog from './components/Blog'*/
import CV from '../Cv/CV'
import CVscreenshot from '../Cv/CVscreenshot'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/*<Blog />*/}
      <Projects />
      <Skills />
      <Contact />
      <CV />
      {/*<CVscreenshot />*/}
    </div>
  )
}

export default App