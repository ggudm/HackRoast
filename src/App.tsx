import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { VideoLessonsSection } from './components/VideoLessonsSection';
import { VideoPlayerSection } from './components/VideoPlayerSection';
import { FormSection } from './components/FormSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import favicon from 'figma:asset/4027a38eb19792c26256ad23ddc5ee4a2e3a45c7.png';

export default function App() {
  useEffect(() => {
    // Set page title
    document.title = 'HackRoast';
    
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = favicon;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#070304' }}>
      <Header />
      <Hero />
      <ProblemSection />
      <AboutSection />
      <FeaturesSection />
      <VideoLessonsSection />
      <VideoPlayerSection />
      <FormSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}