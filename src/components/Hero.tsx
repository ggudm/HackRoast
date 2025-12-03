import { ArrowRight, BookOpen, Users, TrendingUp, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#070304' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight" style={{ color: '#FCF2D9' }}>
                Побеждай на хакатонах с первого дня
              </h1>
              <p className="text-xl" style={{ color: 'rgba(252, 242, 217, 0.7)' }}>
                Образовательная платформа, где новички становятся чемпионами
              </p>
            </div>

            {/* Progress Bar with Gamification */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm" style={{ color: '#FCF2D9' }}>
                <span>Твой путь к победе</span>
                <span style={{ color: '#FDA72E' }}>25% пройдено</span>
              </div>
              <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(252, 242, 217, 0.1)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: '25%', backgroundColor: '#FDA72E' }}
                />
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="px-10 py-5 rounded-2xl text-white text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-lg"
              style={{ backgroundColor: '#81021F' }}
              onClick={() => {
                const element = document.getElementById('form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Начать обучение
              <ArrowRight size={24} />
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ color: '#81021F' }}>10+</div>
                <div className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>Побед</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ color: '#81021F' }}>₽1M+</div>
                <div className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>Грантов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1" style={{ color: '#81021F' }}>50+</div>
                <div className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>Выпускников</div>
              </div>
            </div>
          </div>

          {/* Right Column - Journey Steps */}
          <div className="space-y-6">
            {[
              { icon: BookOpen, title: 'Обучение', desc: 'Изучи основы побед на хакатонах' },
              { icon: Users, title: 'Команда', desc: 'Найди идеальных тиммейтов' },
              { icon: TrendingUp, title: 'Менторство', desc: 'Получай поддержку экспертов' },
              { icon: Award, title: 'Победа', desc: 'Выигрывай призы и гранты' },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-6 flex items-start gap-4 hover:scale-105 transition-all cursor-pointer shadow-sm"
                  style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: index % 2 === 0 ? '#FDA72E' : '#81021F' }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1" style={{ color: '#FCF2D9' }}>{step.title}</h4>
                    <p className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{step.desc}</p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)', color: '#FDA72E' }}
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
