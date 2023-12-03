import React from "react";
import "./App.css";

import Topo from "./components/Topo";
import Conteudo from "./components/Conteudo/conteudo";
import Rodape from "./components/Rodape";

const App = () => {
  return (
    <div className="container">
      <div className="limitar-secao">
        <Topo />
        <Conteudo />
        <Rodape />
      </div>
    </div>
  );
};
export default App;
