// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Login } from './pages/login';
import { Gallery } from './pages/gallery';
import routes from './routes/routes.json';
import { createRoot } from 'react-dom/client';
import { Gallery_admin } from './pages/gallery_admin';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.home} element={<App />} />
        <Route path={routes.gallery} element={<Gallery />} />
        <Route path={routes.gallery_admin} element={<Gallery_admin />} />
      </Routes>
      <ToastContainer />
    </Router>
  </React.StrictMode>
);
