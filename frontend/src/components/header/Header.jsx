import { useState } from 'react';
import React from 'react';
import logo from '../../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Header = () => {
    const [count, setCount] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        console.log('menú');
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <header>
                <div className="header-area">
                    <div className="main-header header-sticky" style={{ backgroundColor: 'rgb(226 126 95)' }}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <h3 style={{ fontWeight: 'bold' }}>
                                        ✏️<span style={{ color: '#fff' }}>Futuro</span> idea
                                    </h3>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation" style={{ color: 'white' }}>
                                                    <li><Link to="/" style={{ color: 'white' }}>Inicio</Link></li>
                                                    <li><ScrollLink to="services_reference" smooth={true} style={{ color: 'white' }}>Servicios</ScrollLink></li>
                                                    <li><Link to="/login" style={{ color: 'white' }}>Iniciar Sesión</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                            <Link to="/gallery" className="btn header-btn">Galeria</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Menú móvil */}
                                <div className="col-12">
                                    <div className={`mobile_menu d-block d-lg-none ${menuVisible ? 'menu-visible' : ''}`} style={{ backgroundColor: 'rgb(226 126 95)' }}>
                                        <div className="slicknav_menu">
                                            <a
                                                aria-haspopup="true"
                                                role="button"
                                                className="slicknav_btn slicknav_collapsed"
                                                onClick={toggleMenu}
                                            >
                                                <span className="slicknav_menutxt"></span>
                                                <span className="slicknav_icon">
                                                    <span className="slicknav_icon-bar"></span>
                                                    <span className="slicknav_icon-bar"></span>
                                                    <span className="slicknav_icon-bar"></span>
                                                </span>
                                            </a>
                                            <ul
                                                className={`slicknav_nav ${menuVisible ? '' : 'd-none'}`}
                                                aria-hidden={!menuVisible}
                                                style={{background:'rgb(226 126 95)'}}
                                                role="menu"
                                            >
                                                <li>
                                                    <Link to="/" role="menuitem" tabIndex="-1" onClick={() => animateScroll.scrollToTop()} style={{ color: 'white' }}>
                                                        Inicio
                                                    </Link>
                                                </li>
                                                <li>
                                                    <ScrollLink to="services_reference" smooth={true} role="menuitem" tabIndex="-1" style={{ color: 'white' }}>
                                                        Servicios
                                                    </ScrollLink>
                                                </li>
                                                <li>
                                                    <Link to="/gallery" smooth={true} role="menuitem" tabIndex="-1" style={{ color: 'white' }}>
                                                        Galeria 
                                                    </Link>
                                                </li>
                                                <li className="slicknav_collapsed slicknav_parent"></li>
                                                <li>
                                                    <Link to="/login" smooth={true} role="menuitem" tabIndex="-1" style={{ color: 'white' }}>
                                                        Iniciar Sesión
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
