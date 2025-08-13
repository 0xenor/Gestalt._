import  { useEffect, useState } from 'react';
import AnimatedBackground from '../src/componenets/AnimatedBackground';
import Hero from '../src/componenets/Hero';
import Projects from '../src/componenets/Projects';
import Reviews from '../src/componenets/Reviews';
import Contact from '../src/componenets/Contact';
import Navigation from '../src/componenets/Navigation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize smooth scrolling
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