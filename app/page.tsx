import dynamic from 'next/dynamic';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';

const Services = dynamic(() => import('@/components/Services'));
const About = dynamic(() => import('@/components/About'));
const Process = dynamic(() => import('@/components/Process'));
const Work = dynamic(() => import('@/components/Work'));
const Contact = dynamic(() => import('@/components/Contact'));
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
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
