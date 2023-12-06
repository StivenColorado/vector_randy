import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Login } from './pages/login';

// Importa createRoot desde react-dom/client
import { createRoot } from 'react-dom/client';

// Utiliza createRoot de la manera adecuada
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </Router>
  </React.StrictMode>
);
