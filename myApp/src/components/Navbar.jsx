import { Link } from "react-router-dom"

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">GitHub Explorer</Link>
      {/* <Link to="/home" className="home-button">Home</Link> */}

      <button className="light-dark-mode-button" onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  )
}