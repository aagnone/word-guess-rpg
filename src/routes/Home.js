import React from 'react'
import UIBar from '../components/UIBar'
import { Link } from "react-router-dom";
import '../styles/home.scss'
import worpg from '../assets/worpg.png'
const Home = () => {
  return (
    <div className="home">
        <img alt='WORPG Premium Word RPG' src={worpg} />
        <div className="container">
          <div className="card">
            <div class="graphicContainer"><div class="rowSmall"><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall blue"></div><div class="cellSmall blue"></div><div class="cellSmall grey"></div></div><div class="rowSmall"><div class="cellSmall grey"></div><div class="cellSmall blue"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div></div><div class="rowSmall"><div class="cellSmall grey"></div><div class="cellSmall blue"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div></div><div class="rowSmall"><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall blue"></div><div class="cellSmall blue"></div><div class="cellSmall grey"></div></div></div>
            <Link to="/classic">Classic</Link>
          </div>
          <div className="card">
            <div class="graphicContainer"><div class="rowSmall"><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div></div><div class="rowSmall"><div class="cellSmall orange"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div></div><div class="rowSmall"><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div></div><div class="rowSmall"><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall grey"></div><div class="cellSmall orange"></div></div><div class="rowSmall"><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div><div class="cellSmall orange"></div></div></div>
            <Link to="/story">Story</Link>
          </div>
        </div>
        <UIBar />
    </div>
  )
}

export default Home