import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactBand from './components/ImpactBand'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Talks from './components/Talks'
import Experience from './components/Experience'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  profile,
  socials,
  about,
  metrics,
  skillGroups,
  projects,
  talks,
  experience,
  education,
  testimonials,
  principles,
} from './data/content'

export default function App() {
  // Theme: persisted, defaults to dark, respects OS preference on first visit.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar name={profile.fullName} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero profile={profile} socials={socials} />
        <ImpactBand metrics={metrics} />
        <About about={about} principles={principles} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Talks talks={talks} />
        <Experience experience={experience} />
        <Education education={education} />
        <Testimonials testimonials={testimonials} />
        <Contact profile={profile} socials={socials} />
      </main>
      <Footer name={profile.fullName} />
    </>
  )
}
