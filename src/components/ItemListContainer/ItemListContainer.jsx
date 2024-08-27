const ItemListContainer = ({ greeting, products }) => {
    return (
        <>
            <div className="greeting">{greeting}</div>
            <div className="divCardContainer">
                {products.map((product) => (
                    <div key={product.id} className="divCard">
                        <img src={product.image} alt={product.description} />                        
                        <h2>{product.id}</h2>
                        <p className="p-card">{product.description}</p>
                        <button className="boton-card">Buy</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ItemListContainer;