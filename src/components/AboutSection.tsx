import { Target, Zap, TrendingUp } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32" style={{ backgroundColor: '#070304' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)', color: '#FDA72E' }}>
                О создателях
              </div>
              <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
                Кто создал HackRoast
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(252, 242, 217, 0.7)' }}>
                Мы команда практиков, которые прошли десятки хакатонов, выиграли гранты на миллионы
                рублей и собрали опыт побед в России и за рубежом.
              </p>

              <div
                className="rounded-3xl p-8 space-y-4"
                style={{ backgroundColor: '#81021F', color: 'white' }}
              >
                <p className="text-xl leading-relaxed">
                  Без воды. Без лишней теории. Только опыт, который уже приводит к победам.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#FDA72E' }} />
                  <div>
                    <div>Команда HackRoast</div>
                    <div className="text-sm opacity-70">50+ побед на хакатонах</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h4 style={{ color: '#FCF2D9' }}>Наш подход</h4>
                <ul className="space-y-3">
                  {[
                    'Никаких магических таблеток, только проверенные методы',
                    'Живой опыт от людей, которые побеждают сейчас',
                    'Фокус на практике: делай, получай фидбек, улучшай',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#FDA72E' }}
                      />
                      <span style={{ color: 'rgba(252, 242, 217, 0.7)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                number: '50+',
                label: 'Выигранных хакатонов',
                color: '#81021F',
              },
              {
                icon: Zap,
                number: '₽50M+',
                label: 'Полученных грантов',
                color: '#FDA72E',
              },
              {
                icon: TrendingUp,
                number: '500+',
                label: 'Обученных студентов',
                color: '#81021F',
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-8 hover:scale-105 transition-all"
                  style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: stat.color }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="text-5xl mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-lg" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
