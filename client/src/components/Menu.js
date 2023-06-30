// import React, { useState } from 'react'
import '../style/card.css'
import {Link} from 'react-router-dom'
import { MyContext } from '../hooks/ContextProvider';
import { useContext } from 'react';

export default function Menu() {
  const {setDessert} = useContext(MyContext)
  const desserts = ['Brownie', 'Marshmallow', 'Chocochip', 'Donut', 'Truffles', 'Baklava', 'Ricotta', 'Syllabub', 'Cranachan', 'Bara Brith'];
  function currentDessert(des){
    setDessert(des)
  }
  
  
  return (
    <div className="menu">
        <p>Menu</p>
        <div className="dropdown">
            {
              desserts.map((item, index)=>{
                return <Link to="/" key={index} onClick={()=>currentDessert(item)}>{item}</Link>
              })
            }
        </div>
    </div>
  )
}
