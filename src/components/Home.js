import React from 'react'
import {CartState} from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './styles.css';

const Home = () => {

    const {state: {products},
    productState : { sort, byStock, byFastDelivery, byRating, searchQuery}

} = CartState();

    // console.log(products);
    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
              sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }
        return sortedProducts;


    }

  return (
    <div className='home'>
        <Filters />
        <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>

    </div>
  )
}

export default Home