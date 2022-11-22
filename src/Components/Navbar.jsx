//tools
import { Link } from 'wouter';
import { useState } from 'react';
//styeles
import './Navbar.scss';

function Navbar() {
    const [showMenu, setShowMenu] = useState('');

    const toggleMenu = evt => {
        evt.preventDefault(); //! Avoids re-rendering
        setShowMenu(showMenu === '' ? 'navbar-mobile-menu-open' : '');
    };
    return (
        <>
            <div className="navbar">
                <div className="navbar-desktop-menu">
                    <div className="navbar-title">
                        <h1>Aterrizar.com</h1>
                    </div>
                    <nav className="navbar-nav">
                        <ul className="navbar-nav-list">
                            <li className="navbar-nav-list-item">
                                <Link href="/">Destinos</Link>
                            </li>
                            <li className="navbar-nav-list-item">
                                <Link href="/">Ofertas</Link>
                            </li>
                            <li className="navbar-nav-list-item">
                                <Link href="/">Paquetes</Link>
                            </li>
                            <li className="navbar-nav-list-item navbar-nav-mi-cuenta">
                                <Link href="/">Mi Cuenta</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="navbar-mobile-open-button">
                    <span
                        className="material-symbols-outlined"
                        onClick={toggleMenu}
                    >
                        menu
                    </span>
                </div>
                <nav className={`navbar-mobile-menu ${showMenu}`}>
                    <div className="navbar-mobile-close-button">
                        <span
                            className="material-symbols-outlined"
                            onClick={toggleMenu}
                        >
                            close
                        </span>
                    </div>
                    <ul className="navbar-mobile-menu-list">
                        <li className="navbar-mobile-menu-list-item">
                            <Link href="/">Destinos</Link>
                        </li>
                        <li className="navbar-mobile-menu-list-item">
                            <Link href="/">Ofertas</Link>
                        </li>
                        <li className="navbar-mobile-menu-list-item">
                            <Link href="/">Paquetes</Link>
                        </li>
                        <li className="navbar-mobile-menu-list-item">
                            <Link href="/">Mi Cuenta</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
