import { GoTrashcan } from "react-icons/go";
import { useContext, useState } from 'react';
import { EliminarContext } from '../../contexts/EliminarContext';
import { Link } from 'react-router-dom';
import './location.css';

const Location = ({ location }) => {  
  const {id, name, latitude, longitude, temperature, windspeed, liked } = location
  const {eliminar, setEliminar } = useContext(EliminarContext);
  const [isUbicacion, setIsUbicacion] = useState(liked);
      
  //TODO tienes que modificar el like en la paleta
  const handleLocation = () => {
    setIsUbicacion((isUbicacion) => !isUbicacion);
      
    //busco si la paleta ya esta en favoritos
    //const foundIndex = eliminar.findIndex(loc => loc.id === id);
      
    // //para agregar a favoritos
    // if (foundIndex === -1) {
    //   //setFavorites([...favorites, palette])
    //   //return
    //   setUbicacion(
    //   ubicacion.filter((loc) => loc.id !== id )//!==
    //   );
    //   return
    // };
    // }
    //Quitar de favoritos
      setEliminar(
        eliminar.filter((loc) => loc.id !== id )//!==
      );
    }
  

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
  }
  
  return (
    <div className='location-container'>
      <div className='location'>
        <h3><span>Orden: {id}</span></h3>
        <h3><span>Lugar: {name}</span></h3>
        <h3><span>Latitud: {latitude}</span></h3>
        <h3><span>Longitud: {longitude}</span></h3>
        <h3><span>Temperatura: {temperature}</span></h3>
        <h3><span>Velocidad del Viento: {windspeed}</span></h3>

      </div>
      <div className='location-actions'>
        <Link className='btn-see-more' to={`/location/${id}`}>
          Ver más
        </Link>
        <div className='fav' onClick={handleLocation}>
          {isUbicacion ? (
            <GoTrashcan className='heart'/>
          ) : (
            <GoTrashcan/>
          )}
        </div>
      </div>
    </div>
  )
}
  
export default Location;