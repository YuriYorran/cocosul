import HeaderEN from "@/components/header-en"
import WhatsAppButtonEN from "@/components/whatsapp-button-en"
import "../../produtos/produtos.css"

export default function ProductsPageEN() {
  return (
    <>
      <HeaderEN />
      <main className="produtos-page">
        <div className="container produtos-container">
          <div className="produtos-header">
            <h1>Our Products</h1>
            <p>Discover our complete line of coconut-derived products</p>
          </div>
          
          <div className="produtos-categories">
            <div className="category">
              <h2>Moist and Sweetened Grated Coconut</h2>
              <div className="produtos-grid">
                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoAdocadoFlocos.png" alt="Moist and Sweetened Flaked Grated Coconut" />
                  </div>
                  <div className="produto-info">
                    <h3>Moist and Sweetened Flaked Grated Coconut</h3>
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
                    <h3>Moist and Sweetened Medium Grated Coconut</h3>
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
                    <h3>Moist and Sweetened Fine Grated Coconut</h3>
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
                    <h3>Moist Sweetened Grated Coconut</h3>
                    <p>Packaging: 50g and 100g</p>
                    <a href="/en/products/moist-sweetened-coconut" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="category">
              <h2>Desiccated Grated Coconut</h2>
              <div className="produtos-grid">
                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoDesidratadoFlocos.png" alt="Desiccated Flaked Grated Coconut" />
                  </div>
                  <div className="produto-info">
                    <h3>Desiccated Flaked Grated Coconut</h3>
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
                    <h3>Desiccated Medium Grated Coconut</h3>
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
                    <h3>Desiccated Fine Grated Coconut</h3>
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
                    <h3>Desiccated Grated Coconut</h3>
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
      </main>
      <WhatsAppButtonEN />
    </>
  )
}
