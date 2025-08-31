import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Время запуска',
    yummi: '5 минут',
    competitors: '2-4 недели',
    yummiWins: true,
  },
  {
    feature: 'Стоимость разработки',
    yummi: 'От 0₽',
    competitors: '50 000 - 200 000₽',
    yummiWins: true,
  },
  {
    feature: 'Нужны программисты',
    yummi: 'Нет',
    competitors: 'Да',
    yummiWins: true,
  },
  {
    feature: 'Кастомизация',
    yummi: 'Полная',
    competitors: 'Ограниченная',
    yummiWins: true,
  },
  {
    feature: 'Интеграция с Telegram',
    yummi: 'Нативная',
    competitors: 'Через ссылки',
    yummiWins: true,
  },
  {
    feature: 'Техподдержка',
    yummi: '24/7 на русском',
    competitors: 'По email',
    yummiWins: true,
  },
];

export const Comparison = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 w-full" id={"comparison"}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Почему Yummi лучше
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              аналогов?
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Честное сравнение без воды и маркетинговой лапши
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-slate-700 p-4">
            <div className="text-gray-400 font-medium">Параметр</div>
            <div className="text-center">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold">
                Yummi
              </span>
            </div>
            <div className="text-center text-gray-400 font-medium">Аналоги</div>
          </div>

          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/50 transition-colors"
            >
              <div className="text-gray-300 font-medium flex items-center">
                {item.feature}
              </div>

              <div className="text-center flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-white font-semibold">{item.yummi}</span>
              </div>

              <div className="text-center flex items-center justify-center space-x-2">
                <X className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">{item.competitors}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 rounded-full">
            <span className="text-green-300 font-medium">
              🎯 Результат: экономия времени и денег в 10+ раз
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};