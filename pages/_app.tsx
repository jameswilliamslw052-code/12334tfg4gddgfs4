import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta for SEO */}
        <title>KLIKKLAKCRYPTO — Старт в крипте с наставником</title>
        <meta
          name="description"
          content="P2P‑арбитраж, стейкинг, дропы и ретродропы: начните обучение с ментором и сделайте первые сделки с прибылью 5–50% бесплатно."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="KLIKKLAKCRYPTO — Старт в крипте с наставником" />
        <meta
          property="og:description"
          content="P2P‑арбитраж, стейкинг, дропы и ретродропы: начните обучение с ментором и сделайте первые сделки с прибылью 5–50% бесплатно."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}