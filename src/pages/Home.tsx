import { Navbar } from '../components/Navbar';
import { HeroPage } from './HeroPage';
import { AboutPage } from './About';
import { PortfolioPage } from './Portfolio';
import { ContactPage } from './Contact';

export function Home() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <Navbar />
      <HeroPage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  );
} 