import Hero from './Hero.js'
import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
    </>
  )
}
