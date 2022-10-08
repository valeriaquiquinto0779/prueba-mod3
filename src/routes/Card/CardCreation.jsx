import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import { getClima } from '../../service';
import './CardCreation.css';

const CardCreation = () => {
  const { tarjeta, setTarjeta } = useContext(LocationContext) //context
  const navigate = useNavigate();
  const urlImage = "https://tse4.mm.bing.net/th?id=OIP.GsThrr3bJH2T4zlTK-8eEQHaEK&pid=Api&P=0";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { 
     }
  });

  const onSubmit = (data) =>{
    //console.log("esto es longitud; "+JSON.stringify(data));
    getAux(data);
    navigate('/')
  };

  let getAux = (formData) => {
    getClima(formData.locationlatitude,formData.locationlongitude)
    .then((data) => {
      const locationNew = {
        id: tarjeta.length + 1,
        name: formData.locationName,
        latitude: data.latitude,
        longitude: data.longitude,
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        image: urlImage,
        liked: false,
      };
      setTarjeta([...tarjeta, locationNew])
      navigate('/')
    }) 
    .catch((err) => console.log(err));  
  };

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