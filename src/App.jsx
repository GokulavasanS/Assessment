import React from 'react';
import Navbar from './Components/Navbar/Nav';
import Home from './Pages/Home/Home';
import Service from './Pages/Services/Service';
import Contact from './Pages/Contact/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Service /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
