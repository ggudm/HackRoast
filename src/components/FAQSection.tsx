import { useState } from 'react';
import { ChevronDown, HelpCircle, Clock, Users } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Нужен ли опыт программирования?',
      answer:
        'Нет! Мы принимаем новичков с любым уровнем подготовки. Главное — желание учиться и участвовать. У нас есть программы для разных специальностей: разработчиков, дизайнеров, менеджеров и маркетологов.',
    },
    {
      question: 'Сколько стоит обучение?',
      answer:
        'Базовая программа обучения полностью бесплатна. Мы зарабатываем на менторстве для продвинутых участников и партнёрских программах с организаторами хакатонов. Наша цель — сделать хакатоны доступными для всех.',
    },
    {
      question: 'Как долго длится обучение?',
      answer:
        'Базовый курс занимает 90 минут видеоуроков, которые можно пройти за один вечер. После этого ты сразу готов к участию в хакатоне. Дополнительные материалы и менторство доступны в процессе подготовки к конкретным мероприятиям.',
    },
    {
      question: 'Как вы подбираете команды?',
      answer:
        'После заполнения анкеты мы анализируем твои навыки, опыт и интересы. Затем подбираем тиммейтов с комплементарными скиллами. Учитываем роли (разработчик, дизайнер, менеджер), часовой пояс и предпочитаемые технологии. В среднем процесс занимает 3-7 дней.',
    },
    {
      question: 'Что если я не выиграю хакатон?',
      answer:
        'Победа — не единственная цель. На хакатонах ты получаешь реальный опыт работы в команде, кейсы для портфолио, знакомства с менторами и потенциальными работодателями. Многие наши участники получили оффер даже не заняв призовые места. Плюс, с каждым хакатоном опыт растёт.',
    },
    {
      question: 'Какие хакатоны вы рекомендуете?',
      answer:
        'Мы отслеживаем календарь хакатонов по всей России и СНГ. Рекомендуем мероприятия в зависимости от твоего уровня, интересов и целей. Для новичков — более дружелюбные и образовательные хакатоны, для продвинутых — крупные мероприятия с большими призами.',
    },
    {
      question: 'Можно ли участвовать удалённо?',
      answer:
        'Да! Большинство современных хакатонов проходят в онлайн или гибридном формате. Мы специально подбираем команды с учётом часовых поясов и формата участия. Онлайн-хакатоны дают больше гибкости и возможностей для участия.',
    },
    {
      question: 'Есть ли возрастные ограничения?',
      answer:
        'Мы принимаем участников от 14 лет. Для несовершеннолетних может потребоваться согласие родителей на участие в некоторых хакатонах. Верхней границы нет — у нас были успешные участники от 14 до 45 лет!',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32" style={{ backgroundColor: '#070304' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="space-y-8 md:sticky md:top-24">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)', color: '#FDA72E' }}>
                Часто задаваемые вопросы
              </div>
              <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
                Остались вопросы?
              </h2>
              <p className="text-xl" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
                Мы собрали ответы на самые популярные вопросы о платформе и обучении
              </p>
            </div>

            {/* Contact Card */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#FDA72E' }}
              >
                <HelpCircle size={32} className="text-white" />
              </div>
              <div className="space-y-2">
                <h4 style={{ color: '#FCF2D9' }}>Не нашёл ответ?</h4>
                <p style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
                  Напиши нам в Telegram, и мы ответим на все твои вопросы лично
                </p>
              </div>
              <button
                className="w-full px-6 py-4 rounded-2xl text-white hover:scale-105 transition-all"
                style={{ backgroundColor: '#81021F' }}
                onClick={() => window.open('https://t.me/hackroast', '_blank')}
              >
                Написать в Telegram
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)' }}
                >
                  <Clock size={20} style={{ color: '#FDA72E' }} />
                </div>
                <div className="text-3xl mb-2" style={{ color: '#81021F' }}>24ч</div>
                <div className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Ответ на вопросы</div>
              </div>
              <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)' }}
                >
                  <Users size={20} style={{ color: '#FDA72E' }} />
                </div>
                <div className="text-3xl mb-2" style={{ color: '#81021F' }}>500+</div>
                <div className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.5)' }}>Довольных студентов</div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden transition-all"
                style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <span className="pr-4" style={{ color: '#FCF2D9' }}>{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: '#FDA72E',
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                  }}
                >
                  <div className="px-8 pb-6 leading-relaxed" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
