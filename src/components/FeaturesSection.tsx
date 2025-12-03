import { BookOpen, Users, Lightbulb, Trophy } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Обучение',
    description: 'Смотри видеоуроки от победителей хакатонов. Узнай, как создавать MVP, питчить проект и работать в команде.',
    step: '01',
  },
  {
    icon: Users,
    title: 'Команда',
    description: 'Найди тиммейтов через платформу. Мы подбираем людей по навыкам, опыту и интересам.',
    step: '02',
  },
  {
    icon: Lightbulb,
    title: 'Практика',
    description: 'Участвуй в хакатонах вместе с командой. Получай фидбек от менторов и улучшай свои навыки.',
    step: '03',
  },
  {
    icon: Trophy,
    title: 'Результат',
    description: 'Выигрывай призы, получай гранты и строй портфолио. Победы на хакатонах открывают двери в карьере.',
    step: '04',
  },
];

export function FeaturesSection() {
  return (
    <section id="team" className="py-20 md:py-32" style={{ backgroundColor: '#0a0506' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
            Используй все возможности платформы
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
            Простой и понятный путь от новичка до победителя хакатонов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="rounded-3xl p-8 space-y-6 hover:scale-105 transition-all shadow-sm relative overflow-hidden group"
                style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
              >
                {/* Step Number Background */}
                <div
                  className="absolute -top-4 -right-4 text-[120px] opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ color: '#FCF2D9' }}
                >
                  {feature.step}
                </div>

                {/* Icon and Step */}
                <div className="flex items-center justify-between relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: index % 2 === 0 ? '#FDA72E' : '#81021F' }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <span className="text-2xl" style={{ color: 'rgba(252, 242, 217, 0.3)' }}>{feature.step}</span>
                </div>

                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <h4 style={{ color: '#FCF2D9' }}>{feature.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{feature.description}</p>
                </div>

                {/* Progress Indicator */}
                <div className="relative z-10">
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(252, 242, 217, 0.1)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${((index + 1) / 4) * 100}%`,
                        backgroundColor: index % 2 === 0 ? '#FDA72E' : '#81021F',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 rounded-2xl text-white text-lg hover:scale-105 transition-all shadow-lg"
            style={{ backgroundColor: '#81021F' }}
          >
            Начать сейчас
          </button>
        </div>
      </div>
    </section>
  );
}
