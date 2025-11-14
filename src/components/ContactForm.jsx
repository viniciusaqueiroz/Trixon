import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }

    console.log('Dados enviados:', formData);
    setStatus('Recebemos sua mensagem! Em breve um especialista vai te responder.');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-5"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Entre em contato com a <span className="font-orbitron">Trixon</span>
          </h3>
          <p className="text-gray-700 mb-6">
            Estamos prontos para entender as necessidades da sua empresa e criar soluções de TI sob medida.
            Preencha o formulário e fale diretamente com um especialista.
          </p>

          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-4 focus:gradient-border"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-4 focus:gradient-border"
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-4 focus:gradient-border"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 hover:shadow-lg transition duration-300"
          >
            Enviar mensagem
          </button>
          {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
        </form>

        {/* Texto de segurança com animação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-4 flex justify-center"
          >
            <ShieldCheckIcon className="h-10 w-10 text-primary" />
          </motion.div>

          <h4 className="text-xl font-semibold text-primary mb-4 text-center">
            Seus dados estão seguros conosco
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            A <span className="font-orbitron">Trixon</span> segue boas práticas de segurança da informação e está alinhada com a LGPD.
            <br /><br />
            Em breve, um de nossos consultores entrará em contato com você de forma segura e personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
