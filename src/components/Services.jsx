import { FaServer, FaShieldAlt, FaHeadset, FaLaptopCode } from 'react-icons/fa';
import ScrollFloat from './ScrollFloat';

export default function Services() {
  return (
    <section id="servicos" className="relative z-0 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollFloat
          containerClassName="text-3xl font-bold text-primary text-center mb-12 md:text-4xl"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Nossos Serviços
        </ScrollFloat>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="utilities bg-primary text-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl">
            <FaServer size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Infraestrutura</h3>
            <p>Servidores, redes e conectividade com alta performance e escalabilidade.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl">
            <FaShieldAlt size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança</h3>
            <p>Proteção de dados, firewalls, backups e prevenção de ataques cibernéticos.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl">
            <FaHeadset size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Suporte</h3>
            <p>Atendimento remoto ágil, monitoramento e manutenção preventiva.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl">
            <FaLaptopCode size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Consultoria de TI</h3>
            <p>Planejamento estratégico, diagnóstico técnico e soluções sob medida para sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
