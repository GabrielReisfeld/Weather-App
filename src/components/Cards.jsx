import React from "react";
import Card from "./Card";

const Cards = ({ cities, onClose }) => {
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          feels={c.feels}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      ))}
    </div>
  );
};

export default Cards;
