import React from "react";
import { useState } from "react";
import "../index.css"


const Form = () => {
  const[nombre,setNombre]= useState("");
  const[email, setEmail]= useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

 
 const validarNombre =(nombre) => {
    return nombre.length > 5;
    };
   
  
  const validarEmail = (email) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    };
  
  function handleSubmit (e){
    e.preventDefault();

    //valida
    const nombreValido = validarNombre(nombre)
    const emailValido = validarEmail(email)



    if (nombreValido && emailValido){
      //limpiando
      setNombre("");
      setEmail("");
      alert ("Gracias  " + nombre +", te contactaremos cuanto antes vía mail")
      // Limpiar el mensaje de error si había uno previamente
      setError(null);
      // Limpiar el mensaje de éxito si había uno previamente
      setSuccessMessage("");
    }
    else{
      alert ("Por favor verifique su información nuevamente")
      // Limpiar el mensaje de éxito si había uno previamente
      setSuccessMessage("");

    }
  //Aqui deberan implementar el form completo con sus validaciones
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
  };
export default Form;