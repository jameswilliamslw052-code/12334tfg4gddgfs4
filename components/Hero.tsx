import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  utmString: string;
}

const Hero: React.FC<HeroProps> = ({ utmString }) => {
  const botUrl = `${process.env.NEXT_PUBLIC_BOT_URL}${utmString}`;
  const groupUrl = `${process.env.NEXT_PUBLIC_GROUP_URL}${utmString}`;
  return (
    <section
      id="hero"
      className="section relative flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background illustration */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/network-bg.png"
          alt="Абстрактный фон блокчейна"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-light/80 to-background-light/90"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-2xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background-dark mb-6">
          Старт в крипте с&nbsp;наставником: <span className="text-primary">первые сделки 5–50% бесплатно</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
          P2P‑арбитраж, стейкинг, дропы и ретродропы — шаг за шагом в Telegram
        </p>
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Менторы 1‑на‑1', 'Без оплаты на старте', 'Результаты учеников'].map((badge) => (
            <span
              key={badge}
              className="bg-white/70 text-primary font-medium px-3 py-1 rounded-full text-sm shadow-sm backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={botUrl}
            className="btn-primary text-base sm:text-lg"
            onClick={() => {
              if (window && (window as any).gtag) {
                (window as any).gtag('event', 'click', { label: 'hero_primary', location: 'hero' });
              }
            }}
          >
            Начать обучение в боте
          </a>
          <a
            href={groupUrl}
            className="btn-secondary text-base sm:text-lg"
            onClick={() => {
              if (window && (window as any).gtag) {
                (window as any).gtag('event', 'click', { label: 'hero_secondary', location: 'hero' });
              }
            }}
          >
            Вступить в группу
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;