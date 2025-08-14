import "./products-section.css"

export default function ProductsSectionEN() {
  return (
    <section id="products" className="products-section section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>

        <div className="products-categories">
          <div className="category">
            <h3>Moist and Sweetened Grated Coconut</h3>
            <div className="products-grid">
              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoAdocadoFlocos.png" alt="Moist and Sweetened Flaked Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Moist and Sweetened Flaked Grated Coconut</h4>
                  <p>Packaging: 5kg, 1kg, 100g and 50g</p>
                  <a href="/en/products/moist-sweetened-flaked-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoAdocadoMedio.png" alt="Moist and Sweetened Medium Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Moist and Sweetened Medium Grated Coconut</h4>
                  <p>Packaging: 5kg and 1kg</p>
                  <a href="/en/products/moist-sweetened-medium-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoAdocadoFino.png" alt="Moist and Sweetened Fine Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Moist and Sweetened Fine Grated Coconut</h4>
                  <p>Packaging: 5kg and 1kg</p>
                  <a href="/en/products/moist-sweetened-fine-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoRaladoAdoçadoUmido.png" alt="Moist Sweetened Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Moist Sweetened Grated Coconut</h4>
                  <p>Packaging: 50g and 100g</p>
                  <a href="/en/products/moist-sweetened-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="category">
            <h3>Desiccated Grated Coconut</h3>
            <div className="products-grid">
              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratadoFlocos.png" alt="Desiccated Flaked Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Desiccated Flaked Grated Coconut</h4>
                  <p>Packaging: 1kg, 100g and 50g</p>
                  <a href="/en/products/desiccated-flaked-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratadoMedio.png" alt="Desiccated Medium Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Desiccated Medium Grated Coconut</h4>
                  <p>Packaging: 1kg</p>
                  <a href="/en/products/desiccated-medium-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratadoFino.png" alt="Desiccated Fine Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Desiccated Fine Grated Coconut</h4>
                  <p>Packaging: 1kg</p>
                  <a href="/en/products/desiccated-fine-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratado.png" alt="Desiccated Grated Coconut" />
                </div>
                <div className="produto-info">
                  <h4>Desiccated Grated Coconut</h4>
                  <p>Packaging: 50g and 100g</p>
                  <a href="/en/products/desiccated-coconut" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
