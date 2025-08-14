"use client"
import HeaderES from "@/components/header-es"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButtonES from "@/components/whatsapp-button-es"
import "../../../produtos/coco-ralado-adocado-umido/styles.css"

export default function CocoRalladoEndulzadoHumedo() {
  return (
    <>
      <main className="product-page">
        <HeaderES />
        
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Coco Rallado Endulzado Húmedo</h1>
            <p>Calidad y Sabor con Textura Ideal</p>
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
                  alt="Coco Rallado Endulzado Húmedo"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="product-buttons">
                <a 
                  href="https://wa.me/554333431357?text=¡Hola! Me gustaría comprar Coco Rallado Endulzado Húmedo de CocoSul." 
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
              <h2>Sobre el Producto</h2>
              <p className="product-description">
                El Coco Rallado Húmedo y Endulzado de CocoSul es perfecto para quienes buscan sabor y practicidad. Con textura suave y sabor endulzado en la medida exacta, es ideal para recetas que necesitan suculencia e intensidad, como pasteles, tartas y postres especiales.
              </p>

              <div className="benefits">
                <h3>Beneficios</h3>
                <ul>
                  <li>Sabor dulce en la medida exacta</li>
                  <li>Mantiene la humedad ideal</li>
                  <li>Listo para uso inmediato</li>
                  <li>Textura suave y suculenta</li>
                </ul>
              </div>

              <div className="specifications">
                <h3>Especificaciones</h3>
                <ul>
                  <li><strong>Embalajes:</strong> 50g y 100g</li>
                  <li><strong>Ingredientes:</strong> Coco rallado deshidratado, azúcar, sal y conservante INS 223</li>
                  <li><strong>Característica:</strong> NO CONTIENE GLUTEN</li>
                  <li><strong>Aplicaciones:</strong> Confitería, panadería, pasteles, tartas y postres especiales</li>
                  <li><strong>Textura:</strong> Suave y húmeda, ideal para recetas que necesitan suculencia</li>
                </ul>
              </div>

              <div className="nutritional-info">
                <h4>Información Nutricional</h4>
                <Image
                  src="/Captura de tela 2025-08-14 163524.png"
                  alt="Información Nutricional - Coco Rallado Endulzado Húmedo"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButtonES />
    </>
  )
}
