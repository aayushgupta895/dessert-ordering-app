import React, { useState, useContext } from "react";
import '../style/card.css';
import './Menu'
import {Link, Routes, Route} from 'react-router-dom'
import { MyContext } from "../hooks/ContextProvider";
// import Cart from '../pages/CartCheckout'
// import  Services from '../hooks/Services'

function Card(props) {
  const {addItems, removeItems, dessert, cartItems, price} = useContext(MyContext)
  const st = {
    padding : 5,
  }
  const desImgStyle =()=> {
    if(dessert === 'Baklava Rolls' || dessert === 'Bara Brith'){
      const desName = dessert.split(' ')[0];
      return  {backgroundImage : `url(${require(`../img/${desName}.jpg`)})`}
    }
    return {backgroundImage : `url(${require(`../img/${dessert}.jpg`)})`}
  }

  


  return (
    <div className="head">
      <header>
        <nav>
          <div className="container">
            <p>Dessert wala</p>
            <ul>
              <li><Link to='/home'>Home</Link> </li>
              <li><Link to='/recipes'>Recipes</Link></li>
              <li><Link to='/cart'>cart</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/aboutUs'>About us</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="mid">
        <div className="midEle" id="id1"> 
          <h1 className="dessert_name">
              {dessert}<br /> MAGIC
          </h1>
          <p id="tips">
            5 tips how to make <br/> the best dessert_names in the <br/> game
          </p>
          <hr/>
          <div className="bookings">
            <button id="add" onClick={() =>addItems(dessert)}>Add items</button>
            <p id="displayItems">{cartItems[dessert] ? cartItems[dessert] : 0}</p>
            <button id="remove" onClick={() =>removeItems(dessert)}>remove items</button>
          </div>
          <p id="price">Total Price : <span>$ {(cartItems[dessert] == null  ? 0 : cartItems[dessert]*price[dessert] )}</span></p>
          <Link id="order" to='/cart'>Order Now</Link>
        </div>
        <div className="midEle" id="id2" style={desImgStyle()}></div>
      </div>
      <div className="footer">
        <div></div>
      </div> 
    </div>
    
  );
}

export default Card;
