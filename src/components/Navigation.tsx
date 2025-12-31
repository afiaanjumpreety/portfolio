import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['about', 'work', 'skills', 'education', 'contact'];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavClick('home')}
            className="text-sm font-medium tracking-tight hover:text-slate-600 transition-colors"
          >
            Afia Anjum
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-sm capitalize transition-colors ${
                  activeSection === item 
                    ? 'text-slate-900 font-medium' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-sm capitalize py-2 text-slate-600 hover:text-slate-900"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
