import { motion } from 'framer-motion';
import Image from 'next/image';

interface SocialProps {}

const testimonials = [
  {
    name: 'Иван',
    handle: '@ivan_crypto',
    quote: 'Под руководством Андрея моя первая P2P‑сделка принесла 12% прибыли! Теперь я увереннее в рынке.',
  },
  {
    name: 'Ольга',
    handle: '@olga_defi',
    quote: 'Стейкинг казался сложным, но наставники помогли выбрать монету и платформу. Через месяц +5%!',
  },
  {
    name: 'Дмитрий',
    handle: '@drop_hunter',
    quote: 'Получил бесплатный дроп благодаря подсказкам ментора. Отличный старт в крипте!',
  },
];

const counters = [
  { label: 'Учеников в группе', value: '1200+' },
  { label: 'Проведённых сессий', value: '350+' },
  { label: 'Стран участников', value: '15+' },
];

const SocialProof: React.FC<SocialProps> = () => {
  return (
    <section id="social-proof" className="section bg-background-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-background-dark text-center mb-12"
        >
          Отзывы и результаты
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {counters.map((counter, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{counter.value}</div>
                  <div className="text-gray-700 text-sm">{counter.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/social-illustration.png"
              alt="Обучение крипте"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col"
            >
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <div className="mt-auto">
                <p className="font-semibold text-background-dark">{t.name}</p>
                <p className="text-sm text-primary">{t.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;