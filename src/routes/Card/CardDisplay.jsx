import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import './CardDisplay.css';

const CardDisplay = () => {
  const { id } = useParams();
  const { locations } = useContext(LocationContext);
  const [location] = locations.filter((location) => location.id === Number(id)
  );
  
  return (
    <div className='location-display-container'>
      <div className='location-display-card'>
        <h1 className='location-display-name'>{location.name}</h1>
        <h1 className='location-display-latitude'>{location.latitude}</h1>
        <h1 className='location-display-longitude'>{location.longitude}</h1>
      </div>
      <Link className='btn-back' to='/'>
        Volver al Inicio
      </Link>
    </div>
  ) 
}
export default CardDisplay; 