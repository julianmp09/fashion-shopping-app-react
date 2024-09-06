import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';


export const ItemListContainer = ({ greeting, products }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula la carga de la página
        const timer = setTimeout(() => {
            setLoading(false); // Después de 1 segundo, los datos están listos
        }, 1000); // Ajusta el tiempo si es necesario

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta antes de que finalice
    }, []);

    if (loading) {
        return  (
            <div className="spinner-container">
                <ClipLoader color="#000" loading={loading} size={50} />
            </div>
        );; // Muestra el spinner mientras se simula la carga
    }

    return (
        <>
            <div className="greeting">{greeting}</div>
            <div className="divCardContainer">
                {products.map((product) => (
                    <div key={product.id} className="divCard">
                        <img src={product.image} alt={product.description} />                        
                        <h2>{product.title}</h2>
                        <p className="p-card">{product.description}</p>
                        <p className="p-card">{product.price}</p>
                        <button className="boton-card">Buy</button>
                        <Link to={`/item/${product.id}`} className="link-item-list">Ver detalle</Link>
                    </div>
                ))}
            </div>
        </>
    );
};

