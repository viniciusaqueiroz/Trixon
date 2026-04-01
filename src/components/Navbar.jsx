import { useState, useEffect } from 'react'; // Adicionamos useEffect
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Novo estado para o scroll

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // MONITORAR O SCROLL PARA MUDAR A TRANSPARÊNCIA
  useEffect(() => {
    const checkScroll = () => {
      // Se rolou mais de 20 pixels, ativa o efeito
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // FUNÇÃO DE SCROLL MÁGICA
  const handleScroll = (e, href) => {
    e.preventDefault();

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 85; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMenuOpen(false); 
    }
  };

  const links = [
    { label: 'Serviços', href: '#servicos' },
    
    { label: 'Sobre', href: '#sobre' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${isScrolled 
        ? 'bg-white/70 backdrop-blur-md shadow-md py-2' // Ao rolar: Transparência + Desfoque
        : 'bg-white py-4' // No topo: Branco Sólido
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, '#')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <h1 className="text-2xl md:text-4xl font-orbitron font-extrabold tracking-tight 
                         bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                         bg-clip-text text-transparent animate-gradient">
            Trixon
          </h1>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => handleScroll(e, '#cta')}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
          >
            Solicitar orçamento
          </a>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button onClick={toggleMenu} className="md:hidden text-primary focus:outline-none">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4 animate-fade-in-down">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-gray-700 hover:text-primary font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => handleScroll(e, '#cta')}
            className="block bg-primary text-white px-4 py-2 rounded text-center hover:bg-blue-800 transition duration-300"
          >
            Solicitar orçamento
          </a>
        </nav>
      )}
    </header>
  );
}