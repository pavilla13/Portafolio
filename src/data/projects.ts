// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  bgColor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hooks App",
    description:
      "Colección de Custom Hooks para formularios, fetch y optimización.",
    image: "https://via.placeholder.com/600x400?text=Hooks+App",
    tech: ["Hooks", "UseReducer", "UseContext"],
    demoUrl: "https://react-hooks-app-ochre.vercel.app",
    repoUrl: "https://github.com/pavilla13/React/tree/master/04-hooks-app",
    bgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Heroes App",
    description:
      "SPA de Superhéroes. Manejo de rutas privadas, públicas y login simulado.",
    image: "https://via.placeholder.com/600x400?text=Heroes+App",
    tech: ["React Router", "Bootstrap", "Local Storage"],
    demoUrl: "https://05-heroes-app.vercel.app",
    repoUrl: "https://github.com/pavilla13/React/tree/master/05-heroes-app",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Teslo Shop",
    description:
      "E-commerce completo Full Stack. Backend en NestJS, base de datos en Neon y pagos.",
    image: "https://via.placeholder.com/600x400?text=Teslo+Shop",
    tech: ["React", "NestJS", "PostgreSQL", "Stripe"],
    demoUrl: "https://react-teslo-shop.vercel.app",
    repoUrl: "https://github.com/pavilla13/React/tree/master/07-teslo-shop",
    bgColor: "#ffffff",
  },
];
