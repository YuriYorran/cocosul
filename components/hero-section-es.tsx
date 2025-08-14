"use client"
import { useState } from "react"
import "./hero-section.css"

export default function HeroSectionES() {
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
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container hero-content" onClick={handleVideoClick}>
          <h1>Mucho más que sabor. Es calidad que une sabor y tradición.</h1>
          <p>Ingredientes derivados del coco con estándar premium para industrias y distribuidoras de todo el país.</p>
          <div className="hero-buttons">
            <a 
              href="/es/productos" 
              className="btn btn-primary"
              onClick={(e) => e.stopPropagation()}
            >
              Conoce nuestros productos
            </a>
            <a 
              href="/es/contacto" 
              className="btn btn-white"
              onClick={(e) => e.stopPropagation()}
            >
              Habla con nuestro equipo
            </a>
          </div>
        </div>
      </section>

      {/* Modal de Video Simple */}
      {isVideoModalOpen && (
        <div
          className="video-modal-overlay"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ×
            </button>
            <video
              controls
              autoPlay
              className="video-modal-player"
            >
              <source src="/video.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
