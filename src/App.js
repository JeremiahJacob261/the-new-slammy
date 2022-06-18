import React from "react";
import "./style.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home.js'
import Product from './components/Product.js';
import Header from './components/Header.js';

export default function App() {
  return (
   <Router>
     <Header/>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product" element={<Product/>}/>
 </Routes>
   </Router>
  );
}
