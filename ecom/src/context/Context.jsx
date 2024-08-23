import { createContext, useContext, useEffect, useState } from "react";

const EcomContext = createContext();

export const useEcom = () => {
    return useContext(EcomContext);
}

const EcomProvider = (props) => {

    const [allProducts, setAllProducts] = useState([]);
    const [category, setCategory] = useState('electronics');
    const [categoryContainer, setCategoryContainer] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products');
            const res = await data.json();
            setAllProducts(res);  
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    const fetchFromCategory = async () => {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const res = await data.json();
            setCategoryContainer(res);
        } catch (error) {
            console.error("Failed to fetch products by category:", error);
        }
    }

    // const getCategory = (category) => {
    //     setCategory(category);
    // }

    useEffect(() => {
        fetchAllProducts();
    }, []);

    useEffect(() => {
        fetchFromCategory();
    }, [category]);

    const value = {
        allProducts,
        category,
        setCategory,
        categoryContainer,
        // getCategory
    };

    return (
        <EcomContext.Provider value={value}>
            {props.children}
        </EcomContext.Provider>
    );
};

export { EcomContext, EcomProvider };
