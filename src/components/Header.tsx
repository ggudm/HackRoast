import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#0a0506', borderBottom: '1px solid rgba(252, 242, 217, 0.1)' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#81021F' }}>
              <span className="text-white font-bold text-xl">HR</span>
            </div>
            <span className="text-2xl font-bold" style={{ color: '#FCF2D9' }}>HackRoast</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              О нас
            </button>
            <button onClick={() => scrollToSection('program')} className="hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              Программа обучения
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              Найти команду
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('form')}
            className="hidden md:block px-6 py-3 rounded-2xl text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#81021F' }}
          >
            Анкета-заявка
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: '#FCF2D9' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(252, 242, 217, 0.1)' }}>
            <button onClick={() => scrollToSection('about')} className="text-left hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              О нас
            </button>
            <button onClick={() => scrollToSection('program')} className="text-left hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              Программа обучения
            </button>
            <button onClick={() => scrollToSection('team')} className="text-left hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              Найти команду
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              Отзывы
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left hover:opacity-70 transition-opacity" style={{ color: '#FCF2D9' }}>
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('form')}
              className="px-6 py-3 rounded-2xl text-white transition-all"
              style={{ backgroundColor: '#81021F' }}
            >
              Анкета-заявка
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}