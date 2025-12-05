import { Atom } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import profileImg from "../../data/foto_perfil.jpg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Atom size={24} />
            <span>React Portfolio</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link
            to="/profile"
            className={styles.profileContainer}
            aria-label="Ir al perfil"
          >
            <img src={profileImg} alt="Perfil" className={styles.avatar} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
