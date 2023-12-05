import React from 'react'

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
                                        <span><a href="#">drawio.com</a></span>
                                        <p>Colombia - Valle del cauca </p>
                                        <p>Palmira </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-xl-9 col-lg-8">
                                    <div className="footer-copy-right">

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <div className="footer-social f-right">
                                        <a>Stay Connected</a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fas fa-globe"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
