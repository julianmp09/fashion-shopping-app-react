import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { CardWidget } from './CardWidget';

export const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="hero-section">
            <a href="/" className="Fashion">
                <img src={logo} alt="logo-escudo" className="logo-escudo" />
                Fashion
            </a>
            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <li><a href="/catalogue">Catalogue</a></li>
                    {/* Menú Desplegable */}
                    <li className="dropdown">
                        <button onClick={toggleDropdown} className="dropbtn">Categories</button>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <a href="/category/dresses">Dresses</a>
                                <a href="/category/jeans">Jeans</a>
                                <a href="/category/cap">Cap</a>
                                <a href="/category/jacket">Jacket</a>
                                <a href="/category/shirt">Shirt</a>
                                <a href="/category/sweater">Sweater</a>
                            </div>
                        )}
                    </li>
                    <li><a href="">Fashion</a></li>
                    <li><a href="">Favourite</a></li>
                    <li><a href="">Lifestyle</a></li>
                    <CardWidget />
                    <li><a href="" className="boton">Sign up</a></li>
                </ul>
            </nav>
        </header>
    );
};
