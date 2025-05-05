import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Nav.css"
const Nav = () => {
  return (
    <div>
        <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="./nosotros">Nosotros</Link>
        {/* <link to="https://www.frt.utn.edu.ar/">Facultad Regional Tucuman - UTN</link> */}
      </nav>
    </div>
  )
}

export default Nav