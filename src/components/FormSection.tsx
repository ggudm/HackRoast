import { useState } from 'react';
import { Send, User, Calendar, MessageCircle, Briefcase, Target, Lightbulb, Users, BookOpen, Clock } from 'lucide-react';

export function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    telegram: '',
    experience: '',
    role: '',
    motivation: '',
    solution: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="form" className="py-20 md:py-32" style={{ backgroundColor: '#070304' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8 md:sticky md:top-24">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)', color: '#FDA72E' }}>
                Присоединяйся
              </div>
              <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
                Заполни анкету и начни путь к победам
              </h2>
              <p className="text-xl" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
                Расскажи нам о себе, и мы подберём тебе идеальную команду
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: Target, text: 'Попадёшь в команду по твоим навыкам' },
                { icon: BookOpen, text: 'Получишь доступ к обучающим материалам' },
                { icon: Users, text: 'Найдёшь менторов и единомышленников' },
                { icon: Trophy, text: 'Начнёшь участвовать в хакатонах' },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)' }}
                    >
                      <Icon size={20} style={{ color: '#FDA72E' }} />
                    </div>
                    <span className="text-lg" style={{ color: '#FCF2D9' }}>{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div
              className="rounded-3xl p-8 space-y-4"
              style={{ backgroundColor: '#81021F', color: 'white' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <Clock size={28} className="text-white" />
              </div>
              <h4 className="text-white">Быстрый старт</h4>
              <p className="text-white/90 leading-relaxed">
                Обработка заявок в течение 24 часов. Уже через неделю ты можешь быть на своём первом хакатоне!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="rounded-[2.5rem] p-8 md:p-12 shadow-xl"
            style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: '#FCF2D9' }}>
                  <User size={16} />
                  Имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                />
              </div>

              {/* Age */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: '#FCF2D9' }}>
                  <Calendar size={16} />
                  Возраст
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="19"
                  min="14"
                  max="99"
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                />
              </div>

              {/* Telegram */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: '#FCF2D9' }}>
                  <MessageCircle size={16} />
                  Telegram
                </label>
                <input
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  required
                  placeholder="@username"
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                />
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: '#FCF2D9' }}>
                  <Briefcase size={16} />
                  Опыт в IT
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                >
                  <option value="" style={{ backgroundColor: '#070304' }}>Выбери вариант</option>
                  <option value="none" style={{ backgroundColor: '#070304' }}>Нет опыта</option>
                  <option value="beginner" style={{ backgroundColor: '#070304' }}>Новичок (до 1 года)</option>
                  <option value="intermediate" style={{ backgroundColor: '#070304' }}>Средний (1-3 года)</option>
                  <option value="advanced" style={{ backgroundColor: '#070304' }}>Продвинутый (3+ года)</option>
                </select>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: '#FCF2D9' }}>
                  <Target size={16} />
                  Роль в команде
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                >
                  <option value="" style={{ backgroundColor: '#070304' }}>Выбери роль</option>
                  <option value="frontend" style={{ backgroundColor: '#070304' }}>Frontend Developer</option>
                  <option value="backend" style={{ backgroundColor: '#070304' }}>Backend Developer</option>
                  <option value="fullstack" style={{ backgroundColor: '#070304' }}>Fullstack Developer</option>
                  <option value="designer" style={{ backgroundColor: '#070304' }}>UI/UX Designer</option>
                  <option value="pm" style={{ backgroundColor: '#070304' }}>Project Manager</option>
                  <option value="marketing" style={{ backgroundColor: '#070304' }}>Marketing/SMM</option>
                  <option value="analyst" style={{ backgroundColor: '#070304' }}>Business Analyst</option>
                </select>
              </div>

              {/* Motivation */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm" style={{ color: '#FCF2D9' }}>
                  <Lightbulb size={16} />
                  Почему ты хочешь участвовать в хакатонах?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  placeholder="Расскажи о своей мотивации..."
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg resize-none"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                />
              </div>

              {/* Mini Task */}
              <div className="space-y-2">
                <label className="text-sm" style={{ color: '#FCF2D9' }}>
                  Мини-задача: В магазине проблема с очередями. Предложи IT-решение.
                </label>
                <textarea
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  required
                  placeholder="Твоё решение..."
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-2 outline-none transition-all text-lg resize-none"
                  style={{ 
                    backgroundColor: 'rgba(252, 242, 217, 0.05)', 
                    borderColor: 'rgba(252, 242, 217, 0.2)',
                    color: '#FCF2D9'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#81021F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(252, 242, 217, 0.2)'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-5 rounded-2xl text-white text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg"
                style={{ backgroundColor: '#81021F' }}
              >
                Отправить заявку
                <Send size={24} />
              </button>

              <p className="text-sm text-center" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>
                Нажимая кнопку, ты соглашаешься с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Trophy } from 'lucide-react';
