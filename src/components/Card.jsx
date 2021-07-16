import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({temp, min, max, feels, name, img, onClose, country, weather, id}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-6 card-title">
                    <Link to={`/ciudad/${id}`}>
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
        // <div className="card">
        //   <div id="closeIcon" className="row">
        //       <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        //   </div>
        //   <div className="card-body">
        //     <Link to={`/city/${id}`} >
        //       <h5 className="card-title">{name}</h5>
        //     </Link>
        //     <div className="row">
        //       <div className="col-sm-4 col-md-4 col-lg-4">
        //         <p>Min</p>
        //         <p>{min}°</p>
        //       </div>
        //       <div className="col-sm-4 col-md-4 col-lg-4">
        //         <p>Max</p>
        //         <p>{max}°</p>
        //       </div>
        //       <div className="col-sm-4 col-md-4 col-lg-4">
        //         <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
        //       </div>
        //     </div>
        //   </div>
        // </div>
      );
}

export default Card
