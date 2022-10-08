import { createContext, useState } from "react";

export const EliminarContext = createContext({ 
    eliminar: [], 
    setEliminar: () => {} 
})

export const EliminarProvider = ({ children}) => {
  const [eliminar, setEliminar] = useState ([]);
  const value = { eliminar, setEliminar };
  
  return <EliminarContext.Provider value={value}>{children}</EliminarContext.Provider>;
} 
