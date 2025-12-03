import { AlertCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#0a0506' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="rounded-[2.5rem] p-8 md:p-16" style={{ backgroundColor: 'rgba(252, 242, 217, 0.03)', border: '1px solid rgba(252, 242, 217, 0.1)' }}>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Headline */}
            <div className="text-center space-y-4">
              <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
                Рынок кричит о кадрах. Почему тебя до сих пор не берут?
              </h2>
            </div>

            {/* Pain Points */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Нет команды', desc: 'Идти на хакатон одному страшно' },
                { title: 'Нет опыта', desc: 'Не понимаешь, с чего начать' },
                { title: 'Нет побед', desc: 'В резюме нечем выделиться' },
              ].map((pain, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-6 text-center space-y-3"
                  style={{ backgroundColor: 'rgba(129, 2, 31, 0.2)', border: '1px solid rgba(129, 2, 31, 0.3)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: '#81021F' }}
                  >
                    <AlertCircle size={24} className="text-white" />
                  </div>
                  <h4 style={{ color: '#FCF2D9' }}>{pain.title}</h4>
                  <p className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{pain.desc}</p>
                </div>
              ))}
            </div>

            {/* Explanation */}
            <div className="space-y-6 pt-6">
              <div className="rounded-3xl p-8" style={{ backgroundColor: 'rgba(253, 167, 46, 0.1)', borderLeft: '4px solid #FDA72E' }}>
                <p className="text-lg leading-relaxed" style={{ color: '#FCF2D9' }}>
                  Замкнутый круг: работодатели требуют портфолио, портфолио нужен опыт,
                  опыт получаешь на проектах, на проекты берут с опытом.
                </p>
              </div>

              <div className="space-y-4">
                <h3 style={{ color: '#FCF2D9' }}>HackRoast разрывает этот круг</h3>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(252, 242, 217, 0.7)' }}>
                  Мы даём тебе готовую систему от нуля до первых побед. Обучение, команда, менторство.
                  Всё, что нужно для старта карьеры в IT.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  'Практический опыт с первого дня',
                  'Команда единомышленников',
                  'Менторы-эксперты',
                  'Реальные кейсы в портфолио',
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-2xl"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#FDA72E' }}
                    />
                    <span style={{ color: '#FCF2D9' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
