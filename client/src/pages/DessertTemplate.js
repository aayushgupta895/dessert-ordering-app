import React, { useState } from 'react'
import Card from '../components/Card'
import Menu from '../components/Menu'



function DessertTemplate(props) {
 
  const [desProp, setDesProp] = useState('Brownie');

  return (
    <div>
      <Menu setDessert={setDesProp}/>
      <Card dessert={desProp} price={props.price} setCartItems={props.setCartItems} cartItems={props.cartItems}/>
    </div>
  );
}

export default DessertTemplate
