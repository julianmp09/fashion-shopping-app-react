import womenImage from '../../assets/images/womenImage.png' //Ruta relativa. Las importaciones tiene que coincidir con el nombre explicito de la imagen

export const HeroSection = () => {
    return(
        <section className="hero-section-1">
        <div className="info">
            <h1 className="title-info"><span className="white">LET’S</span> EXPLORE <span className="mustard">UNIQUE</span> CLOTHES.</h1>
            <p className="paragraph">Live for Influential and Innovative fashion!</p>
            <button className="btn-shop-now">Shop Now</button>
        </div>
        <div className="women-dancing">
            <img src={womenImage} alt="" className="women-dancing-photo"/>
        </div>
    </section>        
    )
}