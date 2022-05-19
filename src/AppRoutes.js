import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import ClassicContextProvider from './context/ClassicContext';
import ClassicUi from './pages/ClassicUi';
import StoryContextProvider from './context/StoryContext';
import StoryUi from './pages/StoryUi';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classic" element={<ClassicContextProvider><ClassicUi /></ClassicContextProvider>} />
        <Route path="/story" element={<StoryContextProvider><StoryUi /></StoryContextProvider>} />
        <Route path='/logout' component={() => { 
          window.location.href = 'http://localhost:5000/auth/logout'; 
          return null;
        }}/>
      </Routes>
  )
}

export default AppRoutes