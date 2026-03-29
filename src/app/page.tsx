import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Demo from "@/components/Demo";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Demo />
        <Metrics />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
