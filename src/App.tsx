import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/proposta">Propostas</Link>
            </li>
            <li>
              <Link to="/contratos">Contratos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1>Bem-vindo à Web Tech Company</h1>
        <p>
          Automatize a criação de propostas e contratos de forma rápida e
          eficiente.
        </p>
      </main>
      <footer className="app-footer">Development by Web Tech Company</footer>
    </div>
  );
}
