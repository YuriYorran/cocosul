import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import AboutSection from "@/components/about-section"
import MissionSection from "@/components/mission-section"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WelcomeSection />
      {/*<AboutSection />*/}
      <ProductsSection />
      <MissionSection />
      {/*<ProductsSection />*/}
      {/*<ContactSection />*/}
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
