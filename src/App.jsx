import { useState, useEffect, useRef } from 'react'
import CustomCursor from './components/CustomCursor'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import './index.css'

const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll-spy — track which section is in view
  useEffect(() => {
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Left sidebar nav */}
      <Sidebar activeSection={activeSection} />

      {/* Main content — offset by sidebar width on desktop */}
      <main
        style={{
          flex: 1,
          marginLeft: 'var(--nav-width)',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Ambient background orbs */}
        <div style={{
          position: 'fixed',
          top: '15%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{
          position: 'fixed',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(234,179,8,0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Page sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
