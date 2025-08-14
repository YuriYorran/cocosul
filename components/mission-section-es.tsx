import "./mission-section.css"

export default function MissionSectionES() {
  return (
    <section id="mission" className="mission-section section">
      <div className="container">
        <h2 className="section-title">Misión, Visión y Valores</h2>

        <div className="mission-cards">
          <div className="mission-card">
            <h3>Misión</h3>
            <p>Ofrecer productos derivados del coco con la más alta calidad, con sabor, frescura y seguridad alimentaria, atendiendo las necesidades de nuestros clientes con excelencia, agilidad y compromiso con la sostenibilidad y el desarrollo de la cadena productiva del coco.</p>
          </div>

          <div className="mission-card">
            <h3>Visión</h3>
            <p>Ser referencia nacional en la producción y comercialización de coco rallado y derivados del coco, reconocida por la calidad de los productos, ética en los negocios y respeto a los clientes, colaboradores y al medio ambiente.</p>
          </div>

          <div className="mission-card">
            <h3>Valores</h3>
            <p>
              Nuestros valores están presentes en cada etapa de nuestro trabajo. Creemos que la calidad es un compromiso que comienza en la selección de la materia prima y se extiende hasta el momento que el producto llega al cliente. Actuamos con integridad, respeto a las personas y al medio ambiente, promoviendo relaciones éticas y sostenibles. Buscamos innovación constante, priorizando la seguridad alimentaria y la satisfacción del cliente como pilares de nuestro compromiso con el mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
