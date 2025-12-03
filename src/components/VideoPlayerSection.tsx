import { Play, Lock, Infinity, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function VideoPlayerSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#0a0506' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
              Посмотри, как это работает
            </h2>
            <p className="text-xl" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
              Узнай, что такое хакатон и как собрать команду мечты за 15 минут
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
            <div className="aspect-video bg-black relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1638202677704-b74690bb8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjB0ZWFtJTIwY29kaW5nfGVufDF8fHx8MTc2NDcxNzg2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hackathon Team"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Play Button */}
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all shadow-2xl"
                    style={{ backgroundColor: '#81021F' }}
                  >
                    <Play size={40} className="text-white ml-1" fill="white" />
                  </div>
                </button>
              )}

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#FDA72E' }}>
                      Бесплатный урок
                    </div>
                    <h3 className="text-white">
                      Что такое хакатон — как собрать команду мечты?
                    </h3>
                    <p className="text-white/80">15:32 минут</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Полный доступ',
                description: 'После регистрации получи доступ ко всем урокам',
                icon: Lock,
              },
              {
                title: 'Без ограничений',
                description: 'Смотри видео в любое время и пересматривай',
                icon: Infinity,
              },
              {
                title: 'С практикой',
                description: 'К каждому уроку практические задания',
                icon: CheckCircle2,
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-6 space-y-3 hover:scale-105 transition-all"
                  style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)' }}
                  >
                    <Icon size={24} style={{ color: '#FDA72E' }} />
                  </div>
                  <h4 style={{ color: '#FCF2D9' }}>{card.title}</h4>
                  <p className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
