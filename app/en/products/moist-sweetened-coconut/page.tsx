"use client"
import HeaderEN from "@/components/header-en"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButtonEN from "@/components/whatsapp-button-en"
import "../../../produtos/coco-ralado-adocado-umido/styles.css"

export default function MoistSweetenedCoconut() {
  return (
    <>
      <main className="product-page">
        <HeaderEN />
        
        {/* Banner Section */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Moist Sweetened Grated Coconut</h1>
            <p>Quality and Flavor with Ideal Texture</p>
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
                  alt="Moist Sweetened Grated Coconut"
                  width={4200}
                  height={3000}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="product-buttons">
                <a 
                  href="https://wa.me/554333431357?text=Hello! I would like to buy Moist Sweetened Grated Coconut from CocoSul." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Buy Now
                </a>
              </div>
            </div>
            
            {/* Product Info - Below */}
            <div className="product-info-below">
              <h2>About the Product</h2>
              <p className="product-description">
                CocoSul's Moist and Sweetened Grated Coconut is perfect for those seeking flavor and practicality. With soft texture and just the right sweetened taste, it's ideal for recipes that need succulence and intensity, such as cakes, pies and special desserts.
              </p>

              <div className="benefits">
                <h3>Benefits</h3>
                <ul>
                  <li>Just the right sweet taste</li>
                  <li>Maintains ideal moisture</li>
                  <li>Ready for immediate use</li>
                  <li>Soft and succulent texture</li>
                </ul>
              </div>

              <div className="specifications">
                <h3>Specifications</h3>
                <ul>
                  <li><strong>Packaging:</strong> 50g and 100g</li>
                  <li><strong>Ingredients:</strong> Desiccated grated coconut, sugar, salt and preservative INS 223</li>
                  <li><strong>Characteristic:</strong> GLUTEN FREE</li>
                  <li><strong>Applications:</strong> Confectionery, bakery, cakes, pies and special desserts</li>
                  <li><strong>Texture:</strong> Soft and moist, ideal for recipes that need succulence</li>
                </ul>
              </div>

              <div className="nutritional-info">
                <h4>Nutritional Information</h4>
                <Image
                  src="/Captura de tela 2025-08-14 163524.png"
                  alt="Nutritional Information - Moist Sweetened Grated Coconut"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButtonEN />
    </>
  )
}
