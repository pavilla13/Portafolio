// src/App.tsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        fontFamily: "sans-serif",
      }}
    >
      <Header /> {/* El Header siempre visible */}
      <Outlet />
      <footer style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
        © 2025 - Mi Portafolio
      </footer>
    </div>
  );
};

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Ruta principal (Home) */}
          <Route index element={<Home />} />

          {/* Ruta de Perfil */}
          <Route path="profile" element={<Profile />} />

          {/* Puedes añadir más rutas aquí en el futuro */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
