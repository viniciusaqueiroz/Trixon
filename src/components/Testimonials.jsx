import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { StarIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Carlos Andrade',
    role: 'Diretor de TI - Grupo Andrade',
    rating: 5,
    text: 'A Trixon transformou nossa estrutura de TI. Hoje tudo roda com estabilidade e segurança.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Gerente de Segurança - LimaTech',
    rating: 4,
    text: 'Excelente atendimento e suporte rápido. Recomendo para qualquer empresa que valoriza segurança.',
  },
  {
    name: 'João Martins',
    role: 'CEO - Martins Soluções',
    rating: 5,
    text: 'O planejamento estratégico de TI nos ajudou a crescer com estabilidade.',
  },
  {
    name: 'Patrícia Souza',
    role: 'COO - Souza Digital',
    rating: 5,
    text: 'A equipe da Trixon é extremamente competente. Nossa operação nunca esteve tão segura.',
  },
  {
    name: 'Eduardo Ribeiro',
    role: 'CTO - Ribeiro Sistemas',
    rating: 4,
    text: 'A consultoria foi essencial para nossa expansão. Profissionalismo e agilidade em cada etapa.',
  },
  {
    name: 'Luciana Torres',
    role: 'Gestora de TI - Torres & Associados',
    rating: 5,
    text: 'Finalmente encontramos uma empresa que entende nossas necessidades de TI sem complicação.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-50 px-4"
    >
      <h3 className="text-3xl font-bold text-primary text-center mb-12">Depoimentos</h3>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 h-full flex flex-col justify-between"
            >
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>

              <div className="flex justify-center mb-2">
                {[...Array(t.rating)].map((_, idx) => (
                  <StarIcon key={idx} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <p className="font-semibold text-primary">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
