import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import '../css/gallery/gallery.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Gallery_admin = () => {
  const [images, setImages] = React.useState([]); // Estado para almacenar las imágenes

  const [selectedImage, setSelectedImage] = useState(null);
  const [displayButton, setDisplayButton] = useState(false);

  const navigate = useNavigate();

  const display_Button = () => {
    if (selectedImage) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  };


  useEffect(() => {
    const getCookie = (name) => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    };

    const usuarioCookie = getCookie('usuario');

    if (!usuarioCookie) {
      navigate('/');
    } else {
      console.log(usuarioCookie);
    }
  }, [navigate]);

  const traerImagenes = async () => {
    try {
      //https://vector-randy.onrender.com/api/imagenes/
      const apiUrl = `https://vector-randy.onrender.com/api/imagenes/`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error al obtener las imágenes: ${response.statusText}`);
      }

      const data = await response.json();

      const imagenesConRutasCompletas = data.imagenes.map(imagen => `https://vector-randy.onrender.com:${imagen}`);

      setImages(imagenesConRutasCompletas);
    } catch (error) {
      console.error('Error en la solicitud de imágenes:', error);
    }
  };

  useEffect(() => {
    display_Button();
  }, [selectedImage]);

  useEffect(() => {
    traerImagenes();
    display_Button()
  }, []);


  const handleCargarImagenes = async (e) => {
    e.preventDefault();

    try {
      const serverHost = import.meta.env.VITE_SERVER_HOST || 'localhost';
      const serverPort = import.meta.env.VITE_SERVER_PORT || '3300';
      const apiUrl = `https://vector-randy.onrender.com/api/cargar_imagenes`;

      const formData = new FormData();
      const input = document.getElementById('load-image');
      formData.append('imagen', input.files[0]); // Asegúrate de que 'imagen' sea el nombre correcto

      // Imprime el FormData utilizando entries y JSON.stringify
      console.log("Lo que se está enviando en el formulario:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error al cargar las imágenes: ${response.statusText}`);
      }

      traerImagenes();
      window.location.reload()

    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
      window.location.reload()

    }
  };

  const handleEliminarImagen = async (nombreArchivo) => {
    try {
      const apiUrl = `https://vector-randy.onrender.com/api/eliminar_imagen`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreArchivo }),
      });

      if (!response.ok) {
        throw new Error(`Error al eliminar la imagen: ${response.statusText}`);
      }

      traerImagenes(); // Actualiza la lista de imágenes después de eliminar
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
    }
  };


  const getFileNameFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  return (
    <>
      <Header />
      <form id="form-upload-files" onSubmit={handleCargarImagenes} encType="multipart/form-data">
        <div className="file-input-container">
          <label for="load-image" className="file-input-button">Seleccionar Archivo</label>
          <input
            type="file"
            name="imagen"
            id="load-image"
            accept=".jpg, .jpeg, .png, .gif"
            className="file-input"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />


        </div>
        <span class="file-name" id="file-name"></span>
        <button id="load-files-button" type="submit" style={{ display: displayButton ? 'block' : 'none' }}>
          Cargar Imágen
        </button>

      </form>

      <div className="container">
        <section className="my-masonry-grid">
          {images.map((image, index) => (
            <div key={index} className="my-masonry-grid_item">
              <div className="card">
                <div className="card__img">
                  <button className='delete-button' onClick={() => handleEliminarImagen(getFileNameFromUrl(image))}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                  </button>
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
