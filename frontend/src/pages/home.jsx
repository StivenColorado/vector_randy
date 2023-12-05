import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import loder from '../assets/img/logo/loder.jpg'

import logo from '../assets/img/logo/logo.png'
import services1 from '../assets/img/service/services1.jpg'
import services2 from '../assets/img/service/services2.jpg'
import services3 from '../assets/img/service/services3.jpg'
import services4 from '../assets/img/service/services4.jpg'
import services5 from '../assets/img/service/services5.jpg'
import services6 from '../assets/img/service/services6.jpg'

import blog1 from '../assets/img/gallery/blog1.png'
import blog2 from '../assets/img/gallery/blog2.png'
import blog3 from '../assets/img/gallery/blog3.png'

// COMPONENTES
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'

export const Home = () => {
    
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
            <Header/>
            <main>
                <div className="slider-area ">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInUp" data-delay=".4s">Transforming Ideas into Vectors.</span>
                                            <h1 data-animation="fadeInUp" data-delay=".6s">I’m Artist Randy</h1>
                                            <p data-animation="fadeInUp" data-delay=".8s" >
                                                I have cultivated my art through creative exploration and authenticity. My unique approach and distinctive style in professional vector illustrations have been shaped by my dedication and love of visual expression.
                                            </p>
                                            {/* <div className="hero__btn">
                            <a href="industries.html" className="btn hero-btn" data-animation="fadeInLeft" data-delay=".8s">Learn More</a>
                            <a href="industries.html" className="btn border-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">Hire Me</a>
                          </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="about-area section-paddingt30">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-5">
                                <div className="about-caption mb-50">
                                    <h3>Vectors that Tell Stories: Welcome to my Creative Corner</h3>
                                    <p className="pera1">
                                        Step into a world where vectors come to life, each telling a unique story. Welcome to my creative corner, where art unfolds in every stroke and color.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="about-caption2">
                                    <h3>Any Idea Can Build You & I .</h3>
                                    <p>Late talk with me</p>
                                    <div className="send-cv">
                                        <a href="#">Randycc24@hotmail.com</a>
                                        <i className="ti-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
            <section className="categories-area section-padding3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section-tittle mb-70">
                      <h2>What Services you will Get from me!</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                      <div className="cat-icon">
                        <span className="flaticon-pen"></span>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="services.html">UI/UX Design</a></h5>
                        <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                      <div className="cat-icon">
                        <span className="flaticon-speaker"></span>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="services.html">Digital Marketing</a></h5>
                        <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                      <div className="cat-icon">
                        <span className="flaticon-portfolio"></span>
                      </div>
                      <div className="cat-cap">
                        <h5><a href="services.html">Website Design</a></h5>
                        <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}


                <section className="services-area  services-padding">
                    <div className="container">
                        <div className="project-heading mb-35">
                            <div className="row align-items-end">
                                <div className="col-lg-6">
                                    <div className="section-tittle">
                                        <h2>What I can do for you!</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="properties__button">
                                        {/* Nav Button */}
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> All</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Music</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Gestures</a>
                                                <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">People </a>
                                                <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Objects</a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content active" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <div className="services-caption">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-8">
                                                    <div className="single-services mb-30">
                                                        <img src={services2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services3} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services4} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services6} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services1} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <div className="services-caption">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-8">
                                                    <div className="single-services mb-30">
                                                        <img src={services2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services3} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services4} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    Single
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    Single
                                                    <div className="single-services mb-30">
                                                        <img src={services1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    Single
                                                    <div className="single-services mb-30">
                                                        <img src={services2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <div className="services-caption">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-8">
                                                    Single
                                                    <div className="single-services mb-30">
                                                        <img src={services1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services3} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services4} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services1} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                        <div className="services-caption">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-8">
                                                    <div className="single-services mb-30">
                                                        <img src={services2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services3} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services4} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services6} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services3} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                        <div className="services-caption">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-8">
                                                    <div className="single-services mb-30">
                                                        <img src={services2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services1} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="single-services mb-30">
                                                                <img src={services4} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services6} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    <div className="single-services mb-30">
                                                        <img src={services6} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wantToWork-area w-padding2">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-8 col-md-8">
                                <div className="wantToWork-caption wantToWork-caption2">
                                    <h2>Dont worry for contact i`m available</h2>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3">
                                <a href="#" className="btn btn-black f-right">Contact Me Now</a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="brand-area pb-bottom">
                    <div className="container">
                        <div className="brand-active brand-border pt-50 pb-40">
                            <div className="single-brand">
                                <img src="assets/img/gallery/brand1.png" alt="" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/img/gallery/brand2.png" alt="" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/img/gallery/brand3.png" alt="" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/img/gallery/brand4.png" alt="" />
                            </div>
                            <div className="single-brand">
                                <img src="assets/img/gallery/brand2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* <section className="contact-info-area w-padding2" data-background="assets/img/gallery/section_bg04.jpg">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="contact-caption mb-50">
                      <h3>If Not Now, When? Let’s Work Together!</h3>
                      <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                      <img src="assets/img/gallery/sin.png" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <form action="#" className="contact-wrapper">
                      <input type="text" name="name" placeholder="Full Name" />
                      <input type="email" name="email" placeholder="Email Address" />
                      <textarea name="message" id="message" placeholder="Your Message"></textarea>
                      <button className="submit-btn2" type="submit">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </section> */}


            </main>
            <Footer/>
            <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </>
    )
}