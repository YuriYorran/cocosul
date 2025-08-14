import HeaderES from "@/components/header-es"
import HeroSectionES from "@/components/hero-section-es"
import WelcomeSectionES from "@/components/welcome-section-es"
import AboutSectionES from "@/components/about-section-es"
import MissionSectionES from "@/components/mission-section-es"
import ProductsSectionES from "@/components/products-section-es"
import ContactSectionES from "@/components/contact-section-es"
import FooterES from "@/components/footer-es"
import WhatsAppButtonES from "@/components/whatsapp-button-es"

export default function HomeES() {
  return (
    <main>
      <HeaderES />
      <HeroSectionES />
      <WelcomeSectionES />
      {/*<AboutSectionES />*/}
      <ProductsSectionES />
      <MissionSectionES />
      {/*<ProductsSectionES />*/}
      {/*<ContactSectionES />*/}
      <FooterES />
      <WhatsAppButtonES />
    </main>
  )
}
