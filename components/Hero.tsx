
import React from 'react';

const Hero: React.FC = () => {
  const techIcons = [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEvckOVfs0WfTGIQdqFgE9RMeLA2NgM-GX6zyIsvCG4HZqKvDvMoATWPoNQKdw7ckXaEQQAjzCzsjo7rMFGx9b-hyfhyYjDgyFo3tFyGRHRbEqRjd-RTq2aluHVOVYqzrI5PMM84RJzsyhfMqmcdSxjTGwlS8Ur5DJcUV4GPTVe1ugwcT5QX00pRFvl8CHf4IjyCq30H4NIaw0BYSHFN_U_iZkrkG_qpvWCstANlnFogSM_hbIJzoRCSLPBD_FrDkdYgrQcCE2YNs', alt: 'React' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ro61jvLVK9yYCPBT7UWW2pIQ1s8TztUVY8lN70IZuWgXXip7GCm7nac4rjaPIIUbSbhaUQ-demjhxrS6MaEd2gpUpPRpt2ogJ3CZLCJCY2Xp4MBzyLewPOrA7ukLuOH6geyYLWj2oHulEWFWZ1fjr69AY1ERO38RnBJnY9H8bQIrLgkV7jaBhtYTMlNlaaOEP_7Uzdvv4ZfgVDiurhuZkvan3zdo0uA5wCqZ09WU81UxiCXW_EBVfd_G4lnUYavUGAfGDBBaClc', alt: 'Next.js', invert: true },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUXRD0i-VM0r3vxDipbEaPjsKt7Axvfwr_yQhMFwdUKQx3CO_Zgv7ZpqSfsc6J5P26ZLDnp69RBWNemvss0ZQHcC6WNr0W0ftvMIIG13G5p2sTvL-KKagLuwLGDx_4lQKD4skbr9kSIIhKLEEqgtPq7SNaxnDfHkKQkRvfGtqpD19wHQWpb5rdPl4Wq_2LOOMFy9GNTvVax1NkD0ipEh-SW5_U2eE2Ohw89WUkr4vnt0UHJnabdiwMjvh5pQjXMIdtJBkZNXP18v8', alt: 'TypeScript' }
  ];

  const brandImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDT68CFIChSWZi1x5uKIoj0E4UQPgdP4nLM1oMaxz4awGE7W_zxLXPTu98PxH5WaXXG2hQe25HHPX_DhV_f6uqyruazJxY2TOvyDXti_gTG5Dmv3Lxzu-1_T_o2GrNOQ7MLMwbKnYy9h8hGdg9x7MqKTlX-TZ-4ticVN-sCwXVfb8mMdacvCOPHuNKVoL0GJg-sW0NRVGV37kpW_DOwIiPzlV3USb1CIPd3WLJh8olLxGuGYJ_WYmgRnixd6PufhgbgEnDO2bZFBK8";

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Large Decorative Branding Background - Added Lime Glow and Shadow */}
      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] opacity-[0.05] pointer-events-none animate-float blur-sm">
        <img 
          src={brandImage} 
          alt="" 
          className="w-full h-full object-contain dark:invert drop-shadow-[0_0_20px_rgba(163,230,53,0.3)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for projects
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-extrabold leading-[1.1] mb-8 text-slate-900 dark:text-white transition-colors">
            I'm <span className="text-primary drop-shadow-[0_0_15px_rgba(163,230,53,1)]">Nayan</span>, I build beautiful high-performance websites.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-colors">
            Crafting high-performance, accessible, and visually stunning web applications with a focus on cutting-edge engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all hover:scale-105 glow-button">
              Start Project
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="px-8 py-4 rounded-xl font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-slate-900 dark:text-white backdrop-blur-sm">
              View Resume
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-900 object-cover" src={`https://picsum.photos/seed/${i + 10}/100/100`} />
              ))}
            </div>
            <div className="text-sm text-left">
              <span className="font-bold text-slate-900 dark:text-white transition-colors">Trusted by 50+ clients</span>
              <p className="text-slate-500">across 12 countries</p>
            </div>
          </div>
        </div>

        {/* Orbit Visualization - Responsive Container */}
        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center transition-all duration-500">
            
            {/* Concentric Rings (Percentage Based) */}
            {['40%', '70%', '100%'].map((size, idx) => (
              <div 
                key={idx} 
                className="absolute border border-slate-300/50 dark:border-slate-700/30 rounded-full transition-colors" 
                style={{ width: size, height: size }}
              />
            ))}

            {/* Center Piece - Branding Image */}
            <div className="absolute flex flex-col items-center justify-center z-10 w-32 h-32 md:w-48 md:h-48">
               <img 
                alt="Center Logo Glow" 
                className="absolute inset-0 w-full h-full object-contain opacity-30 blur-md scale-150 animate-pulse-glow dark:invert" 
                src={brandImage} 
              />
              <img 
                src={brandImage}
                alt="Branding Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-20 dark:invert"
              />
              <div className="relative text-center mt-2">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white text-glow transition-colors">50+</div>
                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Projects</div>
              </div>
            </div>

            {/* Orbiting Tech Stack - CSS Variable for Radius */}
            <div className="absolute inset-0 animate-spin-slow [animation-duration:30s]">
              {techIcons.map((icon, i) => (
                <div 
                  key={i}
                  className="absolute left-1/2 top-0 -translate-x-1/2 flex items-center justify-center p-2 md:p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl transition-colors [--orbit-radius:100px] sm:[--orbit-radius:140px] md:[--orbit-radius:175px]"
                  style={{ 
                    transform: `rotate(${i * 120}deg) translateY(calc(var(--orbit-radius) * -1)) rotate(-${i * 120}deg)`,
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: `${i * -2}s`
                  }}
                >
                  <img alt={icon.alt} src={icon.src} className={`w-5 h-5 md:w-6 md:h-6 ${icon.invert ? 'dark:invert' : ''}`} />
                </div>
              ))}
            </div>

            {/* Outer Orbiting Items (Project Previews) */}
            <div className="absolute inset-0 animate-spin-reverse-slow [animation-duration:50s]">
              <div 
                className="absolute left-1/2 top-0 -translate-x-1/2 p-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xl transition-colors [--orbit-outer:150px] sm:[--orbit-outer:200px] md:[--orbit-outer:250px]" 
                style={{ transform: 'rotate(45deg) translateY(calc(var(--orbit-outer) * -1)) rotate(-45deg)' }}
              >
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=200&auto=format&fit=crop" className="w-16 h-12 md:w-24 md:h-16 object-cover rounded grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Code Preview 1" />
              </div>
              <div 
                className="absolute left-1/2 top-0 -translate-x-1/2 p-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xl transition-colors [--orbit-outer:150px] sm:[--orbit-outer:200px] md:[--orbit-outer:250px]" 
                style={{ transform: 'rotate(180deg) translateY(calc(var(--orbit-outer) * -1)) rotate(-180deg)' }}
              >
                <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=200&auto=format&fit=crop" className="w-16 h-12 md:w-24 md:h-16 object-cover rounded grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Code Preview 2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary">Explore Work</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
