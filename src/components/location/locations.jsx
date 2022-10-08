import Location from "./location";
import './locations.css'
import { LocationContext } from '../../contexts/LocationContext';
import { useContext } from "react";


const Locations = ({ }) => {
  const locations = useContext (LocationContext);
  console.log("dashboiard Vale" + JSON.stringify(locations));
  console.log("dashboiard le Vale: " + locations.location.length)
  
  return (
    <div className='grid'>
       {locations.location.length > 0 ? (  
        locations.location.map((location) => (
        <Location 
        key={location.id} 
        name = {location.name} 
        latitude = {location.latitude} 
        longitude = {location.longitude} 
        temperature = {location.temperature}
        windspeed = {location.windspeed}
        liked = {location.liked}
        //temperature = {location.temperature} 
        //windspeed = {location.windspeed}
        location={location} />
      ))
      ):(
        <h1>no hay nada</h1>
      )}
      
    
    </div>
  );
}

export default Locations;