import {useEffect, useState} from 'react';
import Footer from './Footer';
import Hero from './Hero';
import List from './List';
import FilterList from './FilterList';
import Navigation from './Navigation';
import './main.css';
import './grid.css';



function App() {
  const ITEMS_BY_CATEGORY_URL = 'https://fakestoreapi.com/products/category/';

  // Fetch List Items
  const[items, setItems] = useState([]);
  const[isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[requestType, setRequestType] = useState(['electronics']);
  const onAdd = (items) => {
    const exist = cartItems.find(x => x.id === items.id);
    if(exist) {
      cartItems.map((inventory) => inventory.id === items.id ? {...exist, qty: exist.qty + 1} : inventory);
    } else {
      setCartItems([...cartItems, {...items, qty: 1}]);
    }
  };

  useEffect( () => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${ITEMS_BY_CATEGORY_URL}${requestType}`);
        const data = await response.json();
        // Add qty field to each product
        data.map(products => {
          products.qty = 0;
        });
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  },[requestType])


  return (
    <div className="App">
        <div className='grid'>
          <nav>
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} cartItems={cartItems} onAdd={onAdd}/>
          </nav>
          <Hero/>
          <FilterList setRequestType={setRequestType}/>
          <main>
            <div className='product-list__wrapper'>
              <List items={items} onAdd={onAdd}/>
            </div>
          </main>
          {/* <Footer/> */}
          </div>
      </div>
  );
}

export default App;
