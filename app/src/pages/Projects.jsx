import ProjectCard from "../components/ProjectCard"
import "../styles/Projects.css"

const projects = [
  {
    title: "Wordpress_portfolio",
    image: "/portfolio.png",
    description: "Portfolio WordPress dockerisé avec auto-déploiement."
  },
  {
    title: "LLM-Nutrition-Fitness",
    image: "/images/og-default.png",
    description: "Système RAG basé sur LLaMA 3 avec modules vectoriels."
  },
  {
    title: "NutritionApp",
    image: "/images/og-default.png",
    description: "App iOS SwiftUI + SwiftData pour suivi nutritionnel & calorique."
  }
]

const Projects = () => (
  <section id="projets" className="projects">
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
)

export default Projects
