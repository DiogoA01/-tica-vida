import React from "react";
import "./style.css";

import SecaoCapa from "./SecaoCapa";
import SecaoSobre from "./SecaoSobre";
import SecaoProduto from "./SecaoProdutos";
import SecaoContato from "./SecaoContato";

export default function Conteudo() {
  return (
    <main>
      <SecaoCapa />
      <SecaoProduto />
      <SecaoSobre />
      <SecaoContato />
    </main>
  );
}
