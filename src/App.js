import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import Gallery from './components/Gallery';
import Dryheat from './components/topics/Dryheat';
import Eo from './components/topics/Eo';
import Ltgp from './components/topics/Ltgp';
import Ozone from './components/topics/Ozone';
import Steam from './components/topics/Steam';
import Vpro from './components/topics/Vpro';
import Iuss from './components/topics/Iuss';
import Podcast from './components/topics/Podcast';
import Group from './components/topics/Group';
import Presentation from './components/topics/Presentation';
import ScrollToTopButton from "./components/ScrollToTopButton";
import './App.css';

const App = () => (
  <div className="app-css">
    <NavBar />
    <ScrollToTopButton />
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
        <Route path="/dryheat" element={<Dryheat />} />
        <Route path="/eo" element={<Eo />} /> 
        <Route path="/ltgp" element={<Ltgp />} />
        <Route path="/ozone" element={<Ozone />} />
        <Route path='/steam' element={<Steam />} />
        <Route path="/vpro" element={<Vpro />} />
        <Route path="/iuss" element={<Iuss />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/group" element={<Group />} />
        <Route path="/presentation" element={<Presentation />} /> 
      </Routes>
    </div>
    <Footer/>
  </div>
);

export default App;