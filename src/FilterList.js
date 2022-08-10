import React from 'react'

const FilterList = ({setRequestType}) => {
  return (
    <div className='filterWrapper'>

        <button className='button' onClick={() => {setRequestType('electronics')}}>Electronics</button>
      

        <button className='button' onClick={() => {setRequestType('jewelery')}}>Jewelery</button> 
      
  
      <button className='button' onClick={() => {setRequestType('men\'s clothing')}}>Men's Clothing</button>
      

      <button className='button' onClick={() => {setRequestType('women\'s clothing')}}> Women's Clothing</button>   
      
    </div>
  )
}

export default FilterList