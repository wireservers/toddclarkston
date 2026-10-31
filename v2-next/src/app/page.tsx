import MotionProvider from "@/components/MotionProvider";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DigitalTwin from "@/components/DigitalTwin";

export default function Home() {
  return (
    <MotionProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Journey />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <DigitalTwin />
    </MotionProvider>
  );
}
