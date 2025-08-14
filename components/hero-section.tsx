"use client"
import { useState } from "react"
import "./hero-section.css"

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleVideoClick = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <>
      <section id="home" className="hero-section" onClick={handleVideoClick}>
        <div className="video-background">
          <video autoPlay loop muted playsInline preload="auto">
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container hero-content" onClick={handleVideoClick}>
          <h1>Muito mais que sabor. É qualidade que une sabor e tradição.</h1>
          <p>Ingredientes derivados do coco com padrão premium para indústrias e distribuidoras de todo o país.</p>
          <div className="hero-buttons">
            <a 
              href="/produtos" 
              className="btn btn-primary"
              onClick={(e) => e.stopPropagation()}
            >
              Conheça nossos produtos
            </a>
            <a 
              href="/contato" 
              className="btn btn-white"
              onClick={(e) => e.stopPropagation()}
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </section>

      {/* Modal de Vídeo Simples */}
      {isVideoModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '800px',
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <video
              controls
              autoPlay
              style={{
                width: '100%',
                height: 'auto'
              }}
              src="/video.mp4"
            >
              <source src="/video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
