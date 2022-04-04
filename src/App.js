import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Resume from './assets/Oghenekaro_Brume Israel_Resume_C.pdf';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Services from './pages/Services';

function App() {
  return (
    <>
       <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/resume' element={<Resume />} /> */}
          {/* <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} /> */}
          </Routes>
       </Router>
    </>
  );
}

export default App;
