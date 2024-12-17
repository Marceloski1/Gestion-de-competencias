// ButtonVisibilityContext.js
import React, { createContext, useState, useContext } from 'react';

const ButtonVisibilityContext = createContext();

export const useButtonVisibility = () => {
  
  return useContext(ButtonVisibilityContext);
};

export const ButtonVisibilityProvider = ({ children }) => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(prev => !prev);
  };

  return (
    <ButtonVisibilityContext.Provider value={{ showButtons, toggleButtons }}>
      {children}
    </ButtonVisibilityContext.Provider>
  );
};
