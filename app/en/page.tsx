import HeaderEN from "@/components/header-en"
import HeroSectionEN from "@/components/hero-section-en"
import WelcomeSectionEN from "@/components/welcome-section-en"
import AboutSectionEN from "@/components/about-section-en"
import MissionSectionEN from "@/components/mission-section-en"
import ProductsSectionEN from "@/components/products-section-en"
import ContactSectionEN from "@/components/contact-section-en"
import FooterEN from "@/components/footer-en"
import WhatsAppButtonEN from "@/components/whatsapp-button-en"

export default function HomeEN() {
  return (
    <main>
      <HeaderEN />
      <HeroSectionEN />
      <WelcomeSectionEN />
      {/*<AboutSectionEN />*/}
      <ProductsSectionEN />
      <MissionSectionEN />
      {/*<ProductsSectionEN />*/}
      {/*<ContactSectionEN />*/}
      <FooterEN />
      <WhatsAppButtonEN />
    </main>
  )
}
