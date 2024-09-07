import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer';
import { productsData } from '../data/productsData';

export const Category = () => {
    const { id } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filtra los productos por la categoría proporcionada en la URL
        const filtered = productsData.filter(product => product.category === id);
        setFilteredProducts(filtered);
    }, [id]);

    return (
        <div>
            <ItemListContainer greeting={`Products in category: ${id}`} products={filteredProducts} />
            
        </div>
    );
};
