import React, {useContext} from 'react'
import style from '../style/cart.css';
import { MyContext } from '../hooks/ContextProvider';


function CartCheckout() {
    const { cartItems, price, addItems, removeItems, setDessert, dessert} = useContext(MyContext)
    const desImgStyle = (key) => {
      if(key === 'Baklava Rolls' || key === 'Bara Brith'){
        const desName = key.split(' ')[0];
        const name = `${require(`../img/${desName}.jpg`)}`
        return name;

      }
      const dess = `${require(`../img/${key}.jpg`)}`;
      return dess;

    }

    let totalPrice = 0;

    const addingItems = async(key) =>{
      await setDessert([key])
      console.log(dessert)
      addItems(key)
    }

    const removingItems = async (key) =>{
      // console.log(key+ " " + [key])
      await setDessert([key])
      console.log(dessert)
      removeItems(key)
    }


  return (
    <div style={{marginTop: '20px'}}>

      {
        Object.keys(cartItems).length <= 0 ? 
        <p> no item selected </p> : 
        <div >
        { 
        Object.keys(cartItems).map((key, index)=>{ 
            if(cartItems[key] > 0){
                let desPrice = cartItems[key]*price[key];
                totalPrice += desPrice;
                return <div style={{display : "flex"}} className='cartContainer'>

                          <img className='cartImage' src={desImgStyle(key)} alt=''/>
                          <div style={{display : "flex", flexDirection : 'column'}}>

                              <p className='dessertName'>{key}</p>
                              <div style={{display : "flex", gap : '60px', height : '45px'}}>

                                <button key={[key]+index} onClick={() => addingItems(key)} className='increaseItem'>+</button>
                                <p id='quantity'>{cartItems[key]}</p>
                                <button key={index+[key]} onClick={() => removingItems(key)} className='decreaseItem'>-</button>

                              </div>
                              <div style={{display : "flex"}}>

                                <p id='pricing'>price :  $ {cartItems[key]*price[key]}</p>
                                <button className='payButton'>pay</button>
                                
                              </div>
                          </div>  
                      </div>
            }
            return null;
        })
      }
      <p className='finalPrice'>Total Price : ${totalPrice}</p>
      <p className='finalOrder'> order now</p>
    </div>
      }
      
    </div>
  )
}



export default CartCheckout
