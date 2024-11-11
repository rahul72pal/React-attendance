import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <StyledEngineProvider injectFirst>
      <App />
      </StyledEngineProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();