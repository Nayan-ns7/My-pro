
import React, { useEffect } from 'react';

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
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive collection of digital experiences, applications, and technical experiments crafted with precision.
        </p>
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
    