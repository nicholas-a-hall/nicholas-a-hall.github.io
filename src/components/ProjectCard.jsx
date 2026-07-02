import Icon from './Icon'

// A single project. `featured` makes it span wider and read larger.
export default function ProjectCard({ project }) {
  const { title, org, blurb, tags, links = [], featured } = project
  return (
    <article className={`project${featured ? ' project--featured' : ''} reveal`}>
      <div className="project__body">
        <div className="project__head">
          <h3 className="project__title">{title}</h3>
          {featured && <span className="project__badge">Featured</span>}
        </div>
        {org && <div className="project__org">{org}</div>}
        <p className="project__blurb">{blurb}</p>
      </div>

      <div className="project__foot">
        <ul className="project__tags">
          {tags.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="project__links">
            {links.map((l) => (
              <a
                key={l.label}
                className="project__link"
                href={l.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon type={l.type} size={15} />
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
