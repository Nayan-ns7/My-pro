
import React, { useEffect, useState, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
}

interface ProjectsPageProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, onProjectClick }) => {
  const [isSleeping, setIsSleeping] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll for cat animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Threshold to prevent jitter
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        if (currentScrollY > lastScrollY.current) {
            // Scrolling Down -> Sleep
            setIsSleeping(true);
        } else {
            // Scrolling Up -> Wake
            setIsSleeping(false);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen animate-fade-in relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span>Portfolio</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
          All <span className="text-primary">Works</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          A comprehensive collection of digital experiences, applications, and technical experiments crafted with precision.
        </p>
        
        {/* Animated Cat Separator */}
        <div className="relative h-20 w-full flex justify-center items-end mt-8 mb-4">
            {/* Cat Container */}
            <div className="absolute bottom-[2px] z-10 transition-all duration-500 ease-in-out">
                {/* Awake Cat */}
                <div className={`transition-all duration-500 transform origin-bottom ${isSleeping ? 'opacity-0 scale-75 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <style>
                            {`
                            .tail-wag { animation: tailWag 3s ease-in-out infinite; transform-origin: 45px 45px; }
                            .blink-eyes { animation: blink 4s infinite; transform-origin: center; }
                            @keyframes tailWag { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
                            @keyframes blink { 0%, 96%, 100% { transform: scaleY(1); } 98% { transform: scaleY(0.1); } }
                            `}
                        </style>
                        {/* Tail */}
                        <path d="M45 45C45 45 52 35 52 25C52 15 45 10 45 10" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" className="tail-wag dark:stroke-slate-400"/>
                        {/* Body */}
                        <path d="M20 50C20 50 15 35 25 30C35 25 45 45 40 50" fill="white" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
                        {/* Head */}
                        <circle cx="30" cy="22" r="14" fill="white" stroke="#334155" strokeWidth="2"/>
                        {/* Ears */}
                        <path d="M18 16L20 6L30 12" fill="white" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M42 16L40 6L30 12" fill="white" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
                        {/* Face */}
                        <g className="blink-eyes">
                            <circle cx="25" cy="20" r="2" fill="#1e293b"/>
                            <circle cx="35" cy="20" r="2" fill="#1e293b"/>
                            <circle cx="26" cy="19" r="0.5" fill="white"/>
                            <circle cx="36" cy="19" r="0.5" fill="white"/>
                        </g>
                        <path d="M28 26C28 26 29 27 30 26C31 27 32 26 32 26" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
                        {/* Pink Cheeks */}
                        <circle cx="22" cy="24" r="1.5" fill="#f472b6" opacity="0.6"/>
                        <circle cx="38" cy="24" r="1.5" fill="#f472b6" opacity="0.6"/>
                    </svg>
                </div>
                
                {/* Sleeping Cat */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 transform origin-bottom ${isSleeping ? 'opacity-100 scale-100 translate-y-1' : 'opacity-0 scale-90 -translate-y-2'}`}>
                     <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <style>
                            {`
                            .snooze-z { animation: floatZ 2.5s ease-out infinite; opacity: 0; }
                            .snooze-z-2 { animation: floatZ 2.5s ease-out infinite 0.8s; opacity: 0; }
                            .breathe { animation: breathe 3s ease-in-out infinite; }
                            @keyframes floatZ { 0% { transform: translate(0,0) scale(0.5); opacity: 0; } 30% { opacity: 1; } 100% { transform: translate(15px, -15px) scale(1.2); opacity: 0; } }
                            @keyframes breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.05); } }
                            `}
                        </style>
                        {/* Tail Curled */}
                        <path d="M48 30C52 30 55 25 50 15" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" className="dark:stroke-slate-400"/>
                        {/* Body Loaf */}
                        <ellipse cx="30" cy="25" rx="20" ry="12" fill="white" stroke="#334155" strokeWidth="2" className="breathe"/>
                        {/* Head Low */}
                        <circle cx="20" cy="22" r="11" fill="white" stroke="#334155" strokeWidth="2"/>
                        {/* Ears Flat */}
                        <path d="M10 16L12 10L18 14" fill="white" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M22 14L28 10L30 16" fill="white" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
                        {/* Closed Eyes */}
                        <path d="M15 22C15 22 16 23 17 22" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M23 22C23 22 24 23 25 22" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
                        {/* Zzz Animation */}
                        <g transform="translate(40, 10)">
                            <path d="M0 5L5 5L0 10L5 10" stroke="#359EFF" strokeWidth="1.5" className="snooze-z"/>
                            <path d="M8 -5L12 -5L8 0L12 0" stroke="#359EFF" strokeWidth="1.5" className="snooze-z-2"/>
                        </g>
                    </svg>
                </div>
            </div>
            
            {/* The Line */}
            <div className="w-24 h-[2px] bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div 
            key={i} 
            onClick={() => onProjectClick(project)}
            className="group bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-lg dark:shadow-none flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
            style={{ animation: `fade-in 0.5s ease-out forwards ${i * 0.1}s`, opacity: 0 }}
          >
            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 dark:bg-black/80 text-slate-900 dark:text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white transition-colors group-hover:text-primary">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 transition-colors flex-1 line-clamp-2">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded uppercase font-bold text-slate-600 dark:text-slate-300 transition-colors border border-slate-300 dark:border-slate-700">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
