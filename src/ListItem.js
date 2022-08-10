import React from 'react'

const ListItem = ({item, onAdd}) => {
  return (
    <div className='product-card'>
        <div className='product-img_container'> 
        <img className='product-img' src={(item.image)} alt={item.title}/>
        </div>
        <h3 className='product-title'>{item.title}</h3>
        <span>$ {item.price.toFixed(2)}</span>

        <button onClick={()=>onAdd(item)}  className='add-to-cart-bttn button'>ADD TO CART</button>
        {/* <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>{JSON.stringify(item.rating)}</p>
        <p>{item.category }</p> */}
    </div>
  )
}

export default ListItem