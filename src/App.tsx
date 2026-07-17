
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { AppPreview } from './components/sections/AppPreview';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { TechStack } from './components/sections/TechStack';
import { Architecture } from './components/sections/Architecture';
import { Roadmap } from './components/sections/Roadmap';
import { Team } from './components/sections/Team';
import { FAQ } from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen font-satoshi text-charcoal bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <AppPreview />
        <Features />
        <HowItWorks />
        <TechStack />
        <Architecture />
        <Roadmap />
        <Team />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
