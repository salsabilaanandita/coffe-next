import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <AboutTeaser />
      <MenuHighlights />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

