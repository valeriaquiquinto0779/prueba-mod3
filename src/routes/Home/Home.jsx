import { useContext } from 'react';
import './Home.css';
import Locations from '../../components/location/locations';
import { LocationContext } from '../../contexts/LocationContext'; //context
import CardDisplay from '../Card/CardDisplay';

const Home = () => {
  //const { locations } = useContext(LocationContext); // Location context
  return (
    <>
      <h1 className='grid-tarjetas'>Tarjetas de Ubicación</h1>
      <div className='main-container'>
        <Locations/>
      </div>
    </>
  );
};

export default Home;