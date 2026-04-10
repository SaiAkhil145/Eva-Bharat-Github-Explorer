import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import UserRepos from "./pages/UserRepos"
import Navbar from "./components/Navbar"
import "./styles/global.css"
import "./styles/components.css"
import "./styles/variables.css"

export default function App() {
  const [dark, setDark] = useState(true)

  return (
   <div className={dark ? "theme-dark app" : "theme-light app"}>
      <BrowserRouter>
        <Navbar dark={dark} setDark={setDark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserRepos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}