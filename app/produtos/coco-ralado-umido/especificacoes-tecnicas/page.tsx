"use client"
import Header from "@/components/header"
import "./styles.css"

export default function EspecificacoesTecnicas() {
  return (
    <main className="specs-page">
      <Header />
      
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <h1>Especificações Técnicas</h1>
          <p>Coco Ralado Úmido e Adoçado</p>
        </div>
      </section>

      {/* Specifications Content */}
      <section className="specs-content">
        <div className="container">
          <div className="specs-grid">
            <div className="specs-info">
              <h2>Informação Nutricional</h2>
              <p>Porção 12g (aprox. 2 colheres de chá)</p>
              <div className="nutrition-table">
                <div className="nutrition-header">
                  <div className="nutrition-cell">Nutrientes</div>
                  <div className="nutrition-cell">Porção de 12g</div>
                  <div className="nutrition-cell">%VD(*)</div>
                  <div className="nutrition-cell">Nutrientes</div>
                  <div className="nutrition-cell">Porção de 12g</div>
                  <div className="nutrition-cell">%VD(*)</div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-cell">Valor Energético</div>
                  <div className="nutrition-cell">63,2 kcal = 264kj</div>
                  <div className="nutrition-cell">3</div>
                  <div className="nutrition-cell">Gordura Trans</div>
                  <div className="nutrition-cell">0g</div>
                  <div className="nutrition-cell">**</div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-cell">Carboidratos</div>
                  <div className="nutrition-cell">6g</div>
                  <div className="nutrition-cell">2</div>
                  <div className="nutrition-cell">Colesterol</div>
                  <div className="nutrition-cell">**</div>
                  <div className="nutrition-cell">**</div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-cell">Proteínas</div>
                  <div className="nutrition-cell">0,6g</div>
                  <div className="nutrition-cell">1</div>
                  <div className="nutrition-cell">Fibras</div>
                  <div className="nutrition-cell">0,1g</div>
                  <div className="nutrition-cell">0</div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-cell">Gorduras totais</div>
                  <div className="nutrition-cell">4g</div>
                  <div className="nutrition-cell">7</div>
                  <div className="nutrition-cell">Ferro</div>
                  <div className="nutrition-cell">0,2mg</div>
                  <div className="nutrition-cell">1</div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-cell">Gorduras saturadas</div>
                  <div className="nutrition-cell">3,6g</div>
                  <div className="nutrition-cell">17</div>
                  <div className="nutrition-cell">Sódio</div>
                  <div className="nutrition-cell">6,3mg</div>
                  <div className="nutrition-cell">0</div>
                </div>
              </div>
              <p className="nutrition-note">
                (*) % Valores Diários com base em uma dieta de 2.000kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. (**) Valor diário não estabelecido.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 