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

export default function App() {
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