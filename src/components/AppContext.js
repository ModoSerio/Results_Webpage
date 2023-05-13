import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [myObject, setMyObject] = useState({});

  return (
    <AppContext.Provider value={{ myObject, setMyObject }}>
      {children}
    </AppContext.Provider>
  );
};
