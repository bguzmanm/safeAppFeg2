import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<p>Dashboard</p>} />
          <Route path="/search-flights" element={<p>Busqueda de vuelos</p>} />
          <Route path="/vulnerabilities" element={<p>Vulnerabilidades</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
