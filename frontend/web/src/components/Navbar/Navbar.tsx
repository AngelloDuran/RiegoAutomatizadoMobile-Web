import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Huerto</h1>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
}
