//Node modules
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function PackagesProvider({ children }) {
  const [packages, setPackages] = useState([]);

  const values = { packages, setPackages };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function usePackages() {
  const context = useContext(Context);
  if (!context)
    throw new Error("usePackages must be used within a <PackagesProvider>");

  return context;
}
