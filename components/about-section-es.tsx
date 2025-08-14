import "./about-section.css"

export default function AboutSectionES() {
  const milestones = [
    { year: 2012, description: "Fundación de CocoSul en Londrina - PR" },
    { year: 2020, description: "Expansión de la fábrica" },
    { year: 2023, description: "Modernización completa del parque" },
    { year: 2025, description: "Adquisición de una finca propia para garantizar el cultivo y la producción exclusiva con calidad diferenciada" },
  ]

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">Conoce CocoSul – Calidad en Productos Derivados del Coco desde 2012</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/WhatsApp Image 2025-08-14 at 17.36.42.jpeg" alt="Fábrica de CocoSul" />
          </div>

          <div className="about-text">
            <p>
              CocoSul nació del sueño de ofrecer al mercado brasileño productos derivados del coco con calidad
              superior y precio justo. Ubicada en Londrina, en Paraná, nuestra empresa se destaca por la excelencia en
              procesos y el compromiso con la satisfacción de los clientes.
            </p>
            <p>
              Con un equipo altamente calificado y tecnología de punta, garantizamos que cada producto que sale de nuestra
              fábrica cumpla con los más rigurosos estándares de calidad y seguridad alimentaria.
            </p>
            <p>
              También nos esforzamos en ofrecer precios justos, pues nuestro objetivo es
              proporcionar la mejor relación costo-beneficio, haciendo los productos
              derivados del coco accesibles a todos, sin renunciar a la calidad que nos
              diferencia.
            </p>
          </div>
        </div>

        <div className="timeline">
          <h3>Nuestra Historia</h3>
          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{milestone.year}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="highlights">
          <div className="highlight-item">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h4>Fábrica propia moderna</h4>
            <p>Instalaciones de última generación para garantizar la mejor calidad en todos los procesos.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h4>Control de calidad riguroso</h4>
            <p>Cada lote es probado y certificado antes de salir de la fábrica.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h4>Logística nacional eficiente</h4>
            <p>Entrega para todo Brasil con agilidad y seguridad.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h4>Versatilidad para diversos sectores</h4>
            <p>Soluciones para confitería, panadería e industrias alimentarias.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h4>Materia prima sostenible</h4>
            <p>Compromiso con prácticas sostenibles y responsabilidad ambiental.</p>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h4>Atención técnica directa</h4>
            <p>Soporte especializado para atender las necesidades específicas de cada cliente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
