//Node modules
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function TranslationProvider({ children }) {
  const [content, setContent] = useState({});

  const values = { content, setContent };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useTranslation() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useContent must be used within a <ContentProvider>");

  return context;
}
