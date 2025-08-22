import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Mentors from '@/components/Mentors';
import Cases from '@/components/Cases';
import Tracks from '@/components/Tracks';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();
  // Extract query parameters and construct UTM string
  const params = new URLSearchParams(router.query as Record<string, string>);
  const utmString = params.toString() ? `?${params.toString()}` : '';

  return (
    <>
      <Header utmString={utmString} />
      <main className="pt-20">{/* offset for fixed header */}
        <Hero utmString={utmString} />
        <HowItWorks utmString={utmString} />
        <Mentors utmString={utmString} />
        <Cases utmString={utmString} />
        <Tracks utmString={utmString} />
        <SocialProof />
        <FAQ />
        <Disclaimer />
        <FinalCTA utmString={utmString} />
      </main>
      <Footer />
    </>
  );
}