import "./footer.css"

export default function FooterES() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo-cocosul.png" alt="CocoSul Logo" />
            <p>Calidad en productos derivados del coco desde 2012.</p>
          </div>

          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li>
                <a href="/es">Inicio</a>
              </li>
              <li>
                <a href="/es/quienes-somos">Quiénes Somos</a>
              </li>
              <li>
                <a href="/es#mission">Misión y Valores</a>
              </li>
              <li>
                <a href="/es/productos">Productos</a>
              </li>
              <li>
                <a href="/es/contacto">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contacto</h3>
            <p>Londrina – PR, Brasil</p>
            <p>atendimento@cocosul.ind.br</p>
            <p>(43) 3343-1357</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CocoSul. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
