import React, {useContext}from 'react'
import {Link } from 'react-router-dom'
//import { useContext } from "react"; // Importa useContext
import {ContextGlobal} from './utils/global.context'
/* import { ContextProvider } from './utils/global.context' */
import "../index.css"
/* importando FontAwesome. */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";




/* console.log(ContextGlobal); */




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { contextValue } = useContext(ContextGlobal); // Accede al contexto
  const { state, cambiarTheme } = contextValue; // Obtiene el estado y la función para cambiar el tema

  const navbarStyle = {
    backgroundColor: state.theme === 'dark' ? 'black' : 'white',
    color: state.theme === 'dark' ? 'white' : 'black',
    solluna: state.theme === 'dark' ? 'white' : 'black',
    /* color: state.a === 'dark' ? 'white' : 'black', */
    /* color: state.theme === 'dark' ? 'white' : 'black', */
  };


  return (
     <div className='navbar-container'>
     <nav className={state.theme}   style ={navbarStyle}>
         {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <p><Link to="/home">Home</Link></p>
        <p><Link to="/contacto">Contacto</Link></p>
        <p><Link to="/favs" >Favoritos</Link></p>
   
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <button className={state.theme}  onClick={cambiarTheme} style ={navbarStyle} id='miboton'>

      {state.theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
      
      </button>
      {/* <p>Tema actual: {state.theme}</p>  */}
    </nav>
    </div>
  
  )

}

export default Navbar