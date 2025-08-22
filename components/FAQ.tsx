import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QA {
  question: string;
  answer: string;
}

const faqs: QA[] = [
  {
    question: 'Сколько нужно денег на старт?',
    answer: 'Можно начать с минимальной суммы — от 50 USD. Важно учитывать комиссии и риски, поэтому рекомендуется начинать с суммы, которую вы готовы рискнуть.',
  },
  {
    question: 'Нужно ли регистрировать ИП или компанию?',
    answer: 'На начальных этапах нет. Вы работаете как частное лицо. При масштабировании деятельности настоятельно советуем проконсультироваться с юристом по поводу налогов.',
  },
  {
    question: 'Какие налоги нужно платить?',
    answer: 'Налоговое законодательство различается в каждой стране. Мы поможем понять общие принципы, но ответственность за уплату налогов лежит на вас.',
  },
  {
    question: 'Каковы риски?',
    answer: 'Криптовалюты волатильны, возможны резкие колебания курса. Также есть риски мошенничества. Мы даем рекомендации по минимизации рисков, но они всегда остаются.',
  },
  {
    question: 'Сколько времени потребуется на обучение?',
    answer: 'Первую прибыльную сделку можно совершить уже в течение 2–3 дней после старта. Дальнейшее обучение зависит от выбранного направления и вашей вовлеченности.',
  },
  {
    question: 'Могу ли я прекратить обучение в любой момент?',
    answer: 'Да, вы всегда можете прекратить работу с наставником. Вы ничего не теряете — вы приобретаете знания и опыт.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <section id="faq" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-background-dark text-center mb-12">Вопросы и ответы</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-background-dark/10 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none hover:bg-background-light"
                onClick={() => toggle(idx)}
              >
                <span className="font-medium text-background-dark">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-600 text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;