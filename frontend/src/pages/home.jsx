import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
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
    const handleEmailButtonClick = () => {
        const emailAddress = 'randycc24@hotmail.com'; // Reemplaza con tu dirección de correo electrónico
        const subject = 'Consulta Ilustracion'; // Reemplaza con el asunto deseado

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;

        // Abre el cliente de correo electrónico predeterminado del usuario con el enlace generado
        window.location.href = mailtoLink;
    };
    return (
        <>
            <Header />
            <main>
                <div class="slider-area">
                    <div class="slider-active ">
                        <div class="single-slider slider-height d-flex items-center">
                            <div class="container mx-auto">
                                <div class="row bg-red-400">
                                    <div class="col-xl-6 col-lg-6 col-md-8 ml-auto text-right flex items-end">
                                        <div class="hero__caption">
                                            <span class="block text-lg text-gray-300" data-animation="fadeInUp" data-delay=".4s">
                                                Transformando ideas en vectores. 💡
                                            </span>
                                            <h1 class="text-5xl font-bold text-white" data-animation="fadeInUp" data-delay=".6s">
                                                Soy Randy
                                            </h1>
                                            <p class="text-xl mt-4 text-white" data-animation="fadeInUp" data-delay=".8s">
                                                He cultivado mi arte a través de la exploración creativa y la autenticidad. Mi enfoque único y estilo distintivo en ilustraciones vectoriales profesionales han sido moldeados por mi dedicación y amor por la expresión visual.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="about-area section-paddingt30" id='about_reference'>
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-5">
                                <div className="about-caption mb-50">
                                    <h3>Vectores que Cuentan Historias: Bienvenido a mi Rincón Creativo</h3>
                                    <p className="pera1">
                                        Entra en un mundo donde los vectores cobran vida, cada uno contando una historia única. Bienvenido a mi rincón creativo, donde el arte se despliega en cada trazo y color.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="about-caption2">
                                    <h3>Cualquier Idea Puede Construirte a Ti y a Mí.</h3>
                                    <p>Hablemos más tarde</p>
                                    <div className="send-cv">
                                        <a onClick={handleEmailButtonClick}>Randycc24@hotmail.com</a>
                                        <i className="ti-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="services-area services-padding" id='services_reference'>
                    <div className="container">
                        <div className="project-heading mb-35">
                            <div className="row align-items-end">
                                <div className="col-lg-6">
                                    <div className="section-tittle">
                                        <h2>¡Lo que puedo hacer por ti!</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="properties__button">
                                        {/* Botón de navegación */}
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> Todos</a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Música</a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Gestos</a>
                                                <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Personas</a>
                                                <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Objetos</a>
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
                                                    Solo
                                                    <div className="single-services mb-30">
                                                        <img src={services5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    Solo
                                                    <div className="single-services mb-30">
                                                        <img src={services1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                    Solo
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
                                                    Solo
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

                {/* <section className="wantToWork-area w-padding2" id='contact_reference'>
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
                </section> */}

                {/* <div className="brand-area pb-bottom">
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
                </div> */}


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
            <Footer />
            <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </>
    )
}