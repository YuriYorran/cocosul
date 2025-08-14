import HeaderEN from "@/components/header-en"
import ContactSectionEN from "@/components/contact-section-en"
import WhatsAppButtonEN from "@/components/whatsapp-button-en"
import "../../contato/contato.css"

export default function ContactPageEN() {
  return (
    <main>
      <HeaderEN />
      <div className="contact-page">
        <div className="contact-page-header">
          <div className="container">
            <h1>CONTACT US</h1>
            <div className="header-image">
              <img src="/coqueiros.png" alt="Coconut Trees" />
            </div>
          </div>
        </div>
        <div className="container">
          <ContactSectionEN />
        </div>
      </div>
      <WhatsAppButtonEN />
    </main>
  )
}
