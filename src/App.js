import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css'; // Certifique-se de que o Tailwind está importado

function App() {
  return (
    <>
      
      <Navbar/>
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
