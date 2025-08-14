import HeaderEN from "@/components/header-en"
import AboutSectionEN from "@/components/about-section-en"
import MissionSectionEN from "@/components/mission-section-en"
import ContactSectionEN from "@/components/contact-section-en"
import FooterEN from "@/components/footer-en"
import WhatsAppButtonEN from "@/components/whatsapp-button-en"
import "../../quem-somos/quem-somos.css"

export default function AboutUsEN() {
  return (
    <main>
      <HeaderEN />
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
              <h1>About Us</h1>
            </div>
            <div className="header-image">
              <img src="/coqueiros.png" alt="Coconut Trees" />
            </div>
          </div>
        </div>
      </div>
      <AboutSectionEN />
      <MissionSectionEN />
      <ContactSectionEN />
      <FooterEN />
      <WhatsAppButtonEN />
    </main>
  )
}
