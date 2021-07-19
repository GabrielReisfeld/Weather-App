import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(city);
    setCity("");
  }

  return (
    <form className='search'>
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input type="submit" value="Search" onClick={handleSubmit} />
    </form>
  );
};

export default SearchBar;
