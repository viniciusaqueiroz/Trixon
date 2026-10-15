import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaHeadset, FaLaptopCode, FaServer, FaShieldAlt } from 'react-icons/fa';
import ScrollFloat from './ScrollFloat';
import './Services.css';

const services = [
  {
    title: 'Infraestrutura',
    description: 'Servidores, redes e conectividade com alta performance e escalabilidade.',
    icon: FaServer,
    tone: 'bg-primary',
  },
  {
    title: 'Segurança',
    description: 'Proteção de dados, firewalls, backups e prevenção de ataques cibernéticos.',
    icon: FaShieldAlt,
    tone: 'bg-slate-900',
  },
  {
    title: 'Suporte',
    description: 'Atendimento remoto ágil, monitoramento e manutenção preventiva.',
    icon: FaHeadset,
    tone: 'bg-blue-700',
  },
  {
    title: 'Consultoria de TI',
    description: 'Planejamento estratégico, diagnóstico técnico e soluções sob medida para sua empresa.',
    icon: FaLaptopCode,
    tone: 'bg-indigo-700',
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className={`services-parallax-card ${service.tone}`}>
      <Icon aria-hidden="true" className="mb-6 text-4xl text-blue-100" />
      <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
      <p className="text-base leading-relaxed text-blue-50">{service.description}</p>
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage || typeof window === 'undefined') return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      const columns = gsap.utils.toArray('.services-parallax-column', stage);

      columns.forEach((column) => {
        const speed = Number(column.dataset.speed || 0);

        gsap.to(column, {
          yPercent: speed,
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
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="servicos" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <ScrollFloat
          containerClassName="mb-4 text-center text-3xl font-bold text-primary md:text-4xl"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Nossos Serviços
        </ScrollFloat>
        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
          Tecnologia que acompanha o ritmo da sua operação, com segurança em cada etapa.
        </p>

        <div ref={stageRef} className="services-parallax-stage" aria-label="Serviços da Trixon">
          <div className="services-parallax-column" data-speed="-11">
            <ServiceCard service={services[0]} />
            <div className="services-parallax-spacer" aria-hidden="true" />
            <ServiceCard service={services[2]} />
          </div>

          <div className="services-parallax-center">
            <div className="services-parallax-center-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-700">Trixon</p>
            <p className="font-heading text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
              Sua operação em movimento.
            </p>
          </div>

          <div className="services-parallax-column services-parallax-column--offset" data-speed="11">
            <ServiceCard service={services[1]} />
            <div className="services-parallax-spacer" aria-hidden="true" />
            <ServiceCard service={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
