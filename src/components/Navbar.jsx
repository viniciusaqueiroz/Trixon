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

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // FUNÇÃO DE SCROLL MÁGICA
  const handleScroll = (e, href) => {
    e.preventDefault();

    if (href === '#' || href === '#top') {
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
      id="top"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${isScrolled 
        ? 'bg-slate-950/75 backdrop-blur-xl shadow-lg border-b border-white/10 py-2'
        : 'bg-slate-950 border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a
          href="#top"
          onClick={(e) => handleScroll(e, '#top')}
          className="cursor-pointer transition-opacity duration-500 ease-out hover:opacity-80"
        >
          <h1 className="navbar-brand text-2xl md:text-4xl font-orbitron font-extrabold tracking-tight">
            TRIXON
          </h1>
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-slate-200 font-medium transition-colors duration-300 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => handleScroll(e, '#cta')}
            className="bg-primary text-white px-4 py-2 rounded transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Solicitar orçamento
          </a>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex h-11 w-11 items-center justify-center rounded text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-slate-950/95 border-t border-white/10 px-4 py-4 space-y-4 animate-fade-in-down">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block py-2 text-slate-200 font-medium transition-colors duration-300 ease-out hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => handleScroll(e, '#cta')}
            className="block bg-primary text-white px-4 py-2 rounded text-center transition-all duration-500 ease-out hover:bg-blue-700 hover:shadow-lg"
          >
            Solicitar orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
