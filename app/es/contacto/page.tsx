import HeaderES from "@/components/header-es"
import ContactSectionES from "@/components/contact-section-es"
import WhatsAppButtonES from "@/components/whatsapp-button-es"
import "../../contato/contato.css"

export default function ContactoPageES() {
  return (
    <main>
      <HeaderES />
      <div className="contact-page">
        <div className="contact-page-header">
          <div className="container">
            <h1>CONTÁCTANOS</h1>
            <div className="header-image">
              <img src="/coqueiros.png" alt="Cocoteros" />
            </div>
          </div>
        </div>
        <div className="container">
          <ContactSectionES />
        </div>
      </div>
      <WhatsAppButtonES />
    </main>
  )
}
