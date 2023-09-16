import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";
import Swal from 'sweetalert2';




const Card = ({ name, username, id }) => {
  const { contextValue } = useContext(ContextGlobal);
  const { state,  dispatch } = contextValue;

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: { id, name, username } });
   /*  alert(`Dentista ${name} agregado a favoritos.`); */
    Swal.fire({
      title: 'Bien Hecho!',
      text:`Dentista ${name} agregado a favoritos.`,
      icon:'success',
      showConfirmButton: false,
      timer: 2200
    })
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: id });
    /* alert(`Dentista ${name} eliminado de favoritos.`); */
    Swal.fire({
      title: 'Retirado!',
      text:`Dentista ${name} ya no esta en favoritos.`,
      icon:'error',
      showConfirmButton: false,
      timer: 2200
    })

  };

    // Verifica si el dentista ya está en favoritos
    const isAlreadyFav = state.favs.some((fav) => fav.id === id);

    
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

      {isAlreadyFav ? (
        <button onClick={removeFav} className="favButton">
          Remove fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;