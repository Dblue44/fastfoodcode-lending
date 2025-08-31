import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Yummi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Тарифы
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              О продукте
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Войти
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Попробовать бесплатно
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Возможности
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Тарифы
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                О продукте
              </a>
              <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">
                Контакты
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full text-left text-gray-300 hover:text-white transition-colors">
                  Войти
                </button>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200">
                  Попробовать бесплатно
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};