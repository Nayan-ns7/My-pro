
import React from 'react';

const Footer: React.FC = () => {
  const partners = [
    { name: 'Dreamure', icon: 'change_history' },
    { name: 'SWITCH.WIN', icon: 'data_object' },
    { name: 'sphere', icon: 'language' },
    { name: 'PinSpace', icon: 'layers' },
    { name: 'Visionix', icon: 'token' }
  ];

  return (
    <footer className="py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 mb-16">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-2 group cursor-pointer grayscale hover:grayscale-0 transition-all">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">
                {partner.icon}
              </span>
              <span className="font-display font-bold text-xl text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white transition-colors">Nayan<span className="text-primary">.dev</span></span>
            <span className="text-slate-500 text-sm">© 2024 All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
