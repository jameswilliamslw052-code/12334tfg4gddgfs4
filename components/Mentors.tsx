import { motion } from 'framer-motion';
import Image from 'next/image';

interface Mentor {
  name: string;
  specialty: string;
  bullets: string[];
  imgSrc: string;
  ctaLabel: string;
  ctaLink: string;
}

interface MentorsProps {
  utmString: string;
}

const mentors: Mentor[] = [
  {
    name: 'Андрей',
    specialty: 'P2P‑арбитраж',
    bullets: ['Доходность 5–10% за сделку', '200+ учеников', 'Эксперт P2P‑платформ'],
    imgSrc: '/mentor-andrey.png',
    ctaLabel: 'Написать Андрею',
    ctaLink: `${process.env.NEXT_PUBLIC_MENTOR_URL}`,
  },
  {
    name: 'Мария',
    specialty: 'Стейкинг и дропы',
    bullets: ['Заработок на стейкинге', '30+ успешных кейсов', 'Глубокое понимание DeFi'],
    imgSrc: '/mentor-maria.png',
    ctaLabel: 'Старт с наставником',
    ctaLink: `${process.env.NEXT_PUBLIC_BOT_URL}`,
  },
];

const Mentors: React.FC<MentorsProps> = ({ utmString }) => {
  return (
    <section id="mentors" className="section bg-background-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-background-dark text-center mb-12"
        >
          Наши наставники
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, idx) => {
            // Append UTM parameters if present
            const cta = `${mentor.ctaLink}${utmString}`;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center"
              >
                <Image
                  src={mentor.imgSrc}
                  alt={`Ментор ${mentor.name}`}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold text-background-dark mt-4 mb-1">{mentor.name}</h3>
                <p className="text-primary mb-4 font-medium">{mentor.specialty}</p>
                <ul className="text-gray-600 text-sm mb-6 space-y-1 list-disc list-inside text-left">
                  {mentor.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={cta}
                  className="btn-primary text-sm"
                  onClick={() => {
                    if (window && (window as any).gtag) {
                      (window as any).gtag('event', 'click', { label: `mentor_${mentor.name.toLowerCase()}`, location: 'mentors' });
                    }
                  }}
                >
                  {mentor.ctaLabel}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mentors;