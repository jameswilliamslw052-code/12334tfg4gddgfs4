import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-background-dark/10 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="KLIKKLAKCRYPTO" width={36} height={36} />
          <span className="font-bold text-lg text-background-dark">KLIKKLAKCRYPTO</span>
        </div>
        <div className="text-gray-600 text-sm flex space-x-4">
          <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
          <a href="#" className="hover:text-primary">Пользовательское соглашение</a>
        </div>
        <div className="flex space-x-4">
          <a href={process.env.NEXT_PUBLIC_BOT_URL as string} className="text-primary hover:text-primary-dark">Бот</a>
          <a href={process.env.NEXT_PUBLIC_GROUP_URL as string} className="text-primary hover:text-primary-dark">Группа</a>
          <a href={process.env.NEXT_PUBLIC_MENTOR_URL as string} className="text-primary hover:text-primary-dark">Ментор</a>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} KLIKKLAKCRYPTO. Все права защищены.</div>
    </footer>
  );
};

export default Footer;