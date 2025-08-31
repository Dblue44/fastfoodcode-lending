import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Старт',
    price: '0',
    period: 'навсегда',
    description: 'Для тех, кто хочет попробовать',
    features: [
      'До 50 заказов в месяц',
      'Базовое меню',
      'Telegram бот',
      'Поддержка в чате',
    ],
    notIncluded: [
      'Аналитика',
      'Кастомизация',
    ],
    popular: false,
    cta: 'Начать бесплатно',
  },
  {
    name: 'Профи',
    price: '990',
    period: 'в месяц',
    description: 'Для серьёзного бизнеса',
    features: [
      'Безлимит заказов',
      'Полная аналитика',
      'Кастомизация дизайна',
      'Интеграция с кассой',
      'Программа лояльности',
      'Приоритетная поддержка',
    ],
    notIncluded: [],
    popular: true,
    cta: 'Выбрать тариф',
  },
  {
    name: 'Бизнес',
    price: '2990',
    period: 'в месяц',
    description: 'Для сетей и франшиз',
    features: [
      'Всё из тарифа Профи',
      'Мультибрендинг',
      'API для интеграций',
      'Персональный менеджер',
      'Белая маркировка',
      'SLA 99.9%',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Связаться с нами',
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Простые тарифы
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Без скрытых платежей и неожиданных сюрпризов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800 border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'border-purple-500 shadow-purple-500/20'
                  : 'border-slate-700 hover:border-purple-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">Популярный</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">₽</span>
                </div>
                <p className="text-purple-300 font-medium">{plan.period}</p>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                    <div className="w-5 h-5 border border-gray-600 rounded flex-shrink-0"></div>
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/25'
                  : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            💳 Оплата картой или через СБП. Можно начать бесплатно и апгрейдиться позже
          </p>
        </div>
      </div>
    </section>
  );
};