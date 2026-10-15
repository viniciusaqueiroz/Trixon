import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaHeadset, FaLaptopCode, FaServer, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    title: 'Infraestrutura',
    description: 'Servidores, redes e conectividade com alta performance e escalabilidade.',
    icon: FaServer,
  },
  {
    title: 'Segurança',
    description: 'Proteção de dados, firewalls, backups e prevenção de ataques cibernéticos.',
    icon: FaShieldAlt,
  },
  {
    title: 'Suporte',
    description: 'Atendimento remoto ágil, monitoramento e manutenção preventiva.',
    icon: FaHeadset,
  },
  {
    title: 'Consultoria de TI',
    description: 'Planejamento estratégico, diagnóstico técnico e soluções sob medida para sua empresa.',
    icon: FaLaptopCode,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid || typeof window === 'undefined') return undefined;

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
        gsap.fromTo(grid, { y: 24 }, {
          y: -24,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="servicos" className="relative overflow-hidden bg-white py-16">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
          Nossos Serviços
        </h2>

        <div ref={gridRef} className="services-parallax-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="services-parallax-card bg-primary text-center text-white"
            >
              <Icon aria-hidden="true" className="mx-auto mb-4 text-4xl text-blue-100" />
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-base leading-relaxed text-blue-50">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
