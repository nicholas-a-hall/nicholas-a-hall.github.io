
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
  experience,
  skillGroups,
  education,
  projects,
  talks,
  testimonials,
  principles,
} from './data/content'

export default function App() {
  // Must match the initial server render for hydration.
  const [theme, setTheme] = useState('dark')

  // Restore the saved preference or OS preference after hydration.
  useEffect(() => {
    const saved = localStorage.getItem('theme')

    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }
  }, [])

  // Apply the theme and persist changes after hydration.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      return next
    })
  }

  return (
    <>
      <Navbar
        name={profile.fullName}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero profile={profile} socials={socials} />
        <ImpactBand metrics={metrics} />
        <About about={about} principles={principles} />
        <Experience experience={experience} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Education education={education} />
        <Talks talks={talks} />
        <Testimonials testimonials={testimonials} />
        <Contact profile={profile} socials={socials} />
      </main>
      <Footer name={profile.fullName} />
    </>
  )
}
