import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"
import "./contato.css"

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="contact-page">
        <div className="contact-page-header">
          <div className="container">
            <h1>FALE CONOSCO</h1>
            <div className="header-image">
              <img src="/coqueiros.png" alt="Coqueiros" />
            </div>
          </div>
        </div>
        <div className="container">
          <ContactSection />
        </div>
      </div>
      <WhatsAppButton />
    </main>
  )
} 