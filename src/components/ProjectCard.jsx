import Icon from './Icon'

function ProjectSection({ heading, children }) {
  if (!children || (Array.isArray(children) && children.length === 0)) return null
  return (
    <section className="project__section">
      <h4 className="project__section-heading">{heading}</h4>
      {Array.isArray(children) ? (
        <ul className="project__points">
          {children.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}
        </ul>
      ) : (
        <p>{children}</p>
      )}
    </section>
  )
}

export default function ProjectCard({ project }) {
  const {
    title, org, blurb, summary, metrics = [], challenge, approach, impact,
    nextSteps, tags = [], links = [], featured,
  } = project
  const hasCaseStudy = Boolean(challenge || approach || impact)

  return (
    <article className={`project${featured ? ' project--featured' : ''} reveal`}>
      <div className="project__body">
        <header className="project__header">
          <div className="project__head">
            <h3 className="project__title">{title}</h3>
            {featured && <span className="project__badge">Featured</span>}
          </div>
          {org && <p className="project__org">{org}</p>}
          {summary && <p className="project__summary">{summary}</p>}
        </header>

        {metrics.length > 0 && (
          <dl className="project__metrics">
            {metrics.map(({ value, label }) => (
              <div className="project__metric" key={`${label}-${value}`}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {hasCaseStudy ? (
          <div className="project__case-study">
            <ProjectSection heading="Context" >{challenge}</ProjectSection>
            <ProjectSection heading="Approach">{approach}</ProjectSection>
            <ProjectSection heading="Impact">{impact}</ProjectSection>
            <ProjectSection heading="Next">{nextSteps}</ProjectSection>
          </div>
        ) : (
          <div className="project__overview">
            {typeof blurb === 'string' && blurb.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
              <p className="project__blurb" key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      <footer className="project__foot">
        {tags.length > 0 && (
          <ul className="project__tags" aria-label="Technologies">
            {tags.map((tag) => <li key={tag} className="chip">{tag}</li>)}
          </ul>
        )}
        {links.length > 0 && (
          <div className="project__links">
            {links.map((link) => (
              <a key={link.label} className="project__link" href={link.url} target="_blank" rel="noopener noreferrer">
                <Icon type={link.type} size={15} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </footer>
    </article>
  )
}
