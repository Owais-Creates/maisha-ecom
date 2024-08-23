import React from 'react';
import './AllProducts.css';
import { useEcom } from '../../context/Context';
import { FaChevronRight } from "react-icons/fa";

function AllProducts() {

  const { allProducts } = useEcom();

  return (

    <>
      <h2 className='all-products-heading' >All Products</h2>

      <div className="all-products-main">

        {allProducts.map((item, index) => (
          <div key={index} className="card">

            <img className='card-image' src={item.image} alt="" />

            <div className="product-information">
              <p className='product-information-title' >{item.title}</p>
              <p>{item.price} ₹</p>
            </div>

            <div className='slider-two-of-card'>
              <FaChevronRight />
            </div>

          </div>
        ))}

      </div>

    </>

  )

}

export default AllProducts