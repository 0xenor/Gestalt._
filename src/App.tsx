import { useEffect, useState } from 'react';
import AnimatedBackground from './componenets/AnimatedBackground';
import ScrollTrimLine from './componenets/ScrollTrimLine';
import Hero from './componenets/Hero';
import Projects from './componenets/Projects';
import Reviews from './componenets/Reviews';
import Contact from './componenets/Contact';
import Navigation from './componenets/Navigation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    setIsLoaded(true);

    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />

      {/* Scroll line always behind everything */}
      <ScrollTrimLine />

      <Navigation />

      <main className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}

export default App;
