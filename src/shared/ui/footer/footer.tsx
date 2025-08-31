import { Zap, Send, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Yummi
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Создаём Telegram мини-аппы для ресторанов. Быстро, просто, без заморочек.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-purple-500 transition-colors"
              >
                <Send className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Продукт</h4>
            <div className="space-y-2">
              <a href="#pricing" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Тарифы
              </a>
              <a href="#features" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Возможности
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Компания</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors">
                О нас
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Поддержка</h4>
            <div className="space-y-2">
              <a href="#help" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Помощь
              </a>
              <a href="#docs" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Документация
              </a>
              <a href="#status" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Статус сервиса
              </a>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">hello@yummi.app</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Send className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">@yummi_support</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Yummi. Все права защищены.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};