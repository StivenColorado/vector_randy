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
          {/* Remove the Navigate component if not needed */}
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.gallery} element={<Gallery />} />
            {/* Add a default redirect if needed */}
            <Route path="/*" element={<Navigate to={routes.home} />} />
          </Routes>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default App;
