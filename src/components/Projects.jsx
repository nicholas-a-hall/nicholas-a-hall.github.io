import Section from './Section'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects({ projects }) {
  return (
    <Section
      id="work"
      kicker="03 / Work"
      title="Things I've built"
      intro="Platforms, tools, and systems I've owned end-to-end, from internal developer platforms and observability to production AI and a bowling alley. A sampling; happy to go deep on any of them."
    >
      <div className="projects__grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
