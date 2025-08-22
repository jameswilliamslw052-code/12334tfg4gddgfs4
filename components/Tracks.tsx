import { motion } from 'framer-motion';

interface TracksProps {
  utmString: string;
}

const tracks = [
  {
    title: 'P2P‑арбитраж',
    description: [
      'Что такое P2P и как работает?',
      'Где искать прибыльные спреды',
      'Риски и как их минимизировать',
      'Пошаговый цикл сделки',
      'Инструменты и сервисы',
    ],
  },
  {
    title: 'Стейкинг',
    description: [
      'Какие монеты выбрать',
      'Доходность и сроки блокировки',
      'Как избежать рисков',
      'Платформы для стейкинга',
      'Как выводить прибыль',
    ],
  },
  {
    title: 'Дропы и ретродропы',
    description: [
      'Что такое дропы и ретродропы',
      'Как выбирать проекты',
      'Сетевые тесты и активности',
      'Критерии отбора',
      'Как фиксировать награды',
    ],
  },
];

const Tracks: React.FC<TracksProps> = ({ utmString }) => {
  const botUrl = `${process.env.NEXT_PUBLIC_BOT_URL}${utmString}`;
  return (
    <section id="tracks" className="section bg-background-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-background-dark text-center mb-12"
        >
          Направления обучения
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="font-semibold text-xl text-background-dark mb-4">{track.title}</h3>
              <ul className="text-gray-600 text-sm mb-6 space-y-1 list-disc list-inside">
                {track.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <a href={botUrl} className="btn-primary text-sm w-full block text-center">
                  Учиться по этому направлению
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;