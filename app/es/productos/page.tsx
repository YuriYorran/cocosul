import HeaderES from "@/components/header-es"
import WhatsAppButtonES from "@/components/whatsapp-button-es"
import "../../produtos/produtos.css"

export default function ProductosPageES() {
  return (
    <>
      <HeaderES />
      <main className="produtos-page">
        <div className="container produtos-container">
          <div className="produtos-header">
            <h1>Nuestros Productos</h1>
            <p>Conoce nuestra línea completa de productos derivados del coco</p>
          </div>
          
          <div className="produtos-categories">
            <div className="category">
              <h2>Coco Rallado Húmedo y Endulzado</h2>
              <div className="produtos-grid">
                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoAdocadoFlocos.png" alt="Coco Rallado en Copos Húmedo y Endulzado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado en Copos Húmedo y Endulzado</h3>
                    <p>Embalajes: 5kg, 1kg, 100g y 50g</p>
                    <a href="/es/productos/coco-rallado-copos-humedo" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoAdocadoMedio.png" alt="Coco Rallado Medio Húmedo y Endulzado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado Medio Húmedo y Endulzado</h3>
                    <p>Embalajes: 5kg y 1kg</p>
                    <a href="/es/productos/coco-rallado-medio-humedo" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoAdocadoFino.png" alt="Coco Rallado Fino Húmedo y Endulzado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado Fino Húmedo y Endulzado</h3>
                    <p>Embalajes: 5kg y 1kg</p>
                    <a href="/es/productos/coco-rallado-fino-humedo" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoRaladoAdoçadoUmido.png" alt="Coco Rallado Endulzado Húmedo" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado Endulzado Húmedo</h3>
                    <p>Embalajes: 50g y 100g</p>
                    <a href="/es/productos/coco-rallado-endulzado-humedo" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="category">
              <h2>Coco Rallado Deshidratado</h2>
              <div className="produtos-grid">
                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoDesidratadoFlocos.png" alt="Coco Rallado en Copos Deshidratado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado en Copos Deshidratado</h3>
                    <p>Embalajes: 1kg, 100g y 50g</p>
                    <a href="/es/productos/coco-rallado-copos-deshidratado" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoDesidratadoMedio.png" alt="Coco Rallado Medio Deshidratado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado Medio Deshidratado</h3>
                    <p>Embalajes: 1kg</p>
                    <a href="/es/productos/coco-rallado-medio-deshidratado" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoDesidratadoFino.png" alt="Coco Rallado Fino Deshidratado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado Fino Deshidratado</h3>
                    <p>Embalajes: 1kg</p>
                    <a href="/es/productos/coco-rallado-fino-deshidratado" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="/cocoDesidratado.png" alt="Coco Rallado Deshidratado" />
                  </div>
                  <div className="produto-info">
                    <h3>Coco Rallado Deshidratado</h3>
                    <p>Embalajes: 50g y 100g</p>
                    <a href="/es/productos/coco-rallado-deshidratado" className="btn btn-primary">
                      Saber Más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButtonES />
    </>
  )
}
