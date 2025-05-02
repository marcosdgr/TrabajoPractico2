import React from 'react'
import "../Css/Header.css"
const Header = () => {
  return (
   < div className="Header">
      <hr />
      <h1 className="titulo">Trabajo Practico 2 </h1>
      <br />
      <h2 className="subtitulo">Comision 2 - Grupo 2 </h2>
      <br />
      <nav className="nav">
        <a href="Home">Home</a>
        <a href="./nosotros.html">Nosotros</a>
        <a href="https://www.frt.utn.edu.ar/">Facultad Regional Tucuman - UTN</a>
      </nav>
    </div>
  )
}

export default Header