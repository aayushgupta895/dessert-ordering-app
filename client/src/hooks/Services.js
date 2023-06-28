import React from 'react'
import { useState } from 'react'

function Services() {
    const [cartItems, setCartItems] = useState({})
    
    const price = {
        'Brownie' : 10,
        'Marshmallow' : 9,
        'Chocochip' : 8,
        'Donut' : 7,
        'Truffles' : 9,
        'Baklava Rolls' : 9,
        'Ricotta' : 8,
        'Syllabub' : 7,
        'Cranachan' : 8,
        'Bara Brith' : 10,
    }

    return {
        price,
        cartItems,
        setCartItems,
    }
}

export default Services

