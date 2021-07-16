import React from "react";
import Card from "./Card";
import './Cards.css'

const Cards = ({ cities, onClose }) => {
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          temp={c.temp}
          max={c.max}
          min={c.min}
          feels={c.feels}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
          country={c.country}
          weather={c.weather}
        />
      ))}
    </div>
  );
};

export default Cards;
