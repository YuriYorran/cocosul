"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import "./styles.css"

export default function CocoRaladoMedioUmidoPage() {
  return (
    <>
      <main className="product-page">
        <Header />
        
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Coco Ralado Médio Úmido e Adoçado</h1>
            <p>Textura Média Perfeita para Diversas Aplicações</p>
          </div>
        </section>

        {/* Product Content */}
        <section className="product-content">
          <div className="container">
            {/* Product Images - Centered */}
            <div className="product-images-centered">
              <div className="image-grid">
                <Image
                  src="/cocoAdocadoMedio.png"
                  alt="Coco Ralado Médio Úmido e Adoçado"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="product-buttons">
                <a 
                  href="https://wa.me/554333431357?text=Olá! Gostaria de comprar Coco Ralado Médio Úmido e Adoçado da CocoSul." 
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
                O Coco Ralado Médio Úmido e Adoçado da CocoSul oferece uma textura intermediária 
                que é ideal para uma ampla variedade de aplicações culinárias. Com granulometria 
                média, proporciona o equilíbrio perfeito entre sabor e textura.
              </p>

              <div className="benefits">
                <h3>Benefícios</h3>
                <ul>
                  <li>Textura média consistente</li>
                  <li>Sabor naturalmente adocicado</li>
                  <li>Granulometria intermediária</li>
                  <li>Alta qualidade e pureza</li>
                  <li>Processo controlado de qualidade</li>
                </ul>
              </div>

              <div className="specifications">
                <h3>Especificações</h3>
                <ul>
                  <li><strong>Embalagens:</strong> 5kg e 1kg</li>
                  <li><strong>Ingredientes:</strong> Coco ralado desidratado, açúcar, sal e conservante INS 223</li>
                  <li><strong>Característica:</strong> NÃO CONTÉM GLÚTEN</li>
                  <li><strong>Aplicações:</strong> Confeitaria, panificação, doces e sobremesas</li>
                </ul>
                
                <div className="nutritional-info">
                  <h4>Informação Nutricional</h4>
                  <Image
                    src="/informacaoNutricionalMedioUmido.jpeg"
                    alt="Informação Nutricional - Coco Ralado Médio Úmido e Adoçado"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  )
} 