import Section from './Section'
import './About.css'

export default function About({ about, principles }) {
  return (
    <Section id="about" kicker="01 / About" title={about.heading}>
      <div className="about__grid">
        <div className="about__story reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="about__facts">
            {about.facts.map((f) => (
              <li key={f} className="chip">{f}</li>
            ))}
          </ul>
        </div>

        <aside className="about__principles reveal">
          {principles.map((pr) => (
            <div key={pr.title} className="about__principle">
              <h3>{pr.title}</h3>
              <p>{pr.body}</p>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  )
}
