import Icon from './Icon'
import './Hero.css'

export default function Hero({ profile, socials }) {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__status reveal">
          <span className="hero__dot" />
          {profile.availability}
        </div>

        {profile.title && <div className="hero__eyebrow reveal">{profile.title}</div>}

        <h1 className="hero__title reveal">
          Hi, I'm <span className="hero__name">{profile.name}</span>.
          <br />
          {profile.tagline}
        </h1>

        <p className="hero__blurb reveal">{profile.blurb}</p>

        <div className="hero__cta reveal">
          <a className="btn btn--primary" href="#work">
            See my work <Icon type="arrow" size={16} />
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
          {profile.resumeUrl ? (
            <a className="btn btn--ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Résumé
            </a>
          ) : null}
        </div>

        <div className="hero__socials reveal">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              <Icon type={s.type} size={20} />
            </a>
          ))}
          <span className="hero__loc">{profile.location}</span>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
