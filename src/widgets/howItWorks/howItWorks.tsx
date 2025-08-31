import { UserCheck, Building2, Menu, Palette } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    title: 'Авторизуйся через Telegram',
    description: 'Один клик — и ты уже в системе. Никаких паролей и регистраций.',
  },
  {
    icon: Building2,
    title: 'Создай заведение',
    description: 'Укажи название, адрес и создай бота. Мы поможем на каждом шаге.',
  },
  {
    icon: Menu,
    title: 'Добавь меню',
    description: 'Загрузи блюда, цены и фотки. Красивое меню готово автоматически.',
  },
  {
    icon: Palette,
    title: 'Настрой внешний вид',
    description: 'Выбери цвета и стиль под свой бренд. Всё просто и быстро.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-slate-800/50 w-full" id={"how-it-works"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Как это работает?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Четыре простых шага до твоего первого заказа в Telegram
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:rotate-1">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-800">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-white animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-slate-900 border-2 border-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            И всё! Твои клиенты могут заказывать прямо из Telegram 🚀
          </p>
        </div>
      </div>
    </section>
  );
};