interface FinalCTAProps {
  utmString: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ utmString }) => {
  const botUrl = `${process.env.NEXT_PUBLIC_BOT_URL}${utmString}`;
  const groupUrl = `${process.env.NEXT_PUBLIC_GROUP_URL}${utmString}`;
  return (
    <section id="final-cta" className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-background-dark mb-6">
          Готовы начать зарабатывать на крипте?
        </h2>
        <p className="text-gray-600 mb-8">
          Запускайте нашего бота в Telegram и сделайте первые шаги в сопровождении наставника. Первые
          сделки — бесплатно!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href={botUrl} className="btn-primary text-base sm:text-lg">Начать обучение в боте</a>
          <a href={groupUrl} className="btn-secondary text-base sm:text-lg">Вступить в группу</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;