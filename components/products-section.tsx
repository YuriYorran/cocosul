import "./products-section.css"

export default function ProductsSection() {
  return (
    <section id="products" className="products-section section">
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>

        <div className="products-categories">
          <div className="category">
            <h3>Coco Ralado Úmido e Adoçado</h3>
            <div className="products-grid">
              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoAdocadoFlocos.png" alt="Coco Ralado Floco Úmido e Adoçado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Floco Úmido e Adoçado</h4>
                  <p>Embalagens: 5kg, 1kg, 100g e 50g</p>
                  <a href="/produtos/coco-ralado-flocos-umido" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoAdocadoMedio.png" alt="Coco Ralado Médio Úmido e Adoçado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Médio Úmido e Adoçado</h4>
                  <p>Embalagens: 5kg e 1kg</p>
                  <a href="/produtos/coco-ralado-medio-umido" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoAdocadoFino.png" alt="Coco Ralado Fino Úmido e Adoçado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Fino Úmido e Adoçado</h4>
                  <p>Embalagens: 5kg e 1kg</p>
                  <a href="/produtos/coco-ralado-fino-umido" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoRaladoAdoçadoUmido.png" alt="Coco Ralado Adoçado Úmido" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Adoçado Úmido</h4>
                  <p>Embalagens: 50g e 100g</p>
                  <a href="/produtos/coco-ralado-adocado-umido" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="category">
            <h3>Coco Ralado Desidratado</h3>
            <div className="products-grid">
              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratadoFlocos.png" alt="Coco Ralado Flocos Desidratado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Flocos Desidratado</h4>
                  <p>Embalagens: 1kg, 100g e 50g</p>
                  <a href="/produtos/coco-ralado-flocos-desidratado" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratadoMedio.png" alt="Coco Ralado Médio Desidratado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Médio Desidratado</h4>
                  <p>Embalagens: 1kg</p>
                  <a href="/produtos/coco-ralado-medio-desidratado" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratadoFino.png" alt="Coco Ralado Fino Desidratado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Fino Desidratado</h4>
                  <p>Embalagens: 1kg</p>
                  <a href="/produtos/coco-ralado-fino-desidratado" className="btn btn-primary">
                    Saiba Mais
                  </a>
                </div>
              </div>

              <div className="produto-card">
                <div className="produto-imagem">
                  <img src="/cocoDesidratado.png" alt="Coco Ralado Desidratado" />
                </div>
                <div className="produto-info">
                  <h4>Coco Ralado Desidratado</h4>
                  <p>Embalagens: 50g e 100g</p>
                  <a href="/produtos/coco-ralado-desidratado" className="btn btn-primary">
                    Saiba Mais
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
