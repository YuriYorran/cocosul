"use client"
import { useState } from "react"
import "./hero-section.css"

export default function HeroSectionEN() {
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
            Your browser does not support HTML5 videos.
          </video>
        </div>
        <div className="overlay"></div>
        <div className="container hero-content" onClick={handleVideoClick}>
          <h1>Much more than flavor. It's quality that unites taste and tradition.</h1>
          <p>Premium coconut-derived ingredients for industries and distributors across the country.</p>
          <div className="hero-buttons">
            <a 
              href="/en/products" 
              className="btn btn-primary"
              onClick={(e) => e.stopPropagation()}
            >
              Discover our products
            </a>
            <a 
              href="/en/contact" 
              className="btn btn-white"
              onClick={(e) => e.stopPropagation()}
            >
              Talk to our team
            </a>
          </div>
        </div>
      </section>

      {/* Simple Video Modal */}
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
              Your browser does not support HTML5 videos.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
