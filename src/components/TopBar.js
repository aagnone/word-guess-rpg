import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/topBar.scss'

const TopBar = () => {
    const location = useLocation();
    return (
        <div className="topBar">
            <Link to='/'>&#x2190;Home</Link>
            <h2>{location.pathname.split('/')[1]}</h2>
        </div>
    )
}

export default TopBar