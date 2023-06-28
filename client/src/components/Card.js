import React, { useState } from "react";
import '../style/card.css';
import './Menu'
import {Link, Routes, Route} from 'react-router-dom'
// import Cart from '../pages/CartCheckout'
import  Services from '../hooks/Services'

function Card(props) {
  const st = {
    padding : 5,
  }
  const desImgStyle =()=> {
    if(props.dessert === 'Baklava Rolls' || props.dessert === 'Bara Brith'){
      const desName = props.dessert.split(' ')[0];
      return  {backgroundImage : `url(${require(`../img/${desName}.jpg`)})`}
    }
    return {backgroundImage : `url(${require(`../img/${props.dessert}.jpg`)})`}
  }

  // const {price, props.cartItems , setCartItems} = Services()

  const addItems = ()=>{
    // console.log(cart)
    let newObj = {}
    if(props.cartItems[props.dessert]){
      console.log(Object.keys(props.cartItems).length+ " length")
        Object.keys(props.cartItems).forEach(key =>{
          if(key == props.dessert){
            newObj[key] = props.cartItems[key]+1;
          }else
            newObj[key] = props.cartItems[key];
        })
    }else{
        Object.keys(props.cartItems).forEach(key =>{
          // if(key == props.dessert){
            newObj[key] = props.cartItems[key]+1;
        })
        newObj[props.dessert] = 1;
    }
    props.setCartItems(newObj);
  }

  const removeItems = () =>{
    let newObj = {}
    if(!props.setCartItems[props.dessert]){
      Object.keys(props.cartItems).forEach(key =>{
        if(key == props.dessert){
          if(props.cartItems[key] != 0){
            newObj[key] = props.cartItems[key]-1;
            
          }
        }else
          newObj[key] = props.cartItems[key];
      })
    }
    props.setCartItems(newObj); 
  }



  return (
    <div className="head">
      <header>
        <nav>
          <div className="container">
            <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/fevpdbjk.json"
              trigger="hover"
              style={{width:150,height:100}}
            ></lord-icon>
            <p>My food</p>
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
              {props.dessert}<br /> MAGIC
          </h1>
          <p id="tips">
            5 tips how to make <br/> the best dessert_names in the <br/> game
          </p>
          <hr/>
          <div className="bookings">
            <p id="add" onClick={addItems}>Add items</p>
            <p id="displayItems">{props.cartItems[props.dessert] ? props.cartItems[props.dessert] : 0}</p>
            <p id="remove" onClick={removeItems}>remove items</p>
          </div>
          <p id="price">Total Price : <span>$ {(props.cartItems[props.dessert] == null  ? 0 : props.cartItems[props.dessert]*props.price[props.dessert] )}</span></p>
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
