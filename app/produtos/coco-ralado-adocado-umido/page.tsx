"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import "./styles.css"

export default function CocoRaladoAdocadoUmido() {
  return (
    <>
      <main className="product-page">
        <Header />
        
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Coco Ralado Adoçado Úmido</h1>
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
                  src="/cocoRaladoAdoçadoUmido.png"
                  alt="Coco Ralado Adoçado Úmido"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="product-buttons">
                <a 
                  href="https://wa.me/554333431357?text=Olá! Gostaria de comprar Coco Ralado Adoçado Úmido da CocoSul." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
            
            {/* Product Info - Below */}
            <div className="product-info-below">
              <h2>Sobre o Produto</h2>
              <p className="product-description">
                O Coco Ralado Úmido e Adoçado da CocoSul é perfeito para quem busca sabor e praticidade. Com textura macia e sabor adocicado na medida certa, é ideal para receitas que precisam de suculência e intensidade, como bolos, tortas e sobremesas especiais.
              </p>

              <div className="benefits">
                <h3>Benefícios</h3>
                <ul>
                  <li>Sabor doce na medida certa</li>
                  <li>Mantém a umidade ideal</li>
                  <li>Pronto para uso imediato</li>
                  <li>Textura macia e suculenta</li>
                </ul>
              </div>

              <div className="specifications">
                <h3>Especificações</h3>
                <ul>
                  <li><strong>Embalagens:</strong> 50g e 100g</li>
                  <li><strong>Ingredientes:</strong> Coco ralado desidratado, açúcar, sal e conservante INS 223</li>
                  <li><strong>Característica:</strong> NÃO CONTÉM GLÚTEN</li>
                  <li><strong>Aplicações:</strong> Confeitaria, panificação, bolos, tortas e sobremesas especiais</li>
                  <li><strong>Textura:</strong> Macia e úmida, ideal para receitas que precisam de suculência</li>
                </ul>
              </div>

              <div className="nutritional-info">
                <h4>Informação Nutricional</h4>
                <Image
                  src="/Captura de tela 2025-08-14 163524.png"
                  alt="Informação Nutricional - Coco Ralado Adoçado Úmido"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  )
}
