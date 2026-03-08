import dynamic from 'next/dynamic';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';

const Services = dynamic(() => import('@/components/Services'));
const About = dynamic(() => import('@/components/About'));
const Process = dynamic(() => import('@/components/Process'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Work = dynamic(() => import('@/components/Work'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Contact = dynamic(() => import('@/components/Contact'));
const CtaBanner = dynamic(() => import('@/components/CtaBanner'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Work />
        <FAQ />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
