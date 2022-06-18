import React from "react";
import "./style.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home.js'
import Header from './components/Header.js';
import Footer from './components/footer.js';
import Products from './components/Product.js';
import Fpp from './components/flutterwave-config.js';

export default function App() {
  return (
   <Router>
     <Header/>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product" element={<Products/>}/>
   <Route path="/payment" element={<Fpp/>}/>
 </Routes>
 <Footer/>
   </Router>
  );
}
