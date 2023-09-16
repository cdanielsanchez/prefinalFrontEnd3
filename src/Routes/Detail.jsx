import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ContextGlobal} from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {
  const { contextValue } = useContext(ContextGlobal);
  const { state } = contextValue;


  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Realiza la solicitud de API para obtener los detalles del dentista con el 'id' proporcionado
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error al cargar los detalles del dentista:', error));
  }, [id]); // Asegúrate de que la solicitud se realice cada vez que cambia 'id'

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={state.theme} id='detail-container'>
      <h1>Detail Dentist Id: {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

      {dentist ? (
        <div className='detail'>
          {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          <p>id: {dentist.id}</p>
          <h2>Nombre: {dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}

    </div>
  )
}

export default Detail