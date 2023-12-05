import { useState } from 'react'
import React from 'react'
import logo from '../../assets/img/logo/logo.png'

export const Header = () => {
    const [count, setCount] = useState(0)

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        console.log('menu')
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            <header>
                <div className="header-area">
                    <div className="main-header  header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                            <a href="#" className="btn header-btn">Porftfolio</a>
                                        </div>
                                    </div>
                                </div>
                                {/*  Menú celular */}
                                <div className="col-12">
                                    <div className={`mobile_menu d-block d-lg-none ${menuVisible ? 'menu-visible' : ''}`}>
                                        <div className="slicknav_menu">
                                            <a
                                                href="#"
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
                                                role="menu"
                                            >
                                                <li>
                                                    <a href="index.html" role="menuitem" tabIndex="-1">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="about.html" role="menuitem" tabIndex="-1">
                                                        About
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="services.html" role="menuitem" tabIndex="-1">
                                                        Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="portfolio.html" role="menuitem" tabIndex="-1">
                                                        Portfolio
                                                    </a>
                                                </li>
                                                <li className="slicknav_collapsed slicknav_parent"></li>
                                                <li>
                                                    <a href="contact.html" role="menuitem" tabIndex="-1">
                                                        Contact
                                                    </a>
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
    )
}
