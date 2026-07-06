import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Skills from './components/Skills';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Highlights />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
