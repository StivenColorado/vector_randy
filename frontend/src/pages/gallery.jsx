
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import '../css/gallery/gallery.scss';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Gallery = () => {
  const [images, setImages] = React.useState([]); // Estado para almacenar las imágenes

  const traerImagenes = async () => {
    try {
      // Obtener el host y puerto del servidor desde las variables de entorno
      const serverHost = import.meta.env.VITE_SERVER_HOST || 'localhost';
      const serverPort = import.meta.env.VITE_SERVER_PORT || '3000';

      // Construir la URL de la API de imágenes
      const apiUrl = `http://${serverHost}:${serverPort}/api/imagenes`;

      // Realizar la solicitud GET
      
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error al obtener las imágenes: ${response.statusText}`);
      }

      // Convertir la respuesta a formato JSON
      const data = await response.json();

      // Construir las rutas completas de las imágenes
      const imagenesConRutasCompletas = data.imagenes.map(imagen => `http://${serverHost}:${serverPort}${imagen}`);

      // Establecer las imágenes en el estado
      setImages(imagenesConRutasCompletas);
    } catch (error) {
      console.error('Error en la solicitud de imágenes:', error);
      // Manejar el error según tus necesidades
    }
  };


  // Llamar a la función para traer imágenes cuando el componente se monta
  useEffect(() => {
    traerImagenes();
  }, []); // Vacío para que solo se ejecute una vez al montar el componente

  return (
    <>
      <Header />
      <div className="container">
        <section className="my-masonry-grid">
          {images.map((image, index) => (
            <div key={index} className="my-masonry-grid_item">
              <div className="card">
                <div className="card__img">
                  <img src={image} alt={`Image ${index}`} className="my-masonry-grid_image" />
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