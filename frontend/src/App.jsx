// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes/routes.json';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Loader } from './components/loader/loader';
import { Gallery } from './pages/gallery';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.gallery} element={<Gallery />} />
            <Route path={routes.home} element={<Home />} />
          </Routes>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default App;
