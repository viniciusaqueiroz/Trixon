import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import heroBg from '../assets/images/hero-bg.png';
import ScrollFloat from './ScrollFloat';

export default function Hero() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-center text-white px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <motion.div
        className="absolute inset-0 z-0 opacity-80"
        animate={{
          background: [
            'radial-gradient(circle at 25% 30%, rgba(96, 165, 250, 0.18), transparent 28%)',
            'radial-gradient(circle at 70% 42%, rgba(167, 139, 250, 0.26), transparent 34%)',
            'radial-gradient(circle at 52% 72%, rgba(96, 165, 250, 0.2), transparent 30%)',
            'radial-gradient(circle at 25% 30%, rgba(96, 165, 250, 0.18), transparent 28%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          detectRetina: true,
          particles: {
            number: {
              value: 100,
              density: { enable: true, area: 900 },
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: { min: 0.22, max: 0.65 },
              animation: {
                enable: true,
                speed: 1.2,
                minimumValue: 0.18,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 3.2 },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.8,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 155,
              color: '#93c5fd',
              opacity: 0.24,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2.2,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/35 z-0"></div>

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ScrollFloat
            as="h1"
            containerClassName="text-5xl md:text-7xl font-orbitron font-extrabold mb-3"
            animationDuration={0.65}
            stagger={0.02}
            scrollStart="top 85%"
            scrollEnd="bottom 15%"
            playOnMount
          >
            TRIXON
          </ScrollFloat>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ScrollFloat
            as="h2"
            containerClassName="text-xl md:text-2xl font-body font-medium text-gray-100 mb-4"
            animationDuration={0.65}
            stagger={0.02}
            scrollStart="top 85%"
            scrollEnd="bottom 15%"
            playOnMount
          >
          Soluções Inteligentes em Tecnologia
          </ScrollFloat>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ScrollFloat
            as="p"
            containerClassName="text-base md:text-lg text-gray-200 mb-7"
            animationDuration={0.65}
            stagger={0.02}
            scrollStart="top 85%"
            scrollEnd="bottom 15%"
            playOnMount
          >
          Infraestrutura, segurança da informação e suporte especializado para pequenas e médias empresas.
          </ScrollFloat>
        </motion.div>

        <motion.a
          href="#cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary text-white px-6 py-3 rounded transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
        >
          Falar com a <span className="font-orbitron">Trixon</span>
        </motion.a>
      </div>

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
