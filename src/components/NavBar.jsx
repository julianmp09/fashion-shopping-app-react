import logo from '../assets/images/logo.png'
import CardWidget from './CardWidget/CardWidget'
CardWidget
const NavBar = () => {
    return (
        <header className="hero-section">
        <a href="index.html" className="Fashion"><img src={logo} alt="logo-escudo" className="logo-escudo"/>Fashion</a>
        <nav className="nav-bar">
            <ul className="nav-bar-list">
                <li><a href="">Catalogue</a></li>
                <li><a href="">Fashion</a></li>
                <li><a href="">Favourite</a></li>
                <li><a href="">Lifestyle</a></li>
                <CardWidget/>
                <li><a href="" className="boton">Sign up</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default NavBar