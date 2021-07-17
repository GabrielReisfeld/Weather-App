import React, { useState } from "react";
import { Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import City from "./components/City";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((c) => {
        console.log(c.id, cities)
        //if (c.id === city.id)
        if (c.main !== undefined) {
          const city = {
            min: Math.round(c.main.temp_min),
            max: Math.round(c.main.temp_max),
            feels: c.main.feels_like,
            img: c.weather[0].icon,
            id: c.id,
            wind: c.wind.speed,
            temp: c.main.temp,
            name: c.name,
            weather: c.weather[0].main,
            humidity: c.main.humidity,
            description: c.weather[0].description,
            country: c.sys.country,
            clouds: c.clouds.all,
          };
          if (cities.includes(city.id)) alert("ya")
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("City not found");
        }
      });
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Navbar onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        exact
        path="/city/:cityId"
        render={({ match }) => <City city={onFilter(match.params.cityId)} />}
      />
    </div>
  );
}

export default App;
