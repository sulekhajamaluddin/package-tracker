//Node Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PackagesProvider } from "./state/PackagesContext";
import { TranslationProvider } from "./state/TranslationContext";

//Project Files
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TranslationProvider>
        <PackagesProvider>
          <App />
        </PackagesProvider>
      </TranslationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
