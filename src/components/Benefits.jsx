import React from 'react';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Redução de custos operacionais',
    description: 'Otimização de recursos e processos para sua empresa gastar menos e produzir mais.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Mais segurança',
    description: 'Infraestrutura reforçada com práticas modernas que evitam falhas, ataques e interrupções.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Suporte dedicado',
    description: 'Atendimento ágil, técnico e eficiente para resolver problemas sem travar sua operação.',
    icon: UserGroupIcon,
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative z-0 py-20 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Benefícios para sua empresa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300"
              >
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-primary">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
