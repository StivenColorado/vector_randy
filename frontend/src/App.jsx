import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes/routes.json';
import { Login } from './pages/login';
import { Home } from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.login} element={<Login />} />
    </Routes>
  );
};

export default App;
