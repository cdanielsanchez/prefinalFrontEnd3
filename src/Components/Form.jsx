import React from "react";
import { useState } from "react";
import "../index.css"


const Form = () => {
  const[nombre,setNombre]= useState("");
  const[email, setEmail]= useState("");

 
 function validarNombre(nombre){
    if (nombre.length>5){
     return true
    }
    else{
      return false;
    }
  }
  function validarEmail (email){
    
    if (email.includes("@") ){
      return true;
    }
    else{
      return false;
    }
  }
  
  function handleSubmit (e){
    e.preventDefault();
    const nombreValido = validarNombre(nombre)
    const emailValido = validarEmail(email)



    if (nombreValido && emailValido){
      setNombre("");
      setEmail("");
      alert ("Gracias  " + nombre +", te contactaremos cuanto antes vía mail")
    }
    else{
      alert ("Por favor verifique su información nuevamente")
    }
  //Aqui deberan implementar el form completo con sus validaciones
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
  };
export default Form;