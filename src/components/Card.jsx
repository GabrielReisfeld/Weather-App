import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({temp, min, max, feels, name, img, onClose, country, weather, id}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-6 card-title">
                    <Link to={`/ciudad/${id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                        <span className="city">{name}</span>, <span className="country">{country}</span>
                    </Link>
                </div>
                <div className="col-6">
                    <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="icon" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>{temp.toFixed(1)}°</h1>
                </div>
            </div>
            <div className="row">
            <div className="col-12">
                    <h5>{weather}</h5>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6">
                    <p>Feels Like</p>
                </div>
                <div className="col-6">
                    <p>{feels}°</p>
                </div>
            </div>
            <hr className="mx-5"/>
            <div className="row">
                <div className="col-6">
                    <p>Min</p>
                </div>
                <div className="col-6">
                    <p>{min}°</p>
                </div>
            </div>
            <hr className="mx-5"/>
            <div className="row">
                <div className="col-6">
                    <p>Max</p>
                </div>
                <div className="col-6">
                    <p>{max}°</p>
                </div>
            </div>
        </div>
      );
}

export default Card
