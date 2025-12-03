import { useState } from 'react';
import { Quote, Star, Trophy, Users, TrendingUp, Award } from 'lucide-react';
import photo1 from 'figma:asset/4fde84671586d1c00d1297a2d3d8127699973b9a.png';
import photo2 from 'figma:asset/b728ea935b5bf5b3c1a460b1c6e985ffdc0aecd7.png';
import photo3 from 'figma:asset/fef7ea5deb8a62142ca69824d2bbf7bd3127f8ba.png';

const testimonials = [
  {
    id: 1,
    image: photo1,
    quote: 'Я думал, что хакатоны и акселераторы — это только для "продвинутых". С HackRoast всё оказалось намного проще: короткое обучение, понятные шаги и полноценная поддержка от наставника на протяжении всего хакатона. Наш проект выиграл, и это был первый раз, когда я почувствовал, что могу что-то создать. Теперь участвую в мероприятиях регулярно.',
    name: 'Максим',
    age: '19 лет',
    role: 'дизайнер',
    stats: {
      wins: '3',
      prizes: '₽1.2M',
      learning: '2 мес',
    },
  },
  {
    id: 2,
    image: photo2,
    quote: 'До HackRoast я даже не знал, с чего начать. Программа помогла мне разобраться в основах, найти команду и выиграть первый хакатон за месяц. Теперь у меня есть портфолио и уверенность в своих силах.',
    name: 'Анна',
    age: '21 год',
    role: 'frontend-разработчик',
    stats: {
      wins: '2',
      prizes: '₽800K',
      learning: '1 мес',
    },
  },
  {
    id: 3,
    image: photo3,
    quote: 'Самое ценное в HackRoast — это не только обучение, но и сообщество. Здесь я нашел единомышленников, с которыми мы продолжаем работать над проектами и после хакатонов.',
    name: 'Дмитрий',
    age: '23 года',
    role: 'backend-разработчик',
    stats: {
      wins: '4',
      prizes: '₽1.5M',
      learning: '3 мес',
    },
  },
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

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
                  src={activeTestimonial.image}
                  alt={`${activeTestimonial.name} - Победитель хакатона`}
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
                  {activeTestimonial.quote}
                </p>

                <div className="space-y-2">
                  <div className="text-xl" style={{ color: '#FCF2D9' }}>{activeTestimonial.name}</div>
                  <div style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
                    {activeTestimonial.age}, {activeTestimonial.role}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div className="text-2xl mb-1" style={{ color: '#81021F' }}>
                      {activeTestimonial.stats.wins}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Победы</div>
                  </div>
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div className="text-2xl mb-1" style={{ color: '#81021F' }}>
                      {activeTestimonial.stats.prizes}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Призов</div>
                  </div>
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div className="text-2xl mb-1" style={{ color: '#81021F' }}>
                      {activeTestimonial.stats.learning}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Обучения</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Gallery */}
          <div className="space-y-4">
            <h4 className="text-center" style={{ color: '#FCF2D9' }}>Больше историй успеха</h4>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(testimonial)}
                  className="flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden border-4 transition-all hover:scale-105"
                  style={{
                    borderColor: activeTestimonial.id === testimonial.id ? '#FDA72E' : 'rgba(252, 242, 217, 0.2)',
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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
                { icon: Users, value: '50+', label: 'Выпускников' },
                { icon: Trophy, value: '10+', label: 'Побед на хакатонах' },
                { icon: TrendingUp, value: '₽1M+', label: 'Выигранных грантов' },
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
