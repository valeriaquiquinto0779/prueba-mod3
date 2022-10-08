import { useContext } from 'react';
import './Home.css';
import Locations from '../../components/location/locations';
import { LocationContext } from '../../contexts/LocationContext'; //context
import CardDisplay from '../Card/CardDisplay';

const Home = () => {
  const { locations } = useContext(LocationContext); // Location context

  return (
    <>
      <div className='main-container'>
        <Locations/>
      </div>
    </>
  );
};

export default Home;