import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
  className="text-2xl md:text-4xl font-orbitron font-extrabold tracking-tight 
             bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
             bg-clip-text text-transparent animate-gradient"
>
  Trixon
</h1>


        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-primary font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
          >
            Solicitar orçamento
          </a>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu mobile com animação suave */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4 animate-fade-in-down">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-primary font-medium transition duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="block bg-primary text-white px-4 py-2 rounded text-center hover:bg-blue-800 transition duration-300"
          >
            Solicitar orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
