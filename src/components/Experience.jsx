import Section from './Section'
import './Experience.css'

export default function Experience({ experience }) {
  return (
    <Section
      id="experience"
      kicker="05 / Experience"
      title="Where I've been"
      intro="The short version. The longer version is a good conversation over coffee."
    >
      <ol className="exp__timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="exp__item reveal">
            <div className="exp__marker" aria-hidden="true" />
            <div className="exp__content">
              <div className="exp__top">
                <h3 className="exp__role">
                  {job.role} <span className="exp__at">·</span> <span className="exp__company">{job.company}</span>
                </h3>
                <span className="exp__period">{job.period}</span>
              </div>
              <ul className="exp__highlights">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
