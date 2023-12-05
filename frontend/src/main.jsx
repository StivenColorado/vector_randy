// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes.json'
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path={routes.home} element={<App />} />
    </Routes>
  </Router>
);
