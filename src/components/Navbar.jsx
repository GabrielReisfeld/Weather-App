import React from "react";
import { Link, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "../media/icon.png";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-dark justify-content-between">
      <Link to="/">
        <span className="navbar-brand">
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
          <h3>Weather App</h3>
        </span>
      </Link>
      <Route exact path="/" render={() => <SearchBar onSearch={onSearch} />} />

      <a
        href="https://github.com/GabrielReisfeld"
        style={{ color: "white", textDecoration: "none" }}
        target={"_blank"}
        rel="noreferrer"
        className="githubIcon"
      >
        <i className="fab fa-github" style={{ fontSize: "44px" }}></i>
        <br /> Created by GabrielReisfeld
      </a>
    </nav>
  );
};

export default Navbar;
