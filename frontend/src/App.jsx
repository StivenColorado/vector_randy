// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};

export default App;
