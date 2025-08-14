"use client"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"
import "./styles.css"

export default function CocoRaladoFinoDesidratadoPage() {
  return (
    <>
      <main className="product-page">
        <Header />
        
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Coco Ralado Fino Desidratado</h1>
            <p>Textura Fina com Longa Duração</p>
          </div>
        </section>

        {/* Product Content */}
        <section className="product-content">
          <div className="container">
            {/* Product Images - Centered */}
            <div className="product-images-centered">
              <div className="image-grid">
                <Image
                  src="/cocoDesidratadoFino.png"
                  alt="Coco Ralado Fino Desidratado"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="product-buttons">
                <a 
                  href="https://wa.me/554333431357?text=Olá! Gostaria de comprar Coco Ralado Fino Desidratado da CocoSul." 
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
                        src="/WhatsApp Image 2025-08-14 at 17.36.42.jpeg"
                        alt="Aplicação em Indústria Alimentícia"
                        width={600}
                        height={450}
                        className="rounded-t-lg"
                      />
                    </div>
                    <h4>Indústria Alimentícia</h4>
                    <p>Ideal para produtos industrializados</p>
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
                O Coco Ralado Fino Desidratado da CocoSul oferece uma textura refinada 
                com todas as vantagens do processo de desidratação. Com granulometria fina, 
                é ideal para aplicações que requerem uniformidade e delicadeza, mantendo 
                a longa duração característica dos produtos desidratados.
              </p>

              <div className="benefits">
                <h3>Benefícios</h3>
                <ul>
                  <li>Textura fina consistente</li>
                  <li>Longa duração</li>
                  <li>Pureza natural</li>
                  <li>Granulometria refinada</li>
                  <li>Processo controlado de qualidade</li>
                </ul>
              </div>

              <div className="specifications">
                <h3>Especificações</h3>
                <ul>
                  <li><strong>Embalagens:</strong> 1kg</li>
                  <li><strong>Ingredientes:</strong> Coco ralado desidratado e conservante INS 223</li>
                  <li><strong>Característica:</strong> NÃO CONTÉM GLÚTEN</li>
                  <li><strong>Aplicações:</strong> Confeitaria, panificação, doces e sobremesas</li>
                </ul>
                
                <div className="nutritional-info">
                  <h4>Informação Nutricional</h4>
                  <Image
                    src="/informacaoNutricionalRaladoFinoDesidratado.jpeg"
                    alt="Informação Nutricional - Coco Ralado Fino Desidratado"
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