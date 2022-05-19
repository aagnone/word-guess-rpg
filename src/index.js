import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
import UserContextProvider from './context/UserContext';
import { SetupApp } from './SetupApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CookiesProvider>
        <BrowserRouter>
          <SetupApp>
            <AppRoutes />
          </SetupApp>
        </BrowserRouter>
      </CookiesProvider>
    </UserContextProvider>
  </React.StrictMode>
);
