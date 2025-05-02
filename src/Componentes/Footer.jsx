import React from 'react'
import "../Css/Footer.css"
const Footer = () => {
  return (
    <div>
    <h3 className="h3Footer">
      Universidad Tecnologica Nacional - Facultad Regional Tucuman
    </h3>
    <hr />
    <iframe
      className="ubicacion"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.255405374606!2d-65.2007229!3d-26.8170959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c23b7b6e863%3A0x976c9adc5013942c!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20-%20Facultad%20Regional%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1714491428256!5m2!1ses-419!2sar"
    ></iframe>
  </div>
  )
}

export default Footer