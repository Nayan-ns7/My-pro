
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onNavigateHome, onNavigateProjects, theme, onToggleTheme }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-4 md:px-12 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-slate-800 shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={onNavigateHome}>
          <div className="w-10 h-10 relative flex items-center justify-center">
            <img 
              alt="Logo" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform dark:invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT68CFIChSWZi1x5uKIoj0E4UQPgdP4nLM1oMaxz4awGE7W_zxLXPTu98PxH5WaXXG2hQe25HHPX_DhV_f6uqyruazJxY2TOvyDXti_gTG5Dmv3Lxzu-1_T_o2GrNOQ7MLMwbKnYy9h8hGdg9x7MqKTlX-TZ-4ticVN-sCwXVfb8mMdacvCOPHuNKVoL0GJg-sW0NRVGV37kpW_DOwIiPzlV3USb1CIPd3WLJh8olLxGuGYJ_WYmgRnixd6PufhgbgEnDO2bZFBK8" 
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-slate-900 dark:text-white transition-colors">
            Nayan<span className="text-primary">.dev</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={onNavigateHome} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors tracking-wide">Home</button>
          <button onClick={onNavigateProjects} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors tracking-wide">Projects</button>
          <a href="#services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors tracking-wide">Services</a>
          <a href="https://wa.me/917906246682" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors tracking-wide">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a 
            href="https://wa.me/917906246682"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-500 hover:to-primary text-white px-8 py-3 rounded-full font-bold text-sm glow-button transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    