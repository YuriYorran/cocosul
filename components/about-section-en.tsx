import "./about-section.css"

export default function AboutSectionEN() {
  const milestones = [
    { year: 2012, description: "CocoSul foundation in Londrina - PR" },
    { year: 2020, description: "Factory expansion" },
    { year: 2023, description: "Complete modernization of the facility" },
    { year: 2025, description: "Acquisition of our own farm to guarantee cultivation and exclusive production with differentiated quality" },
  ]

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">Meet CocoSul – Quality in Coconut-Derived Products since 2012</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/WhatsApp Image 2025-08-14 at 17.36.42.jpeg" alt="CocoSul Factory" />
          </div>

          <div className="about-text">
            <p>
              CocoSul was born from the dream of offering the Brazilian market coconut-derived products with superior
              quality and fair prices. Located in Londrina, Paraná, our company stands out for excellence in
              processes and commitment to customer satisfaction.
            </p>
            <p>
              With a highly qualified team and state-of-the-art technology, we guarantee that every product that leaves our
              factory meets the most rigorous quality and food safety standards.
            </p>
            <p>
              We also strive to offer fair prices, as our goal is to
              provide the best cost-benefit ratio, making coconut-derived products
              accessible to everyone, without compromising the quality that
              sets us apart.
            </p>
          </div>
        </div>

        <div className="timeline">
          <h3>Our History</h3>
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
            <h4>Modern own factory</h4>
            <p>State-of-the-art facilities to ensure the best quality in all processes.</p>
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
            <h4>Rigorous quality control</h4>
            <p>Every batch is tested and certified before leaving the factory.</p>
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
            <h4>Efficient national logistics</h4>
            <p>Delivery throughout Brazil with speed and security.</p>
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
            <h4>Versatility for various sectors</h4>
            <p>Solutions for confectionery, bakery and food industries.</p>
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
            <h4>Sustainable raw material</h4>
            <p>Commitment to sustainable practices and environmental responsibility.</p>
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
            <h4>Direct technical support</h4>
            <p>Specialized support to meet the specific needs of each customer.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
