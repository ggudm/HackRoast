import { Play, CheckCircle2, Clock, Video } from 'lucide-react';

export function VideoLessonsSection() {
  const lessons = [
    {
      title: 'Что такое хакатон',
      description: 'Базовые понятия, форматы, особенности различных мероприятий',
      duration: '12 мин',
    },
    {
      title: 'Как собрать команду',
      description: 'Поиск тиммейтов, распределение ролей, командная динамика',
      duration: '18 мин',
    },
    {
      title: 'Как сделать MVP',
      description: 'Минимальный жизнеспособный продукт за ограниченное время',
      duration: '25 мин',
    },
    {
      title: 'Как презентовать',
      description: 'Питч перед жюри, структура презентации, работа с вопросами',
      duration: '15 мин',
    },
    {
      title: 'Как использовать нейросети',
      description: 'ChatGPT, Midjourney и другие AI-инструменты для ускорения работы',
      duration: '20 мин',
    },
  ];

  return (
    <section id="program" className="py-20 md:py-32" style={{ backgroundColor: '#070304' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Lessons List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)', color: '#FDA72E' }}>
                Программа обучения
              </div>
              <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
                Что будет в обучающих видео
              </h2>
              <p className="text-xl" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
                Структурированная программа от теории до практики
              </p>
            </div>

            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-6 hover:scale-105 transition-all cursor-pointer group"
                  style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                >
                  <div className="flex items-start gap-4">
                    {/* Lesson Number */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all"
                      style={{ backgroundColor: '#FDA72E' }}
                    >
                      <span className="text-white text-lg">{index + 1}</span>
                    </div>

                    {/* Lesson Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="pr-4" style={{ color: '#FCF2D9' }}>{lesson.title}</h4>
                        <span className="text-sm flex-shrink-0 flex items-center gap-1" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>
                          <Clock size={14} />
                          {lesson.duration}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{lesson.description}</p>
                    </div>

                    {/* Play Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#81021F' }}
                      >
                        <Play size={20} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Duration */}
            <div className="flex items-center gap-3 pt-4">
              <CheckCircle2 size={24} style={{ color: '#FDA72E' }} />
              <span className="text-lg" style={{ color: '#FCF2D9' }}>
                Всего 90 минут концентрированных знаний
              </span>
            </div>
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="space-y-6">
            {/* Main Stats Card */}
            <div
              className="rounded-3xl p-10 space-y-8"
              style={{ backgroundColor: '#81021F', color: 'white' }}
            >
              <div className="space-y-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <Video size={32} className="text-white" />
                </div>
                <h3>Готовая система обучения</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Каждый урок это концентрированный опыт десятков выигранных хакатонов
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-4xl mb-2">90</div>
                  <div className="text-sm opacity-70">Минут обучения</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">5</div>
                  <div className="text-sm opacity-70">Модулей</div>
                </div>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: 'Без воды' },
                { icon: Target, text: 'Только практика' },
                { icon: TrendingUp, text: 'Быстрый старт' },
                { icon: CheckCircle2, text: 'Проверенные методы' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-6 text-center space-y-2"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto"
                      style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)' }}
                    >
                      <Icon size={20} style={{ color: '#FDA72E' }} />
                    </div>
                    <div className="text-sm" style={{ color: '#FCF2D9' }}>{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, Target, TrendingUp } from 'lucide-react';
