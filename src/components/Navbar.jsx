import { useEffect, useState } from 'react'
import Icon from './Icon'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#recommendations', label: 'Praise' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ name, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">{name?.[0] || 'N'}</span>
          <span className="nav__brand-name">{name}</span>
        </a>

        <nav className={`nav__links${open ? ' is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__icon-btn"
            onClick={onToggleTheme}
            aria-label="Toggle colour theme"
            title="Toggle theme"
          >
            <Icon type={theme === 'light' ? 'moon' : 'sun'} size={18} />
          </button>
          <button
            className={`nav__burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
