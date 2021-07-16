import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = ({onSearch}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/">
                <span className="navbar-brand">
                    Weather App
                </span>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Navbar
