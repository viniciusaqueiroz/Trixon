import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import heroBg from '../assets/images/hero-bg.png';


export default function Hero() {
  const particlesInit = async (main) => {
    await loadSlim(main);

  };

  return (


<section
  className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white px-4"
  style={{ backgroundImage: `url(${heroBg})` }}
>

      {/* Partículas animadas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            number: { value: 60 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Sobreposição escurecida com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-0"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-orbitron font-extrabold tracking-tight mb-2"
        >
          Trixon
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-gray-200 mb-4"
        >
          Soluções Inteligentes em Tecnologia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-300 mb-6"
        >
          Infraestrutura, segurança da informação e suporte especializado para pequenas e médias empresas.
        </motion.p>

        <motion.a
          href="#cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 transition duration-300"
        >
          Falar com a <span className="font-orbitron">Trixon</span>
        </motion.a>
      </div>

      {/* Seta animada para seção Sobre */}
      <a
        href="#servicos"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
