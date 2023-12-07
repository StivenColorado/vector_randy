import React from 'react'
import logo from '../../assets/img/favicon.png'
export const Loader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
