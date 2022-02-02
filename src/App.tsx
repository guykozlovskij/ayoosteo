import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/common/Contact';
import Follow from './components/common/Follow';
import Home from './components/Home /Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Contact />
        <Follow />
      </BrowserRouter>
    </div>
  );
}

export default App;
