import React, { useContext } from 'react';
import "../index.css"
import Form from '../Components/Form'
import {ContextGlobal} from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { contextValue } = useContext(ContextGlobal); // Acceder al contexto
  const { state } = contextValue;  

  return (
    <div className={state.theme} id="contacto">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  );
};

export default Contact;