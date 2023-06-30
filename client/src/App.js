import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Cart from './pages/CartCheckout'
import DessertTemplate from './pages/DessertTemplate';
import { MyContext } from './hooks/ContextProvider';
import { useContext } from 'react';

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const {price, cartItems, setCartItems} = useContext(MyContext)
  return (
    <>
      
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<DessertTemplate price={price} setCartItems={setCartItems} cartItems={cartItems}/>}/>
            <Route exact path='/cart' element={<Cart price={price} cartItems={cartItems}/>}/>
          </Routes>
        </div>
      
    </>
    
    
  );
}

export default App;
