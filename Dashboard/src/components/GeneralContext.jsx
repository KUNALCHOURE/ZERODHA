import React, { createContext, useState } from "react";

// Create the context
const GeneralContext = createContext();

// Create the provider component
const GeneralContextProvider = ({ children }) => {
  // Define the shared state and any other functionality
  const [sharedState, setSharedState] = useState("Initial Value");

  return (
    <GeneralContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralContextProvider, GeneralContext };
