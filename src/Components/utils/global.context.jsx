import React, { createContext, useReducer, useMemo, useEffect } from "react";

export const initialState = {
  theme: "light",
  data: [],
  favs: [], // Agrega un arreglo para los dentistas destacados
};

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "DATA":
      return { ...state, data: action.payload };
      case "ADD_FAV":
        // Agrega un dentista a favoritos
        const updatedFavs = [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(updatedFavs)); // Guarda en localStorage
        return { ...state, favs: updatedFavs };
  
      case "REMOVE_FAV":
        // Remueve un dentista de favoritos
        const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload);
        localStorage.setItem("favs", JSON.stringify(filteredFavs)); // Guarda en localStorage
        return { ...state, favs: filteredFavs };
  
      default:
        return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cambiarTheme = () => {
    dispatch({ type: "THEME" });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "DATA", payload: data });
      })
      .catch((error) => {
        console.error("Error al procesar la información", error);
      });
  }, []);

  const contextValue = useMemo(() => ({ state, cambiarTheme, dispatch }), [
    state,
  ]);

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
