import './App.css';
import {Routes, Route} from 'react-router-dom' 
import { useContext, useEffect,useState } from 'react'; 
import { getClima } from './service';  //Api
import { LocationContext} from './contexts/LocationContext'; //context
import Home from './routes/Home/Home';
import CardDisplay from './routes/Card/CardDisplay';
import CardCreation from './routes/Card/CardCreation';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';

function App() {
  
  //const { setListCard } = useContext(LocationContext);
  //const [listCard, setListCard] = useState([]);
  //const [latitud, setLatitud] = useState('-24.196360');
  //const [longitud, setLongitud] = useState('-65.302191');

  //useEffect(() => {
    //setLatitud('-24.196360')
    //setLongitud('-65.302191')
    //getClima(latitud,longitud)
      //.then((data) => {
        //setListCard(data)
        //console.log(data)
      //}) 
      //.catch((err) => console.log(err));
  //}, []);

  return ( 
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation/>}> 
          <Route path='login' element={<Login/>}/>
          <Route index element={<Home/>}/>
          <Route path='location/create' element={<CardCreation/>}/>
          <Route path='location/:id' element={<CardDisplay/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;