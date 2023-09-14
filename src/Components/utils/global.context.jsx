import React from "react"; 
import { createContext, useReducer,useMemo,useEffect} from "react";
export const initialState = {theme: "light", data: []}
export const ContextGlobal = createContext(initialState);//creamos el contexto



const reducer =(state, action)=>{
  switch (action.type) {
    case "THEME":
        return{...state, theme:state.theme==="light"?"dark" : "light"};
    case "DATA":
       return{...state,data:action.payload}    

    default:
        return state;
    }
};


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const[state,dispach]= useReducer(reducer,initialState)

  const cambiarTheme=()=>{
  dispach({type:"THEME"});
 }
  
 useEffect (() =>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((data)=>{dispach({type:"DATA",payload:data})})
  .catch ((error) => {
    console.error("error al procesar la informacion",error);
  })

  },[])
 
const contextValue =useMemo(()=>({state,cambiarTheme}),[state]);
 
 
  return (
    <ContextGlobal.Provider value={{contextValue}}>
      {children}
    </ContextGlobal.Provider>
  );
};