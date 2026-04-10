import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">GitHub Explorer</Link>

      <button
        className="light-dark-mode-button"
        onClick={() => setDark(!dark)}
      >
        {dark ? (
          <>
            <Sun size={18} strokeWidth={2} />
            <span>Light</span>
          </>
        ) : (
          <>
            <Moon size={18} strokeWidth={2} />
            <span>Dark</span>
          </>
        )}
      </button>
    </nav>
  );
}