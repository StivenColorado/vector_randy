import { useState } from 'react'
import React from 'react'
import logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';


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
                                {/* <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="" /></a>
                                    </div>
                                </div> */}
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <h3 style={{ fontWeight: 'bold' }}>
                                        ✏️<span style={{ color: '#fe3d3e' }}>Future</span>  idea
                                    </h3>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><ScrollLink to="about_reference" smooth={true}>About</ScrollLink></li>
                                                    <li><ScrollLink to="services_reference" smooth={true}>Services</ScrollLink></li>
                                                    <li><ScrollLink to="contact_reference" smooth={true}>Contact</ScrollLink></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                            <Link to="/gallery" className="btn header-btn">Porftfolio</Link>
                                        </div>
                                    </div>
                                </div>
                                {/*  Menú celular */}
                                <div className="col-12">
                                    <div className={`mobile_menu d-block d-lg-none ${menuVisible ? 'menu-visible' : ''}`}>
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
                                                role="menu"
                                            >
                                                <li>
                                                    <a
                                                        href="/"
                                                        role="menuitem"
                                                        tabIndex="-1"
                                                        onClick={() => animateScroll.scrollToTop()}
                                                    >
                                                        Home
                                                    </a>
                                                </li>



                                                <li>
                                                    <ScrollLink to="about_reference" smooth={true} role="menuitem" tabIndex="-1">
                                                        About
                                                    </ScrollLink>
                                                </li>
                                                <li>
                                                    <ScrollLink to="services_reference" smooth={true} role="menuitem" tabIndex="-1">
                                                        Services
                                                    </ScrollLink>
                                                </li>
                                                <li>
                                                    <ScrollLink to="portfolio_reference" smooth={true} role="menuitem" tabIndex="-1">
                                                        <Link to="/gallery">
                                                            Portfolio
                                                        </Link>
                                                    </ScrollLink>
                                                </li>
                                                <li className="slicknav_collapsed slicknav_parent"></li>
                                                <li>
                                                    <ScrollLink to="contact_reference" smooth={true} role="menuitem" tabIndex="-1">
                                                        Contact
                                                    </ScrollLink>
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
