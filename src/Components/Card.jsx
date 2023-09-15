import React, { useContext, useReducer } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";



const Card = ({ name, username, id }) => {
  const { contextValue } = useContext(ContextGlobal);
  const { state, cambiarTheme, dispatch } = contextValue;

  const addFav = () => {
    // Accede al estado actual de los favoritos
    const favs = state.favs || [];

    // Verifica si el dentista ya está en favoritos
    const isAlreadyFav = favs.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      // Si no está en favoritos, agrega el dentista a favoritos
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
      alert(`Dentista ${name} agregado a favoritos.`);
    } else {
      // Si ya está en favoritos, muestra un mensaje
      alert(`Dentista ${name} ya está en favoritos.`);
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <div className="card-image">
          <img src="./images/doctor.jpg" alt="Dentista" />
        </div>

        <div className="card-data">
          <h3>{name}</h3>
          <p>{username}</p>
        </div>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;