import "./footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo-cocosul.png" alt="CocoSul Logo" />
            <p>Qualidade em produtos derivados do coco desde 2012.</p>
          </div>

          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/quem-somos">Quem Somos</a>
              </li>
              <li>
                <a href="/#mission">Missão e Valores</a>
              </li>
              <li>
                <a href="/produtos">Produtos</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contato</h3>
            <p>Londrina – PR, Brasil</p>
            <p>atendimento@cocosul.ind.br</p>
            <p>(43) 3343-1357</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CocoSul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
