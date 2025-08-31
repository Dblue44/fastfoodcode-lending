import { Zap, DollarSign, Smartphone, Brush } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Быстро',
    description: 'Всё настраивается за пару минут',
    detail: 'Не нужно ждать неделями разработки. Создай мини-апп прямо сейчас.',
  },
  {
    icon: DollarSign,
    title: 'Дешево',
    description: 'Не нужны разработчики и дорогие сайты',
    detail: 'Забудь про огромные бюджеты на IT. Начни с копеек.',
  },
  {
    icon: Smartphone,
    title: 'Удобно',
    description: 'Клиент заходит в Telegram и сразу делает заказ',
    detail: 'Твои клиенты уже в Telegram. Зачем заставлять их скачивать ещё одно приложение?',
  },
  {
    icon: Brush,
    title: 'Гибко',
    description: 'Кастомизируй под стиль своего заведения',
    detail: 'Цвета, логотип, описания — всё под твой бренд.',
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full" id={"benefits"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Почему это круче
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              других способов?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Мы сделали то, что должно было существовать давно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-purple-400 transition-all duration-300">
                {benefit.title}
              </h3>

              <p className="text-purple-300 font-medium mb-3">
                {benefit.description}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-purple-300 font-medium">
              💡 А ещё твои клиенты получат уведомления о новых блюдах и акциях
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};