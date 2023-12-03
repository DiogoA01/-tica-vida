import React from "react";
import "./style.css";

export default function SecaoSobre() {
  return (
    <section id="sobre" className="secao-sobre">
      <div className="limitar-secao">
        <h2>QUEM SOMOS NÓS</h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>

        <div className="container-sobre">
          <img src="assets/loja.png" alt="imagem de uma loja" />

          <div className="card-sobre">
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className="card-sobre">
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>

          <img
            src="assets/atendimento.png"
            alt="imagem de uma médica antendendo um paciênte"
          />
        </div>
      </div>
    </section>
  );
}
