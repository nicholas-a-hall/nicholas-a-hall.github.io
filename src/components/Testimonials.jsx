import Section from './Section'
import './Testimonials.css'

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

export default function Testimonials({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null
  return (
    <Section
      id="recommendations"
      kicker="07 / Recommendations"
      title="What people say"
      intro="I'm a terrible self-salesman, so I'll let other people do the talking: managers, peers, and direct reports, from the Army to startups."
    >
      <div className="tst__grid">
        {testimonials.map((t) => (
          <figure key={t.name} className="tst__card reveal">
            <span className="tst__mark" aria-hidden="true">“</span>
            <blockquote className="tst__quote">{t.quote}</blockquote>
            <figcaption className="tst__by">
              <span className="tst__avatar" aria-hidden="true">{initials(t.name)}</span>
              <span className="tst__meta">
                <span className="tst__name">{t.name}</span>
                <span className="tst__role">
                  {t.title}
                  {t.context ? ` · ${t.context}` : ''}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
