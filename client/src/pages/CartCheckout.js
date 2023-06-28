import React from 'react'
import style from '../style/cart.css';
// import Services from '../hooks/Services'

function CartCheckout(props) {

    console.log(Object.keys(props.price).length +" jhgh0")
    console.log(Object.keys(props.cartItems).length +" jkbn")
    let totalPrice = 0;
  return (
    <div>
      <div className={style.container}>
          {
          Object.keys(props.cartItems).map(key=>{ 
              if(props.cartItems[key] > 0){
                  let price = props.cartItems[key]*props.price[key];
                  totalPrice += price;
                  return <p> {key} : $ {price}</p>
              }
              return null;
          })
        }
        <p>total Price : {totalPrice}</p>
        <p> order now</p>
      </div>
    </div>
  )
}



export default CartCheckout
