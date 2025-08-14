import HeaderES from "@/components/header-es"
import AboutSectionES from "@/components/about-section-es"
import MissionSectionES from "@/components/mission-section-es"
import ContactSectionES from "@/components/contact-section-es"
import FooterES from "@/components/footer-es"
import WhatsAppButtonES from "@/components/whatsapp-button-es"
import "../../quem-somos/quem-somos.css"

export default function QuienesSomosES() {
  return (
    <main>
      <HeaderES />
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
              <h1>Quiénes Somos</h1>
            </div>
            <div className="header-image">
              <img src="/coqueiros.png" alt="Cocoteros" />
            </div>
          </div>
        </div>
      </div>
      <AboutSectionES />
      <MissionSectionES />
      <ContactSectionES />
      <FooterES />
      <WhatsAppButtonES />
    </main>
  )
}
