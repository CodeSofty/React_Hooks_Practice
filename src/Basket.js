import React from 'react'
import ReactDom from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: 15,
    right: 0,
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7',
    zIndex: 1000
}


const Modal = ({open, children, onClose, cartItems, onAdd, onRemove}) => {
    if(!open) return null
    return  ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES}> 
        <div style={MODAL_STYLES}>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
            {cartItems.map((item) => (
                <div className='basket-wrapper' key={item.id}> 
                <div className='basket-img-container'>
                    <img className='cart-img' src={(item.image)} alt={item.title}/>
                </div>
                <div className='basket-details'>
                {item.title}<br></br>
                Price: $ {item.price.toFixed(2)}<br></br>
                Qty: {item.qty} x $ {item.price.toFixed(2)}
                <div className='basket-modify-wrapper'>
                    <button onClick={()=>onAdd(item)} className="add-button">+</button>
                    <button onClick={()=>onRemove(item)} className="remove-button">-</button>
                </div>
                </div>
                </div>
                
                
            ))}
            <button  className='button' onClick={onClose}>Keep Shopping</button>
            <button className='button'>Checkout</button>
        </div>
    </div>
    </>,
    document.getElementById('portal')
    )
}

export default Modal