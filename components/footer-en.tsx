import "./footer.css"

export default function FooterEN() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo-cocosul.png" alt="CocoSul Logo" />
            <p>Quality in coconut-derived products since 2012.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/en">Home</a>
              </li>
              <li>
                <a href="/en/about-us">About Us</a>
              </li>
              <li>
                <a href="/en#mission">Mission and Values</a>
              </li>
              <li>
                <a href="/en/products">Products</a>
              </li>
              <li>
                <a href="/en/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Londrina – PR, Brazil</p>
            <p>atendimento@cocosul.ind.br</p>
            <p>(43) 3343-1357</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CocoSul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
