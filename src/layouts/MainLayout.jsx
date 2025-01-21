import { Link } from "react-router-dom";
const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/searh-flights">Buscar Vuelos</Link>
            </li>
            <li>
              <Link to="/vulnerabilities">Vulnerabilidades</Link>
            </li>
            <li>
              <button>Cerrar Sesión</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 SafeApp</p>
      </footer>
    </div>
  );
};

export default MainLayout;
