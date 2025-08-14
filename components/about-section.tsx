import Image from "next/image"
import "./about-section.css"

export default function AboutSection() {
  const milestones = [
    { year: 2012, description: "Fundação da CocoSul em Londrina - PR" },
    { year: 2020, description: "Expansão da fábrica" },
    { year: 2023, description: "Modernização completa do parque" },
    { year: 2025, description: "Aquisição de uma fazenda própria para garantir o cultivo e a produção exclusiva com qualidade diferenciada" },
  ]
//////////////////////////////////
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">Conheça a CocoSul – Qualidade em Produtos Derivados do Coco desde 2012</h2>

        <div className="about-content">
          <div className="about-image">
            <Image
              src="/coco_small.png"
              alt="Fábrica da CocoSul"
              width={600}
              height={400}
              className="about-factory-image"
              priority
            />
          </div>

          <div className="about-text">
            <p>
              A CocoSul nasceu do sonho de oferecer ao mercado brasileiro produtos derivados do coco com qualidade
              superior e preço justo. Localizada em Londrina, no Paraná, nossa empresa se destaca pela excelência em
              processos e pelo compromisso com a satisfação dos clientes.
            </p>
            <p>
            Com uma equipe altamente qualificada e tecnologia de ponta, garantimos que cada produto que sai de nossa
              fábrica atenda aos mais rigorosos padrões de qualidade e segurança alimentar.
              
            </p>
            <p>
            Também nos empenhamos em oferecer preços justos, pois nosso objetivo é
proporcionar a melhor relação custo-benefício, tornando os produtos
derivados do coco acessíveis a todos, sem abrir mão da qualidade que nos
diferencia.
            </p>
          </div>
        </div>

        <div className="timeline">
          <h3>Nossa História</h3>
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
            <h4>Fábrica própria moderna</h4>
            <p>Instalações de última geração para garantir a melhor qualidade em todos os processos.</p>
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
            <h4>Controle de qualidade rigoroso</h4>
            <p>Cada lote é testado e certificado antes de sair da fábrica.</p>
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
            <p>Entrega para todo o Brasil com agilidade e segurança.</p>
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
            <h4>Versatilidade para diversos setores</h4>
            <p>Soluções para confeitaria, panificação e indústrias alimentícias.</p>
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
            <h4>Matéria-prima sustentável</h4>
            <p>Compromisso com práticas sustentáveis e responsabilidade ambiental.</p>
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
            <h4>Atendimento técnico direto</h4>
            <p>Suporte especializado para atender às necessidades específicas de cada cliente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
