import { motion } from 'framer-motion';

interface CasesProps {
  utmString: string;
}

const cases = [
  {
    type: 'P2P‑арбитраж',
    before: '$100',
    after: '$115',
    profit: '+15%',
    duration: '2 дня',
  },
  {
    type: 'Стейкинг',
    before: '10 SOL',
    after: '10.3 SOL',
    profit: '+3%',
    duration: '30 дней',
  },
  {
    type: 'Дроп',
    before: '0$',
    after: '$200',
    profit: 'бесплатно',
    duration: '7 дней',
  },
];

const Cases: React.FC<CasesProps> = ({ utmString }) => {
  const botUrl = `${process.env.NEXT_PUBLIC_BOT_URL}${utmString}`;
  return (
    <section id="cases" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-background-dark text-center mb-4"
        >
          Первые сделки 5–50% бесплатно
        </motion.h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Первая сделка под присмотром: вы делаете реальную операцию и фиксируете прибыль без оплаты
          наставнику. Результат зависит от рынка и вашей дисциплины.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-background-light p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg text-background-dark mb-2">{c.type}</h3>
              <div className="flex items-center justify-between text-gray-700 text-sm mb-1">
                <span>До:</span>
                <span className="font-medium">{c.before}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700 text-sm mb-1">
                <span>После:</span>
                <span className="font-medium">{c.after}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700 text-sm mb-1">
                <span>Профит:</span>
                <span className="font-medium text-primary">{c.profit}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
                <span>Длительность:</span>
                <span className="font-medium">{c.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={botUrl} className="btn-primary text-base">Начать под руководством</a>
        </div>
      </div>
    </section>
  );
};

export default Cases;