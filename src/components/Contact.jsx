import Section from './Section'
import Icon from './Icon'
import './Contact.css'

export default function Contact({ profile, socials }) {
  return (
    <Section id="contact" tight>
      <div className="contact reveal">
        <div className="contact__glow" aria-hidden="true" />
        <div className="contact__inner">
          <div className="section-kicker">07 / Contact</div>
          <h2 className="contact__title">What can I do for you?</h2>
          <p className="contact__text">
            {profile.pitch}
          </p>
          <div className="contact__actions">
            <div className="contact__buttons">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Icon type="email" size={16} /> {profile.email}
              </a>
              {profile.phone && (
                <a className="btn btn--ghost" href={profile.phoneUrl}>
                  <Icon type="phone" size={16} /> {profile.phone}
                </a>
              )}
            </div>
            <div className="contact__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <Icon type={s.type} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
