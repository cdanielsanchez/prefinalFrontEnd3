import React from "react";
import { Link } from 'react-router-dom';



const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];

    // Verificar si el dentista ya está en favoritos
    const isAlreadyFav = favs.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      // Si no está en favoritos, agregarlo
      favs.push({ id, name, username });
      // Actualizar los datos de favoritos en el localStorage
      localStorage.setItem("favs", JSON.stringify(favs));
      alert(`Dentista ${name} agregado a favoritos.`);
    } else {
      // Si ya está en favoritos, mostrar un mensaje
      alert(`Dentista ${name} ya está en favoritos.`);
    }
  }

  return (
    <div className="card">
        <Link to="/dentist/${id}">
          <h2>{name}</h2>
          <p>{username}</p>
        </Link>
        {/* En cada card deberan mostrar en name - username y el id */}
        

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
