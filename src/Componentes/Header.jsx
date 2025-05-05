import React from 'react'
import "../Css/Header.css"
import Nav from './Nav'
const Header = () => {
  return (
   < div className="Header">
      <hr />
      <h1 className="titulo">Trabajo Practico 2 </h1>
      <br />
      <h2 className="subtitulo">Comision 2 - Grupo 2 </h2>
      <br />
        <Nav/>
    </div>
  )
}

export default Header