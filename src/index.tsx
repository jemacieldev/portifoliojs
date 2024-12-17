// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importando o componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Este deve corresponder ao id no arquivo index.html
);
