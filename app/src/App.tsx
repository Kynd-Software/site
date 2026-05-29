import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { StatsBand } from '@/components/sections/StatsBand';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { AdhdPillars } from '@/components/sections/AdhdPillars';
import { Testimonials } from '@/components/sections/Testimonials';
import { WaitlistCta } from '@/components/sections/WaitlistCta';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <StatsBand />
        <ProblemSection />
        <hr className="divider" />
        <FeaturesSection />
        <HowItWorks />
        <AdhdPillars />
        <Testimonials />
        <WaitlistCta />
      </main>
      <Footer />
    </>
  );
}
