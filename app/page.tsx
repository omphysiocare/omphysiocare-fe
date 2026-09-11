import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}