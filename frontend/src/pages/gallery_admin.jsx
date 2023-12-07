
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import '../css/gallery/gallery.scss';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Gallery_admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener el valor de una cookie por su nombre
    const getCookie = (name) => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Verifica si la cookie comienza con el nombre proporcionado
        if (cookie.startsWith(name + '=')) {
          // Devuelve el valor de la cookie
          return cookie.substring(name.length + 1);
        }
      }
      // Devuelve null si no se encuentra la cookie
      return null;
    };

    // Uso de la función para obtener el valor de la cookie "usuario"
    const usuarioCookie = getCookie('usuario');

    // Verificación y redirección
    if (!usuarioCookie) {
      // El usuario no está autenticado, redirige a la página de inicio (Home)
      navigate('/');
    }else{
      console.log(usuarioCookie)
    }
  }, [navigate]); // Agrega `navigate` como dependencia para evitar advertencias

  // 
  // Resto del código de tu componente Gallery_admin
  // ...
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'London',
      description: 'Big Ben',
      rating: 4.5,
    },
    {
      src: 'https://images.unsplash.com/photo-1581010864468-c972b8705439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Paris',
      description: 'Eiffel Tower',
      rating: 5,
    },

    {
      src: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'London',
      description: 'Big Ben',
      rating: 4.5,
    },
    {
      src: 'https://images.unsplash.com/photo-1581010864468-c972b8705439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Paris',
      description: 'Eiffel Tower',
      rating: 5,
    },

    {
      src: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'London',
      description: 'Big Ben',
      rating: 4.5,
    },
    {
      src: 'https://images.unsplash.com/photo-1581010864468-c972b8705439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Paris',
      description: 'Eiffel Tower',
      rating: 5,
    },
    // Agrega más objetos de imágenes según sea necesario
  ];

  return (
    <>
      <Header />
      <div className="container">
        <section className="my-masonry-grid">
          {images.map((image, index) => (
            <div key={index} className="my-masonry-grid_item">
              <div className="card">
                <div className="card__img">
                  <img src={image.src} alt={image.title} className="my-masonry-grid_image" />
                  {/* <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {image.rating}
                  </span> */}
                  {/* <div className="card__overlay">
                    <h2>{image.title}</h2>
                    <p>{image.description}</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>

  );
};