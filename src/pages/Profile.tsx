// src/pages/Profile.tsx
import { Download, Code, Brain } from "lucide-react";
import profileImg from "../data/foto_perfil.jpg"; // Asegúrate de tener tu foto aquí
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      {/* --- HEADER DEL PERFIL --- */}
      <header className="profile-header">
        <div className="header-content">
          <div className="image-wrapper">
            <img
              src={profileImg}
              alt="Pablo Alonso"
              className="profile-image"
            />
          </div>
          <div className="header-info">
            <h1 className="profile-name">Pablo Alonso Villa</h1>
            <h2 className="profile-role">Ingeniero de Software de Frontend</h2>

            <a
              href="/CV_Pablo_Alonso.pdf"
              download="CV_Pablo_Alonso.pdf"
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} /> Descargar CV
            </a>
          </div>
        </div>
      </header>

      {/* --- GRID DE INFORMACIÓN --- */}
      <main className="profile-grid">
        {/* 1. SOBRE MÍ */}
        <section className="info-card about-section">
          <div className="card-header">
            <Brain className="card-icon" />
            <h3>Sobre Mí</h3>
          </div>
          <p>
            Estudiante de último curso de{" "}
            <strong>Ingeniería Informática</strong>. Comencé mis prácticas
            curriculares a finales de octubre, consolidando primero una base
            sólida en <strong>HTML</strong>, <strong>CSS</strong> (incluyendo
            frameworks como <strong>Bootstrap</strong>) y{" "}
            <strong>JavaScript</strong>. Posteriormente, integré{" "}
            <strong>TypeScript</strong> para especializarme en el desarrollo de
            aplicaciones modernas con <strong>React</strong>.
          </p>
          <p>
            Actualmente, estoy expandiendo mi perfil profesional adentrándome en
            el ecosistema de <strong>Angular</strong> para complementar mi stack
            tecnológico.
          </p>
        </section>

        {/* 2. STACK TECNOLÓGICO (Mezcla de CV + Tu experiencia reciente) */}
        <section className="info-card skills-section">
          <div className="card-header">
            <Code className="card-icon" />
            <h3>Stack Tecnológico</h3>
          </div>

          <div className="skills-group">
            <h4 className="skills-subtitle">Modern Web (Foco Actual)</h4>
            <div className="badges-container">
              <span className="badge badge--highlight">React</span>
              <span className="badge badge--highlight">TypeScript</span>
              <span className="badge badge--highlight">Vite</span>
              <span className="badge badge--highlight">Tailwind/CSS</span>
            </div>
          </div>

          <div className="skills-group">
            <h4 className="skills-subtitle">Ingeniería & Bases</h4>
            <div className="badges-container">
              <span className="badge">Java</span>
              <span className="badge">Python</span>
              <span className="badge">C / C++</span>
              <span className="badge">SQL</span>
              <span className="badge">Git</span>
              <span className="badge">Docker</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
