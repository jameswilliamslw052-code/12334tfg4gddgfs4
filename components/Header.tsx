import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  utmString: string;
}

const Header: React.FC<HeaderProps> = ({ utmString }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  // Combine base URL with UTM string
  const botUrl = `${process.env.NEXT_PUBLIC_BOT_URL}${utmString}`;
  const groupUrl = `${process.env.NEXT_PUBLIC_GROUP_URL}${utmString}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-light/60 backdrop-blur-md border-b border-background-dark/10">
      <div className="mx-auto max-w-7xl flex justify-between items-center px-4 md:px-6 py-3">
        <Link href="/" passHref>
          <a className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="KLIKKLAKCRYPTO логотип"
              width={40}
              height={40}
              priority
            />
            <span className="hidden sm:inline-block font-bold text-xl text-primary">KLIKKLAKCRYPTO</span>
          </a>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#how-it-works" className="hover:text-primary-dark focus:outline-none focus-visible:underline">Как это работает</a>
          <a href="#mentors" className="hover:text-primary-dark focus:outline-none focus-visible:underline">Менторы</a>
          <a href="#cases" className="hover:text-primary-dark focus:outline-none focus-visible:underline">Кейсы</a>
          <a href="#faq" className="hover:text-primary-dark focus:outline-none focus-visible:underline">FAQ</a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a
            href={botUrl}
            className="btn-primary text-sm"
            onClick={() => {
              if (window && (window as any).gtag) {
                (window as any).gtag('event', 'click', { label: 'header_primary', location: 'header' });
              }
            }}
          >
            Начать обучение
          </a>
          <a
            href={groupUrl}
            className="btn-secondary text-sm"
            onClick={() => {
              if (window && (window as any).gtag) {
                (window as any).gtag('event', 'click', { label: 'header_secondary', location: 'header' });
              }
            }}
          >
            Вступить в группу
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Открыть меню"
          onClick={toggle}
        >
          {/* Simple hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-background-light border-t border-background-dark/10">
          <nav className="flex flex-col px-4 py-4 space-y-3 text-base font-medium">
            <a href="#how-it-works" onClick={toggle} className="hover:text-primary-dark">Как это работает</a>
            <a href="#mentors" onClick={toggle} className="hover:text-primary-dark">Менторы</a>
            <a href="#cases" onClick={toggle} className="hover:text-primary-dark">Кейсы</a>
            <a href="#faq" onClick={toggle} className="hover:text-primary-dark">FAQ</a>
            <a href={botUrl} className="btn-primary mt-2 text-center">Начать обучение</a>
            <a href={groupUrl} className="btn-secondary text-center">Вступить в группу</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;