import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import { getClima } from '../../service';
import './CardCreation.css';

const CardCreation = () => {
  <h1>CardCreation</h1>
  const { location, setLocation } = useContext(LocationContext) //context
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { 
     }
  });

  let getAux = (formData) => {
    getClima(formData.locationlatitude,formData.locationlongitude)
    .then((data) => {
      //setLocation(data)
      //console.log("estos viene de la api", data)
    
      const locationNew = {
        id: location.length + 1,
        name: formData.locationName,
        latitude: data.latitude,
        longitude: data.longitude,
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        liked: false,
      };
      setLocation([...location, locationNew])
    }) 
    .catch((err) => console.log(err));  
  };

  const onSubmit = (data) =>{
    //console.log("esto es longitud; "+JSON.stringify(data));
    getAux(data);
    navigate('/')
  };
  
  // const onSubmit = (data) => {
  //   /* Api */
  //   console.log("esto es longitud; "+JSON.stringify(data));
  //   getClima(data.locationlatitud,data.locationlongitud)
  //   .then((data) => {
  //     setLocation(data)
  //     console.log(data)
  //   }) 
  //   .catch((err) => console.log(err));

  //   console.log(data);
  //   const locationNew = {
  //     id: location.length + 1,
  //     name: data.locationName,
  //     latitude: data.locationlatitude,
  //     longitude: data.locationlongitude,
  //     //liked: false,
  //   }

  //   setLocation([...location, locationNew])
  //   navigate('/')
  // }

  return (
    <div className='location-new-container'>
      <span>Crea una nueva ubicación</span>
      <form className='location-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-location-name-form'
          type='text'
          placeholder='Nombre de la ubicacion'
          {...register('locationName', {
            required: 'Debe ingresar un nombre',
          })}
        />
        <p>{errors.locationName?.message}</p>
        <input
          type='text'
          placeholder='Latitude'
          {...register('locationlatitude', {
            required: 'Debe ingresar una lalitud',
          })}
        />
        <p>{errors.locationlatitude?.message}</p>
        <input
          type='text'
          placeholder='Longitude'
          {...register('locationlongitude', {
            required: 'Debe ingresar una longitud',
          })}
        />
        <p>{errors.locationlongitude?.message}</p>
        
        <button className='btn-form' type='submit'>
          Crear Ubicación
        </button>
      </form>
    </div>
  );
};

export default CardCreation; 