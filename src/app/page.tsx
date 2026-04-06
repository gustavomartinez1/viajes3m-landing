import Hero from '@/features/landing/components/Hero';
import Packages from '@/features/landing/components/Packages';
import Contact from '@/features/landing/components/Contact';
import Footer from '@/features/landing/components/Footer';
import WhatsAppFloat from '@/features/landing/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Hero />
      <Packages />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
