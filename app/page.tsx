import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Calculator from "@/components/sections/Calculator";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Founder from "@/components/sections/Founder";
import Hero from "@/components/sections/Hero";
import IndustryMarquee from "@/components/sections/IndustryMarquee";
import Niches from "@/components/sections/Niches";
import Pricing from "@/components/sections/Pricing";
import Problem from "@/components/sections/Problem";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <IndustryMarquee />
        <Problem />
        <Services />
        <Niches />
        <Results />
        <Calculator />
        <Pricing />
        <Process />
        <Founder />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
