import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { contextValue } = useContext(ContextGlobal);
  const { state } = contextValue;



  return (

    <div className={state.theme} id="fav-container">
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;