import React ,{useState} from 'react';
import "../style.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash ,faSquare} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Collapse} from 'react-bootstrap';
function Header(){
  const [open, setOpen] = useState(false);

  return(
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <div class="mainHeader">
    <FontAwesomeIcon icon= {faCartShopping} id="cart"/>
  <div class="pages">
   <Link to="/" ><div class="tnk">Home</div></Link> 
   <Link to="products" ><div class="tnk">Products</div></Link> 
  </div>
  <FontAwesomeIcon icon= {faSearch} id="cart"/>
  <span class="material-symbols-outlined"  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
menu
</span>

    </div>
    <Collapse in={open}>
        <div id="example-collapse-text">
        <Link to="/" ><div class="tnv">Home</div></Link> 
   <Link to="products" ><div class="tnv">Products</div></Link>   
        </div>
      </Collapse>
</div>
  );

}
export default Header;