import React, { useState } from 'react';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import imgLogin from '../assets/img/service/services3.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new URLSearchParams();
        formData.append('correo', Email);
        formData.append('contrasena', password);
        console.log(`correo y contrasena en front: ${Email, password}`)

        try {
            fetch('https://vector-randy.onrender.com/api/validar_usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                credentials: 'include',
                body: formData.toString(),
            });

            if (response.ok) {
                const data = await response.json();

                if (response.status === 200 && data.mensaje === 'Usuario válido') {
                    // Establecer cookie después de una autenticación exitosa
                    document.cookie = `usuario=${Email}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;

                    toast.success(data.mensaje, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setTimeout(() => {
                        navigate('/gallery_admin');
                    }, 3000);
                } else if (response.status === 401 && data.mensaje === 'Credenciales incorrectas') {
                    toast.error(data.mensaje, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    toast.error('Error desconocido', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            } else {
                toast.error("Error en la solicitud", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            toast.error("Error en la solicitud", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <Header />
            <div className="container-fluid h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={imgLogin}
                            alt="Imagen"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-md-6" style={{ minHeight: '50vh' }}>
                        <div className="container" style={{ minHeight: '100%', minWidth: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <form onSubmit={handleSubmit} style={{ minHeight: '100%', minWidth: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label" style={{ width: '80%' }}>Correo Electrónico</label>
                                    <input type="email" className="form-control" id="correo" style={{ width: '80%' }} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contrasena" className="form-label" style={{ width: '80%' }}>Contraseña</label>
                                    <input type="password" className="form-control" id="contrasena" style={{ width: '80%' }} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary pt-3">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
