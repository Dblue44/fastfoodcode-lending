import { ArrowRight, Play, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden relative" id={"hero"}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 -right-40 w-60 h-60 bg-purple-600/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            {/* Floating sparkles */}
            <div className="absolute -top-10 -left-5 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              <Sparkles className="w-6 h-6 text-purple-400 opacity-60" />
            </div>
            <div className="absolute top-20 -right-8 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}>
              <Sparkles className="w-4 h-4 text-purple-300 opacity-40" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-gradient-x bg-300% inline-block">
                  Создай Telegram мини-апп
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% inline-block" style={{ animationDelay: '0.2s' }}>
                  для своего ресторана
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-gradient-x bg-300% inline-block" style={{ animationDelay: '0.4s' }}>
                  за минуты
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Быстро, дешево и без лишних заморочек. Твои клиенты смогут заказывать прямо из Telegram.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95">
                <span className="flex items-center justify-center space-x-2 font-semibold">
                  <span>Попробовать бесплатно</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>

              <button className="group px-8 py-4 border border-gray-600 rounded-xl hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10 hover:-rotate-1 active:scale-95">
                <span className="flex items-center justify-center space-x-2 font-semibold text-gray-300 group-hover:text-white">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Посмотреть демо</span>
                </span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full duration-2000 animate-ping"></div>
                <span>Настройка за 5 минут</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                <span>Без кода</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="relative z-10 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="bg-gray-800 rounded-xl p-6 shadow-2xl hover:bg-gray-750 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300 hover:scale-102 transform">
                    <div className="text-sm text-purple-300 mb-2">🍕 Пиццерия "У Марио"</div>
                    <div className="text-white font-semibold">Маргарита • 450₽</div>
                    <div className="text-gray-400 text-sm">Томаты, моцарелла, базилик</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors duration-300 hover:scale-102 transform">
                    <div className="text-sm text-gray-400 mb-2">🥗 Салаты</div>
                    <div className="text-white">Цезарь • 320₽</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors duration-300 hover:scale-102 transform">
                    <div className="text-sm text-gray-400 mb-2">🍰 Десерты</div>
                    <div className="text-white">Тирамису • 280₽</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute top-1/2 -right-20 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};