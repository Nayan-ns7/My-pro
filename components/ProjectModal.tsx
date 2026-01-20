
import React, { useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full sm:h-auto sm:max-w-5xl sm:max-h-[90vh] bg-white dark:bg-[#0f1923] sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col border-none sm:border border-slate-200 dark:border-slate-800 animate-scale-up">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start bg-white/50 dark:bg-[#0f1923]/50 backdrop-blur-sm z-10 shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white pr-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-md font-bold uppercase tracking-wide">{tag}</span>
              ))}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        
        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
           {/* Hero Image */}
           <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700/50">
             <img src={project.image} alt={project.title} className="w-full h-auto object-cover max-h-[300px] md:max-h-[500px]" />
           </div>

           {/* Detailed Description */}
           <div className="grid md:grid-cols-3 gap-8">
             <div className="md:col-span-2 prose dark:prose-invert max-w-none">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">About the Project</h3>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">{project.description}</p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                 This solution was architected to solve complex user problems through intuitive design and robust engineering. 
                 Key features include real-time data synchronization, responsive layouts across all devices, and an accessible interface compliant with WCAG 2.1 standards.
               </p>
             </div>
             <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Platform</h4>
                  <p className="text-slate-900 dark:text-white font-medium">Web, Mobile, Tablet</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.concat(['Tailwind', 'TypeScript']).map(t => (
                        <span key={t} className="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
             </div>
           </div>

           {/* Gallery Grid */}
           {(project.gallery && project.gallery.length > 0) && (
             <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
               <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">imagesmode</span>
                 Project Gallery
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {project.gallery.map((img, idx) => (
                   <div key={idx} className="group relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-56 md:h-64 cursor-pointer">
                     <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                   </div>
                 ))}
               </div>
             </div>
           )}
        </div>
        
        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0A111A] flex flex-col sm:flex-row justify-end gap-4 shrink-0 pb-12 sm:pb-6">
          <button 
            onClick={onClose} 
            className="px-6 py-4 sm:py-3 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto order-2 sm:order-1"
          >
            Close Details
          </button>
          <button className="px-8 py-4 sm:py-3 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto order-1 sm:order-2">
            View Live Project
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
