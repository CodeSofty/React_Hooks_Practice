import React from 'react';
import ListItem from './ListItem';

const List = ({items, onAdd}) => {
  return (
    <ul className='item_list'>
      {items.map(item => (
          <ListItem key={item.id} item={item} onAdd={onAdd} ></ListItem>
      ))}
    </ul>
  )
}

export default List