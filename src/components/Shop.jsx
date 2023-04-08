import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    const products = useLoaderData()
    const handleAddToCart = product => {
        console.log(product);
    }
    return (
        <div className='my-container'>
            <div className='product-container'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;