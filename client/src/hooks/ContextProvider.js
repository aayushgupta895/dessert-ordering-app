import React, {useState, useContext, createContext} from 'react'

const MyContext = createContext();

function ContextProvider({children}){
    const [cartItems, setCartItems] = useState({})
    const [dessert, setDessert] = useState('Brownie');

    const price = {
        'Brownie' : 10,
        'Marshmallow' : 9,
        'Chocochip' : 8,
        'Donut' : 7,
        'Truffles' : 9,
        'Baklava' : 9,
        'Ricotta' : 8,
        'Syllabub' : 7,
        'Cranachan' : 8,
        'Bara Brith' : 10,
    }

    const addItems = (des) =>{

        if(cartItems[des]){
            setCartItems({...cartItems, [des] : cartItems[des]+1})
        }else{
            setCartItems({...cartItems, [des] : 1})
        }
    }

    const removeItems = (des) =>{

        if(cartItems[des]){

            if(cartItems[des]==1){
            setCartItems(prev=>{
                const copy = {...prev}

                if(cartItems[des] == 1)
                 delete copy[des]
                return copy
             })}
            else{
                setCartItems({...cartItems, [des] : cartItems[des]-1})
            }
        }
    }


    const value ={
        cartItems,
        setCartItems,
        price,
        addItems,
        removeItems,
        dessert,
        setDessert,
    }
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export { ContextProvider , MyContext}