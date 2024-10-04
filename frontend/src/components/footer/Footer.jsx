import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <div className="container">
                        <div className="footer-top footer-padding">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="footer-top-cap text-center">
                                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                                        <span><a href="#">Vectores Randy</a></span>
                                        <p>Colombia - Valle del Cauca</p>
                                        <p>Palmira</p>
                                        <p>Teléfono: 57 320 6454976</p> {/* Número de teléfono agregado */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-xl-9 col-lg-8">
                                    <div className="footer-copy-right">
                                        {/* Aquí puedes agregar contenido adicional si es necesario */}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <div className="footer-social f-right">
                                        <a>Stay Connected</a>
                                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100010141906901">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a target="_blank" href="https://wa.me/3218956487">
                                            <i className="fab fa-whatsapp"></i>
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com/randycc24/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
