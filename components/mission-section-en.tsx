import "./mission-section.css"

export default function MissionSectionEN() {
  return (
    <section id="mission" className="mission-section section">
      <div className="container">
        <h2 className="section-title">Mission, Vision and Values</h2>

        <div className="mission-cards">
          <div className="mission-card">
            <h3>Mission</h3>
            <p>To offer coconut-derived products with the highest quality, with flavor, freshness and food safety, meeting our customers' needs with excellence, agility and commitment to sustainability and the development of the coconut production chain.</p>
          </div>

          <div className="mission-card">
            <h3>Vision</h3>
            <p>To be a national reference in the production and commercialization of grated coconut and coconut derivatives, recognized for product quality, business ethics and respect for customers, employees and the environment.</p>
          </div>

          <div className="mission-card">
            <h3>Values</h3>
            <p>
              Our values are present in every stage of our work. We believe that quality is a commitment that begins with the selection of raw materials and extends until the moment the product reaches the customer. We act with integrity, respect for people and the environment, promoting ethical and sustainable relationships. We seek constant innovation, prioritizing food safety and customer satisfaction as pillars of our commitment to the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
