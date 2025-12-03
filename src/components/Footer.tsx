import { MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: '#81021F', color: 'white' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <span style={{ color: '#81021F' }} className="text-xl">HR</span>
              </div>
              <span className="text-2xl text-white">HackRoast</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Образовательная платформа для побед на хакатонах. От новичка до чемпиона.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/hackroast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-all"
                style={{ backgroundColor: '#FDA72E' }}
                aria-label="Telegram"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
              <a
                href="mailto:info@hackroast.com"
                className="w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-all"
                style={{ backgroundColor: '#FDA72E' }}
                aria-label="Email"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h4 className="text-white mb-6">Навигация</h4>
            <div className="space-y-3">
              {[
                { label: 'О нас', id: 'about' },
                { label: 'Программа обучения', id: 'program' },
                { label: 'Найти команду', id: 'team' },
                { label: 'Отзывы', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white/70 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h4 className="text-white mb-6">Ресурсы</h4>
            <div className="space-y-3">
              {[
                'Календарь хакатонов',
                'База знаний',
                'Менторы',
                'Сообщество',
                'Блог',
              ].map((item) => (
                <div key={item} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h4 className="text-white mb-6">Контакты</h4>
            <div className="space-y-4">
              <a
                href="https://t.me/hackroast"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
                <span>@hackroast</span>
              </a>
              <a
                href="mailto:info@hackroast.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>info@hackroast.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="text-center mb-8">
            <h4 className="text-white mb-2">Наши партнёры</h4>
            <p className="text-white/60 text-sm">Организаторы хакатонов и технологические компании</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Яндекс' },
              { name: 'VK' },
              { name: 'Сбер' },
              { name: 'Тинькофф' },
            ].map((partner, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 flex items-center justify-center hover:scale-105 transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-white">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>© 2024 HackRoast. Все права защищены.</div>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
              <button className="hover:text-white transition-colors">
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
