import { HeroSection } from '@/components/home/hero-section';
import { HowItWorks } from '@/components/home/how-it-works';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { FeaturedProfessionals } from '@/components/home/featured-professionals';
import { FeaturesSection } from '@/components/home/features-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturedProjects />
      <FeaturedProfessionals />
      <FeaturesSection />
      <CTASection />
    </>
  );
}