import React from 'react';
import {BsBasket3} from 'react-icons/bs';
import Basket from './Basket';



const Navigation = ({isOpen, setIsOpen, cartItems, onAdd}) => {
  return (
<ul> 
    <div className='title-wrapper'>
      <h1 className='primary-title'>Shop Infinity</h1>
  </div>
  <div className='utilities-wrapper'>
        <button className='utility-button button'>Sign Up</button>
        <button className='utility-button button'>Login</button>
        <button onClick={() => setIsOpen(true)}  className='utility-button button cart-icon'><BsBasket3  size={15}/></button>
        <Basket onAdd={onAdd} open={isOpen} onClose={() => setIsOpen(false)} cartItems={cartItems}/>
      </div>
    </ul>

  )
}

export default Navigation