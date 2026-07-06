import Section from './Section'
import './Talks.css'

export default function Talks({ talks }) {
  if (!talks || talks.length === 0) return null
  return (
    <Section
      id="talks"
      kicker="04 / Talks"
      title="Talks & speaking"
      intro="Occasionally I get up in front of people and talk about this stuff."
    >
      <div className="talks__grid">
        {talks.map((t) => (
          <div key={t.videoId} className="talks__card reveal">
            <div className="talks__frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${t.videoId}`}
                title={t.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a className="talks__title" href={t.url} target="_blank" rel="noreferrer">
              {t.title}
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
