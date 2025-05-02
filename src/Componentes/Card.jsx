import React from "react";
import "../Css/Card.css"
const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="col">
      <div className="cardcita">
        <img src={item.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
