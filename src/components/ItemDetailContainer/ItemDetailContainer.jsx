import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import { productsData } from "../../data/productsData";
import { ClipLoader } from 'react-spinners';



export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulamos la carga de datos
        setTimeout(() => {
            const foundProduct = productsData.find(product => product.id === Number(id));
            setProduct(foundProduct);
            setLoading(false);
        }, 1000); // Simulamos 1 segundo de carga
    }, [id]);

    if (loading) {
        return (
            <div className="spinner-container">
                <ClipLoader color="#000" loading={loading} size={50} />
            </div>
        );
    }
    return <>
        <div className="divCard-item">
            <img src={product.image} alt={product.description} className="img-item"/>                        
            <h2 className="title-item">{product.title}</h2>
            <p className="p-card-item">{product.description}</p>
            <p className="p-card">{product.price}</p>
            <button className="boton-card-item">Buy</button>
        </div>
    </>
}