import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';


const Footer = () => {

  const { contextValue } = useContext(ContextGlobal);
  const { state } = contextValue; // Extrae el estado del contexto

  const footerStyle = {
    backgroundColor: state.theme === 'dark' ? 'black' : 'white',
    color: state.theme === 'dark' ? 'white' : 'black',
  };

  return (
    <footer style={footerStyle}>
        <p>Powered by </p>
        <a href='https://dasantechnology.com/' target="_blank" rel="noopener noreferrer">
          <img src="./images/Logo_dasan.png" alt='Dasan Thech-logo' />
        </a>
        <p className='developer'>Developers: Carolina Benitez y Carlos Daniel Sanchez</p>
    </footer>
  )
}

export default Footer
