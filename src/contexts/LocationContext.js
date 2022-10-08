import { createContext, useState } from "react";

export const LocationContext = createContext({ location: [], setLocation: () => {} })

export const LocationProvider = ({ children}) => {
  const [location, setLocation] = useState ([]);
  const value = { location, setLocation };
  
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
} 