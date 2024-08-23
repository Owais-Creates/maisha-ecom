import React from 'react';
import './Categories.css';
import { useEcom } from '../../context/Context';
import { FaChevronRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Categories = () => {
    const { allProducts, setCategory, categoryContainer } = useEcom();

    const handleGetCategory = (e) => {
        const selectedCategory = e.target.value;
        console.log(selectedCategory);
        setCategory(selectedCategory);
    }

    return (
        <>
            <div className="category-select">
                <select onChange={handleGetCategory} className="category-dropdown">
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>

                <span className='dropdown-icon'>
                    <IoMdArrowDropdown />
                </span>
            </div>

            <div className="all-products-main">
                {categoryContainer.map((item, index) => (
                    <div key={index} className="card">
                        <img className='card-image' src={item.image} alt={item.title} />
                        <div className="product-information">
                            <p className='product-information-title'>{item.title}</p>
                            <p>{item.price} ₹</p>
                        </div>
                        <div className='slider-two-of-card'>
                            <FaChevronRight />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Categories;
