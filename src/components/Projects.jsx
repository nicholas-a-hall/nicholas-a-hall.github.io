import Section from './Section'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects({ projects }) {
  return (
    <Section
      id="work"
      kicker="03 / Project Work"
      title="Selected engineering work"
      intro="The problems, the engineering decisions, and what changed. Cloud platforms, production AI, observability, and yes, bowling machines."
    >
      <div className="projects__grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </Section>
  )
}
