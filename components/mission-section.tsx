import "./mission-section.css"

export default function MissionSection() {
  return (
    <section id="mission" className="mission-section section">
      <div className="container">
        <h2 className="section-title">Missão, Visão e Valores</h2>

        <div className="mission-cards">
          <div className="mission-card">
            <h3>Missão</h3>
            <p>Oferecer produtos derivados do coco com a mais alta qualidade, com sabor, frescor e segurança alimentar, atendendo as necessidades dos nossos clientes com excelência, agilidade e compromisso com a sustentabilidade e o desenvolvimento da cadeia produtiva do coco.</p>
          </div>

          <div className="mission-card">
            <h3>Visão</h3>
            <p>Ser referência nacional na produção e comercialização de coco ralado e derivados do coco, reconhecida pela qualidade dos produtos, ética nos negócios e respeito aos clientes, colaboradores e ao meio ambiente.</p>
          </div>

          <div className="mission-card">
            <h3>Valores</h3>
            <p>
            Nossos valores estão presentes em cada etapa de nosso trabalho. Acreditamos que a qualidade é um compromisso que começa na seleção da matéria-prima e se estende até o momento que o produto chega ao cliente. Atuamos com integridade, respeito às pessoas e ao meio ambiente, promovendo relações éticas e sustentáveis. Buscamos inovação constante, priorizando a segurança alimentar e a satisfação do cliente como pilares do nosso compromisso com o mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
