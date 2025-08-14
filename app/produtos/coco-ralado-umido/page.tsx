"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import "./styles.css"

export default function CocoRaladoUmido() {
  return (
    <>
      <main className="product-page">
        <Header />
        
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Coco Ralado Úmido e Adoçado</h1>
            <p>Qualidade e Sabor com Textura Ideal</p>
          </div>
        </section>

        {/* Product Content */}
        <section className="product-content">
          <div className="container">
            {/* Product Images - Centered */}
            <div className="product-images-centered">
              <div className="image-grid">
                <Image
                  src="/Coco ralado adoçado flocos 100g.png"
                  alt="Coco Ralado Úmido e Adoçado - 100g"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/Coco ralado adoçado flocos 50g.png"
                  alt="Coco Ralado Úmido e Adoçado - 50g"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="product-buttons">
                <a 
                  href="https://wa.me/554333431357?text=Olá! Gostaria de comprar Coco Ralado Úmido e Adoçado da CocoSul." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
              {/* <div className="product-usage">
                <h3>Aplicações</h3>
                <div className="usage-grid">
                  <div className="usage-card">
                    <div className="usage-image">
                      <Image
                        src="/bolo.jpg"
                        alt="Aplicação em Confeitaria"
                        width={600}
                        height={450}
                        className="rounded-t-lg"
                      />
                    </div>
                    <h4>Confeitaria</h4>
                    <p>Ideal para doces, bolos e sobremesas</p>
                  </div>
                  <div className="usage-card">
                    <div className="usage-image">
                      <Image
                        src="/panificacao.jpg"
                        alt="Aplicação em Panificação"
                        width={600}
                        height={450}
                        className="rounded-t-lg"
                      />
                    </div>
                    <h4>Panificação</h4>
                    <p>Perfeito para pães e massas especiais</p>
                  </div>
                </div>
              </div> */}
            </div>
            
            {/* Product Info - Below */}
            <div className="product-info-below">
              <h2>Sobre o Produto</h2>
              <p className="product-description">
                Nosso coco ralado úmido e adoçado é sinônimo de sabor marcante, textura suave e excelente rendimento. 
                Produzido com matéria-prima rigorosamente selecionada, é ideal para o mercado de confeitaria, 
                panificação e produção industrial.
              </p>

              <div className="benefits">
                <h3>Benefícios</h3>
                <ul>
                  <li>Sabor doce na medida certa</li>
                  <li>Mantém a umidade ideal</li>
                  <li>Pronto para uso imediato</li>
                  <li>Embalagens versáteis</li>
                </ul>
              </div>

              <div className="specifications">
                <h3>Especificações</h3>
                <ul>
                  <li><strong>Embalagens:</strong> 100g e 50g</li>
                  <li><strong>Ingredientes:</strong> Coco ralado desidratado, açúcar, sal e conservante INS 223</li>
                  <li><strong>Característica:</strong> NÃO CONTÉM GLÚTEN</li>
                  <li><strong>Aplicações:</strong> Confeitaria, panificação, doces e sobremesas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  )
} 