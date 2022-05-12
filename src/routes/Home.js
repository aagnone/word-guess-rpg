import React from 'react'
import UIBar from '../components/UIBar'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <UIBar />
        <Link to="/classic">Classic</Link>
        <Link to="/story">Story</Link>
    </div>
  )
}

export default Home