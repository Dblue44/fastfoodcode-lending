import { BarChart3, Users, Settings } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 w-full" id={"features"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Всё под рукой
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Админка проста как Telegram чат — разберётся даже бариста
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Analytics Dashboard */}
          <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Статистика</h3>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 mb-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Заказы сегодня</span>
                  <span className="text-2xl font-bold text-green-400">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Выручка</span>
                  <span className="text-xl font-semibold text-white">23 450₽</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Смотри, сколько заработал и какие блюда популярные
            </p>
          </div>

          {/* Customer Management */}
          <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Клиенты</h3>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 mb-4 space-y-3">
              <div className="flex items-center space-x-3 p-2 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                  И
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Иван П.</div>
                  <div className="text-gray-400 text-xs">3 заказа на 1 890₽</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-slate-800 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                  А
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Анна К.</div>
                  <div className="text-gray-400 text-xs">7 заказов на 4 200₽</div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Веди базу постоянных клиентов и делай персональные предложения
            </p>
          </div>

          {/* Menu Management */}
          <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Меню</h3>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 mb-4 space-y-3">
              <div className="flex items-center justify-between p-2 bg-slate-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="text-lg">🍕</div>
                  <span className="text-white text-sm">Пицца Маргарита</span>
                </div>
                <span className="text-purple-300 text-sm font-medium">450₽</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="text-lg">🥗</div>
                  <span className="text-white text-sm">Цезарь</span>
                </div>
                <span className="text-purple-300 text-sm font-medium">320₽</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Управляй меню одной кнопкой. Скрывай позиции, если закончились продукты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};