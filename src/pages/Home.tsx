import { projects } from "../data/projects";
import { ProjectCard } from "../components/ui/ProjectCard";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Mis Proyectos</h1>

        <p className="home-subtitle">
          Bienvenidos a mi portafolio. Cada proyecto es una aplicación real,
          construida con el stack moderno de Frontend:{" "}
          <strong>HTML, CSS</strong> (incluyendo frameworks como Bootstrap),{" "}
          <strong>TypeScript</strong> y, como pieza central,{" "}
          <strong>React</strong>. Todos están desplegados en entornos de
          producción (Vercel, Render) para una experiencia totalmente funcional.
        </p>

        <p className="home-subtitle cold-start-note">
          <strong>Nota Importante:</strong> Los proyectos Full Stack (como{" "}
          <strong>Teslo Shop</strong> y <strong>Heroes App</strong>) incluyen
          servicios backend alojados en plataformas gratuitas. Debido a la
          política de <strong>Arranque en Frío</strong>, la{" "}
          <strong>primera carga de datos puede tardar hasta 60 segundos</strong>{" "}
          en despertar el servidor. Una vez activo, la navegación es fluida.
        </p>
      </header>

      <main className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
    </div>
  );
};
