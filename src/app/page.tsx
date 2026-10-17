import Hero from "@/components/Hero";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FacilitySection from "@/components/FacilitySection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPointsSection />
      <ServicesSection />
      <WhyChooseUs />
      <FacilitySection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
