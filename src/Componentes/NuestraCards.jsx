import React from "react";
import { Card, Button, CardText } from "react-bootstrap";
import "../Css/Cards.css";
import Marcos from "../assets/Marcos.jpeg";
import Lautaro from "../assets/Lautaro.jpeg";
import Matias from "../assets/Matias.jpeg";
import Martin from "../assets/Martin.jpeg"

const NuestraCards = () => {
  const sexys = [
    {
      nombre: "Marcos Gimenez",
      imagen: Marcos,
      id: "1",
      edad: 30,
      apodo:"Crack"
    },
    {
      nombre: "Martin Cardozo",
      imagen: Martin,
      id: "2",
      edad: 32,
      apodo:"GOAT"
    },
    {
      nombre: "Matias Bazan",
      imagen: Matias,
      id: "3",
      edad: 26,
      apodo:"Grande"
    },
    {
      nombre: "Lautaro Navarro",
      imagen: Lautaro,
      id: "4",
      edad: 19,
      apodo:"Aura"
    },
  ];
  return (
    <div className="cards">
      {sexys.map((persona) => (
        <Card className="cardImagen" key={persona.id}>
          <Card.Img variant="top" src={persona.imagen} alt={persona.nombre} />
          <Card.Body className="cardContenido">
            <Card.Title className="cardTitulo">
              Nombre: {persona.nombre}
            </Card.Title>
            <CardText className="cardTexto">Edad: {persona.edad}</CardText>
            <CardText className="cardApodo">Apodo: {persona.apodo}</CardText>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NuestraCards;
