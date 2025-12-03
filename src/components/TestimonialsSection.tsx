import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Star, Trophy, Users, TrendingUp, Award } from 'lucide-react';
import testimonialImage from 'figma:asset/c0e8c247c86da5e25cf942ecca6b7b5634329ef8.png';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32" style={{ backgroundColor: '#0a0506' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
              Истории наших побед
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
              Реальные люди, реальные результаты, реальные победы на хакатонах
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[3rem] transform rotate-3"
                style={{ backgroundColor: '#FDA72E', opacity: 0.2 }}
              />
              <div
                className="relative rounded-[3rem] overflow-hidden border-4"
                style={{ borderColor: '#FDA72E' }}
              >
                <img
                  src={testimonialImage}
                  alt="Максим - Победитель хакатона"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              {/* Badge */}
              <div
                className="absolute -bottom-6 -right-6 rounded-3xl p-6 shadow-xl"
                style={{ backgroundColor: '#81021F', color: 'white' }}
              >
                <Trophy size={40} />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FDA72E' }}
              >
                <Quote size={32} className="text-white" />
              </div>

              <div className="space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} fill="#FDA72E" style={{ color: '#FDA72E' }} />
                  ))}
                </div>

                <p className="text-2xl leading-relaxed" style={{ color: '#FCF2D9' }}>
                  Я думал, что хакатоны и акселераторы — это только для "продвинутых". С HackRoast всё оказалось намного проще: короткое обучение, понятные шаги и полноценная поддержка от наставника на протяжении всего хакатона. Наш проект выиграл, и это был первый раз, когда я почувствовал, что могу что-то создать. Теперь участвую в мероприятиях регулярно.
                </p>

                <div className="space-y-2">
                  <div className="text-xl" style={{ color: '#FCF2D9' }}>Максим</div>
                  <div style={{ color: 'rgba(252, 242, 217, 0.6)' }}>19 лет, дизайнер</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div className="text-2xl mb-1" style={{ color: '#81021F' }}>3</div>
                    <div className="text-xs" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Победы</div>
                  </div>
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div className="text-2xl mb-1" style={{ color: '#81021F' }}>₽1.2M</div>
                    <div className="text-xs" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Призов</div>
                  </div>
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div className="text-2xl mb-1" style={{ color: '#81021F' }}>2 мес</div>
                    <div className="text-xs" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Обучения</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Block */}
          <div
            className="rounded-[3rem] p-12 md:p-16 text-center space-y-8"
            style={{ backgroundColor: '#81021F', color: 'white' }}
          >
            <div className="space-y-4">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-white text-4xl">
                Наш результат — это ваш выигранный хакатон или полученный грант
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Мы не продаём курсы. Мы строим систему, в которой ты получаешь реальный опыт,
                реальную команду и реальные победы.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Users, value: '500+', label: 'Выпускников' },
                { icon: Trophy, value: '150+', label: 'Побед на хакатонах' },
                { icon: TrendingUp, value: '₽50M+', label: 'Выигранных грантов' },
                { icon: Star, value: '4.9', label: 'Средняя оценка' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 space-y-3"
                  >
                    <Icon size={32} className="text-white mx-auto" />
                    <div className="text-4xl text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                role: 'UI/UX Designer',
                text: 'Нашла команду мечты и выиграла первый хакатон через 3 недели!',
              },
              {
                name: 'Дмитрий Волков',
                role: 'Backend Developer',
                text: 'Обучение без воды. Только то, что реально работает на практике.',
              },
              {
                name: 'Елена Смирнова',
                role: 'Project Manager',
                text: 'Получила оффер в стартап после второго выигранного хакатона!',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl p-8 space-y-4 hover:scale-105 transition-all"
                style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FDA72E" style={{ color: '#FDA72E' }} />
                  ))}
                </div>
                <p className="leading-relaxed" style={{ color: '#FCF2D9' }}>{testimonial.text}</p>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(252, 242, 217, 0.1)' }}>
                  <div style={{ color: '#FCF2D9' }}>{testimonial.name}</div>
                  <div className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}