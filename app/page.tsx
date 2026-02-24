import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ChallengesSection } from "@/components/challenges-section";
import { VisionSection } from "@/components/vision-section";
import { SolutionsSection } from "@/components/solutions-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { SDGSection } from "@/components/sdg-section";
import { TeamSection } from "@/components/team-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <section id="challenges">
        <ChallengesSection />
      </section>

      <section id="vision">
        <VisionSection />
      </section>

      <section id="solutions">
        <SolutionsSection />
      </section>

      <section id="features">
        <HowItWorksSection />
      </section>

      <section id="sdgs">
        <SDGSection />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="cta">
        <CTASection />
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
