import Section from './Section'
import './Education.css'

export default function Education({ education }) {
  return (
    <Section id="education" kicker="06 / Education" title="Education & training" tight>
      <div className="edu__grid">
        {education.map((e) => (
          <div key={e.school} className="edu__card reveal">
            <div className="edu__period">{e.period}</div>
            <h3 className="edu__school">{e.school}</h3>
            <p className="edu__detail">{e.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
