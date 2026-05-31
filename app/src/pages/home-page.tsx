import { Hero } from '@/components/sections/Hero';
import { StatsBand } from '@/components/sections/StatsBand';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { AdhdPillars } from '@/components/sections/AdhdPillars';
import { Testimonials } from '@/components/sections/Testimonials';
import { WaitlistCta } from '@/components/sections/WaitlistCta';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsBand />
      <ProblemSection />
      <hr className="divider" />
      <FeaturesSection />
      <HowItWorks />
      <AdhdPillars />
      <Testimonials />
      <WaitlistCta />
    </>
  );
};
