import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classic" element={<App mode={'Classic'} />} />
        <Route path="/story" element={<App mode={'Story'} />} />
        <Route path='/login' component={() => { 
            window.location.href = 'http://localhost:5000/auth/google'; 
            return null;
        }}/>
        <Route path='/logout' component={() => { 
            window.location.href = 'http://localhost:5000/logout'; 
            return null;
        }}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
