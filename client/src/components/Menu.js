// import React, { useState } from 'react'
import '../style/card.css'
import {Link} from 'react-router-dom'


export default function menu(props) {
  
  const desserts = ['Brownie', 'Marshmallow', 'Chocochip', 'Donut', 'Truffles', 'Baklava Rolls', 'Ricotta', 'Syllabub', 'Cranachan', 'Bara Brith'];
  function currentDessert(des){
    props.setDessert(des)
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
