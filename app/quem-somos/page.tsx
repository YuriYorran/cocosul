import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import MissionSection from "@/components/mission-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import "./quem-somos.css"

export default function QuemSomos() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{
        backgroundImage: 'url("/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="header-content">
            <div className="header-text">
              <h1>Quem Somos</h1>
            </div>
            <div className="header-image">
              <img src="/coqueiros.png" alt="Coqueiros" />
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <MissionSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 