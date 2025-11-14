import { FaServer, FaShieldAlt, FaHeadset, FaLaptopCode } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="servicos" className="relative z-0 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:bg-blue-800 transition duration-100 transition-colors">
            <FaServer size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Infraestrutura</h3>
            <p>Servidores, redes e conectividade com alta performance e escalabilidade.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:bg-blue-800 transition duration-100 transition-colors">
            <FaShieldAlt size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança</h3>
            <p>Proteção de dados, firewalls, backups e prevenção de ataques cibernéticos.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:bg-blue-800 transition duration-100 transition-colors">
            <FaHeadset size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Suporte</h3>
            <p>Atendimento remoto ágil, monitoramento e manutenção preventiva.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:bg-blue-800 transition duration-100 transition-colors">
            <FaLaptopCode size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Consultoria de TI</h3>
            <p>Planejamento estratégico, diagnóstico técnico e soluções sob medida para sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
