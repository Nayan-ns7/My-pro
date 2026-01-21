
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ProjectsPage from './components/ProjectsPage';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [stars, setStars] = useState<{top: number, left: number, delay: number}[]>([]);

  const projects = [
    {
      title: "Algorithmic Trading Interface",
      description: "Real-time data visualization platform for high-frequency trading.",
      tags: ["React", "WebSockets"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT68CFIChSWZi1x5uKIoj0E4UQPgdP4nLM1oMaxz4awGE7W_zxLXPTu98PxH5WaXXG2hQe25HHPX_DhV_f6uqyruazJxY2TOvyDXti_gTG5Dmv3Lxzu-1_T_o2GrNOQ7MLMwbKnYy9h8hGdg9x7MqKTlX-TZ-4ticVN-sCwXVfb8mMdacvCOPHuNKVoL0GJg-sW0NRVGV37kpW_DOwIiPzlV3USb1CIPd3WLJh8olLxGuGYJ_WYmgRnixd6PufhgbgEnDO2bZFBK8",
      gallery: [
        "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Cloud IDE Platform",
      description: "A browser-based integrated development environment for teams.",
      tags: ["Next.js", "Monaco"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607799275518-d580e11cc636?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D dashboard for monitoring deep learning models.",
      tags: ["Three.js", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Immersive 3D Portfolio",
      description: "A gravity-defying architectural visualization platform for creative agencies.",
      tags: ["WebGL", "GSAP"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "NeonGym Fitness",
      description: "Premium fitness infrastructure platform featuring biometric tracking and elite performance scheduling.",
      tags: ["Next.js", "Tailwind", "Framer"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574680096141-1cddd32e011e?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Visionix AI Platform",
      description: "Enterprise computer vision system for automated quality assurance and safety monitoring.",
      tags: ["Python", "OpenCV", "React"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1535378437327-10ff28d885a1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Generate static stars
    const newStars = Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setStars(newStars);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinates to 0-1
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigateToHome = () => {
    setMobileMenuOpen(false);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const navigateToProjects = () => {
    setMobileMenuOpen(false);
    setCurrentView('projects');
  };

  // Calculate parallax offset (max 30px shift for float effect)
  const bgOffsetX = (mousePos.x - 0.5) * 60;
  const bgOffsetY = (mousePos.y - 0.5) * 60;

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-black dark:selection:text-white">
      {/* Immersive Interactive Background Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        
        {/* Parallax Background Image - Abstract Neon Waves */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out opacity-40 dark:opacity-60"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2600&auto=format&fit=crop")',
            transform: `translate(${-bgOffsetX}px, ${-bgOffsetY}px) scale(1.15)`
          }}
        />

        {/* Twinkling Stars */}
        {stars.map((star, i) => (
           <div 
             key={i}
             className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
             style={{
               top: `${star.top}%`,
               left: `${star.left}%`,
               animationDelay: `${star.delay}s`,
               opacity: 0.6
             }}
           />
        ))}

        {/* Shooting Stars */}
        <div className="absolute top-[10%] left-[10%] w-[1px] h-[1px] shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] animate-shooting" style={{ animationDelay: '2s' }}>
             <div className="absolute top-0 right-0 w-[150px] h-[1px] bg-gradient-to-l from-transparent to-white/80 transform origin-right -rotate-45" />
        </div>
        <div className="absolute top-[40%] left-[60%] w-[1px] h-[1px] shadow-[0_0_10px_2px_rgba(53,158,255,0.8)] animate-shooting" style={{ animationDelay: '7s', animationDuration: '6s' }}>
             <div className="absolute top-0 right-0 w-[100px] h-[1px] bg-gradient-to-l from-transparent to-primary/80 transform origin-right -rotate-45" />
        </div>

        {/* Interactive Mouse Spotlight */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(53, 158, 255, 0.15), transparent 60%)`,
            mixBlendMode: theme === 'dark' ? 'screen' : 'multiply'
          }}
        />

        {/* Floating Ambient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] animate-float opacity-30 dark:opacity-20 mix-blend-overlay" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-500/20 rounded-full blur-[120px] animate-float-delayed opacity-30 dark:opacity-20 mix-blend-overlay" />
        
        {/* Grid Overlay for Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <Navbar 
        scrolled={scrolled} 
        onNavigateHome={navigateToHome} 
        onNavigateProjects={navigateToProjects}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main className="transition-all duration-500 relative z-10">
        {currentView === 'home' ? (
          <>
            <Hero />
            
            {/* Project Section (Featured) */}
            <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white transition-colors">Selected Works</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-lg dark:shadow-none flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                      
                      {/* View Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-white/90 dark:bg-black/80 text-slate-900 dark:text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                          </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white transition-colors group-hover:text-primary">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 transition-colors flex-1 line-clamp-2">{project.description}</p>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded uppercase font-bold text-slate-600 dark:text-slate-300 transition-colors">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                 <button onClick={navigateToProjects} className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    View All Projects
                 </button>
              </div>
            </section>
          </>
        ) : (
          <ProjectsPage projects={projects} onProjectClick={setSelectedProject} />
        )}
        <Footer />
      </main>

      {/* Project Gallery Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[80] bg-white/95 dark:bg-[#0f1923]/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center gap-8 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-10'}`}
      >
          <button onClick={navigateToHome} className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">Home</button>
          <button onClick={navigateToProjects} className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">Projects</button>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">Services</a>
          <a href="https://wa.me/917906246682" target="_blank" rel="noopener noreferrer" className="text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">Contact</a>
          
          <div className="w-16 h-1 bg-slate-200 dark:bg-slate-800 rounded-full my-4" />
          
          <button onClick={toggleTheme} className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-400 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800">
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
      </div>

      {/* Mobile Menu FAB */}
      <div className="md:hidden fixed bottom-6 right-6 z-[90]">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`text-white p-4 rounded-full shadow-2xl glow-button transition-all duration-300 ${mobileMenuOpen ? 'bg-slate-800 rotate-90' : 'bg-primary rotate-0'}`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
