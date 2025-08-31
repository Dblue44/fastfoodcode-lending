import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCta = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 w-full" id={"final-cta"}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-purple-300 text-sm font-medium">Последний шанс</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Начни продавать через
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Telegram уже сегодня
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Твои конкуренты уже думают об этом. Но ты можешь действовать прямо сейчас.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                <span className="flex items-center justify-center space-x-2 font-semibold text-lg">
                  <span>Попробовать бесплатно</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-8 py-4 border border-gray-600 rounded-xl hover:border-purple-500 transition-all duration-200 hover:bg-purple-500/10 text-gray-300 hover:text-white font-semibold">
                Связаться с нами
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Техподдержка 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Без комиссий за заказы</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Отмена в любой момент</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};