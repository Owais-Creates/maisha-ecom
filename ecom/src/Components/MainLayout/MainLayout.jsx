import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./MainLayout.css"
import Hero from '../HeroSection/Hero';
import AllProducts from '../AllProducts/AllProducts';
import Categories from '../Categories/Categories';

const MainLayout = () => {
    return (

        <>
            <Navbar />
            <Hero />
            <AllProducts />
            <Categories />
        </>

    )
}

export default MainLayout