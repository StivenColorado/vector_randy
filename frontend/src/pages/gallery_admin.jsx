import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import '../css/gallery/gallery.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Gallery_admin = () => {
  const [images, setImages] = useState([]); // Estado para almacenar las imágenes
  const [selectedImages, setSelectedImages] = useState([]); // Estado para manejar las imágenes seleccionadas
  const [displayButton, setDisplayButton] = useState(false);
  const navigate = useNavigate();

  // Mostrar el botón solo cuando hay imágenes seleccionadas
  useEffect(() => {
    setDisplayButton(selectedImages.length > 0);
  }, [selectedImages]);

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
      // const apiUrl = `https://vector-randy.onrender.com/api/imagenes/`;
      const apiUrl = `https://vectorrandy-production.up.railway.app/api/imagenes/`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error al obtener las imágenes: ${response.statusText}`);
      }

      const data = await response.json();
      const imagenesConRutasCompletas = data.imagenes.map(imagen => `https://vectorrandy-production.up.railway.app:${imagen}`);
      setImages(imagenesConRutasCompletas);
    } catch (error) {
      console.error('Error en la solicitud de imágenes:', error);
    }
  };

  useEffect(() => {
    traerImagenes();
  }, []);

  const handleCargarImagenes = async (e) => {
    e.preventDefault();

    try {
      const serverHost = import.meta.env.VITE_SERVER_HOST || 'localhost';
      const serverPort = import.meta.env.VITE_SERVER_PORT || '3300';
      const apiUrl = `https://vectorrandy-production.up.railway.app/api/cargar_imagenes`;

      const formData = new FormData();
      selectedImages.forEach(file => {
        formData.append('imagenes', file);
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error al cargar las imágenes: ${response.statusText}`);
      }

      traerImagenes();
      // Resetear la selección de archivos después de cargar
      setSelectedImages([]);
      document.getElementById('load-image').value = '';
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages(Array.from(files)); // Convertir FileList a Array
  };

  const handleEliminarImagen = async (nombreArchivo) => {
    try {
      const apiUrl = `https://vectorrandy-production.up.railway.app/api/eliminar_imagen`;

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
          <label htmlFor="load-image" className="file-input-button">Seleccionar Archivos</label>
          <input
            type="file"
            name="imagenes" // Debe coincidir con el nombre usado en FormData
            id="load-image"
            accept=".jpg, .jpeg, .png, .gif"
            className="file-input"
            multiple // Permite seleccionar múltiples archivos
            onChange={handleImageChange} // Maneja la selección de archivos
          />
        </div>
        <span className="file-name" id="file-name"></span>
        {displayButton && (
          <button id="load-files-button" type="submit">
            Cargar Imágenes
          </button>
        )}
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
