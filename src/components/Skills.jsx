import Section from './Section'
import './Skills.css'

export default function Skills({ groups }) {
  return (
    <Section
      id="skills"
      kicker="02 / Skills"
      title="What I work with"
      intro="A working toolkit, not a buzzword bingo card. These are the things I reach for and actually enjoy."
    >
      <div className="skills__grid">
        {groups.map((g) => (
          <div key={g.category} className="skills__group reveal">
            <h3 className="skills__cat">{g.category}</h3>
            <ul className="skills__list">
              {g.skills.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
