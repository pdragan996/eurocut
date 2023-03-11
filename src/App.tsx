import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { Footer } from './components/Footer';
import Materials from './pages/Materials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="materials" element={<Materials/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
