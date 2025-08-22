import { motion } from 'framer-motion';

interface HowProps {
  utmString: string;
}

const steps = [
  {
    title: 'Запускаете бота',
    description: 'Открываете Telegram‑бота и отвечаете на пару вопросов, чтобы определить ваш уровень.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: 'Выбираете ментора и тему',
    description: 'Определяете, что вам ближе: P2P‑арбитраж, стейкинг или дропы, и выбираете наставника.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Следуете проверенному сценарию',
    description: 'Проходите шаги первой сделки под присмотром наставника, соблюдая инструкции.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  },
  {
    title: 'Фиксируете прибыль',
    description: 'Получаете результат, анализируете опыт и решаете — продолжать с наставником или самостоятельно.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V2H7v7H3v13h18V9h-4zM9 4h6v5H9V4z" />
      </svg>
    ),
  },
];

const HowItWorks: React.FC<HowProps> = ({ utmString }) => {
  const botUrl = `${process.env.NEXT_PUBLIC_BOT_URL}${utmString}`;
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-background-dark mb-12"
        >
          Как это работает
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-background-light p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-background-dark">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <a href={botUrl} className="btn-primary text-base">Перейти в бота</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;