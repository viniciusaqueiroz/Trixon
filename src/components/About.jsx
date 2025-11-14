import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="sobre"
      className="relative z-0 py-20 bg-gradient-to-r from-gray-200 via-blue-100 to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre a <span className="font-orbitron">Trixon</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A <span className="font-orbitron">Trixon</span> nasceu com a missão de levar tecnologia profissional, segura e acessível para empresas que precisam de soluções confiáveis sem burocracia.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Atuamos com foco em resultados reais, combinando expertise em infraestrutura, segurança da informação e suporte técnico para manter seu negócio rodando com estabilidade e eficiência.
          </p>
        </motion.div>

        {/* Imagem ilustrativa */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/about-icon.png"
            alt="Ícone representando tecnologia"
            className="w-64 h-64"
          />
        </motion.div>
      </div>
    </section>
  );
}
