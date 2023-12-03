import "./style.css";

export default function SecaoProduto() {
  return (
    <section id="produto" className="secao-produto">
      <div className="limitar-secao">
        <h2>NOSSOS PRODUTOS</h2>
        <p>
          Trabalhamos com óculo de grau, óculos de sol, lentes transition nos
          modelos masculino, femino e infatil
        </p>
        <div className="container-card">
          <div className="card">
            <h3>Òculos de grau</h3>
            <img
              src="assets/oculos01.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 500,00</p>
          </div>

          <div className="card">
            <h3>Òculos de transition</h3>
            <img
              src="assets/oculos02.png"
              title="Óculos de transition"
              alt="4 óculos de transition de cores diferentes"
            />
            <p>R$ 500,00</p>
          </div>

          <div className="card">
            <h3>Òculos de sol</h3>
            <img
              src="assets/oculos03.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 700,00</p>
          </div>

          <div className="card">
            <h3>Óculos infantil</h3>
            <img
              src="assets/oculos04.png"
              title="Óculos de grau"
              alt="4 óculos de grau de cores diferentes"
            />
            <p>R$ 500,00</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}
