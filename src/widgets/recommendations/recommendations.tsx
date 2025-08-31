import { Star } from 'lucide-react';

const recommendationsConfig = [
  {
    name: 'Дмитрий',
    business: 'Пиццерия "Марио"',
    text: 'Запустили мини-апп за вечер. Заказов стало в 3 раза больше!',
    rating: 5,
    avatar: '🍕',
  },
  {
    name: 'Анна',
    business: 'Кафе "Уютное место"',
    text: 'Клиенты в восторге! Заказывают не отходя от стола.',
    rating: 5,
    avatar: '☕',
  },
  {
    name: 'Сергей',
    business: 'Бургерная "Мясо"',
    text: 'Наконец-то нормальная доставка без комиссий агрегаторов.',
    rating: 5,
    avatar: '🍔',
  },
];

export const Recommendations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full" id={"recommendations"}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Что говорят рестораторы
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Реальные отзывы от реальных людей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendationsConfig.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-purple-300 text-sm">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-300 font-medium">
              ⭐ Средняя оценка: 4.9/5 из 127 отзывов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}