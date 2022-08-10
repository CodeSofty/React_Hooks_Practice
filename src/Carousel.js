import React from 'react';

const Carousel = ({carouselItems}) => {
    return (
    <> 
    {carouselItems.map(item => (
        <div className='carousel-card'key={item.id} item={item} > 
            <div className='carousel-card-top'>
            <img className='new-product-img' src={(item.image)} alt={item.title}/>
                <h3>{item.title}</h3>
                </div>
            <div className='carousel-card-bottom'>
                {item.price}
                </div>
        </div>
    ))}
    </>
    )
}

export default Carousel