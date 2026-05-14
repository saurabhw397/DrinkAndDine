import HeroSection from "@/components/features/HeroSection";
import FeaturedSection from "@/components/features/FeaturedSection";
import CuisineHighlights from "@/components/features/CuisineHighlights";
import SpecialsPreview from "@/components/features/SpecialsPreview";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import CTASection from "@/components/features/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CuisineHighlights />
      <FeaturedSection />
      <SpecialsPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
