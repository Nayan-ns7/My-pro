
import React, { useState, useRef } from 'react';

interface ContactProps {
  onGoHome: () => void;
}

const Contact: React.FC<ContactProps> = ({ onGoHome }) => {
  const brandImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDT68CFIChSWZi1x5uKIoj0E4UQPgdP4nLM1oMaxz4awGE7W_zxLXPTu98PxH5WaXXG2hQe25HHPX_DhV_f6uqyruazJxY2TOvyDXti_gTG5Dmv3Lxzu-1_T_o2GrNOQ7MLMwbKnYy9h8hGdg9x7MqKTlX-TZ-4ticVN-sCwXVfb8mMdacvCOPHuNKVoL0GJg-sW0NRVGV37kpW_DOwIiPzlV3USb1CIPd3WLJh8olLxGuGYJ_WYmgRnixd6PufhgbgEnDO2bZFBK8";
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // --- GOOGLE FORM CONFIGURATION ---
  // The URL where the form data is POSTed. Derived from your iframe source.
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeYR_MPEHdxOIPcI7yoW9ro8CnIOwXk_xt32_M9trS3v2hqcg/formResponse";
  
  // --- FIELD MAPPING ---
  // IMPORTANT: You must replace these placeholder IDs with the actual 'entry.XXXXXX' IDs from your Google Form.
  // How to find them:
  // 1. Open your Google Form in edit mode.
  // 2. Click the three dots (top right) -> "Get pre-filled link".
  // 3. Fill in dummy data (e.g., "NameTest", "EmailTest").
  // 4. Click "Get Link", copy it, and paste it into a text editor.
  // 5. You will see parameters like '&entry.123456=NameTest'. Use those numbers below.
  const FORM_FIELDS = {
    name: "entry.2005620554",    // Replace with actual 'Name' field ID
    email: "entry.1045781291",   // Replace with actual 'Email' field ID
    subject: "entry.1065046570", // Replace with actual 'Subject' field ID
    message: "entry.1166974658"  // Replace with actual 'Message' field ID
  };

  const handleSubmit = (e: React.FormEvent) => {
    // We intentionally DO NOT call e.preventDefault().
    // This allows the form to naturally submit its data to the target iframe.
    
    // We create a loading effect. Using a small timeout ensures the submit event 
    // isn't interrupted by an immediate state re-render.
    setTimeout(() => {
      setIsSubmitting(true);
    }, 50);

    // Since we can't detect when the cross-origin iframe finishes loading, 
    // we simulate a success delay (1.5 seconds) then show the success message.
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      if (formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-0 flex flex-col md:flex-row bg-slate-50 dark:bg-[#0A111A] transition-colors duration-500">
      {/* Left Panel: Visual Identity */}
      <div className="w-full md:w-5/12 relative flex flex-col justify-center px-6 md:px-20 py-12 md:py-16 overflow-hidden">
        {/* Visual Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#359EFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center md:items-start">
          {/* Main Visual: Big Wireframe Branding Image */}
          <div className="mb-8 md:mb-12 w-full flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-80 md:h-80 relative group">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
                <img 
                    src={brandImage} 
                    alt="Main Branding Image" 
                    className="w-full h-full object-contain relative z-10 animate-float drop-shadow-[0_0_30px_rgba(53,158,255,0.4)] dark:invert" 
                />
            </div>
          </div>

          <div className="mb-6 flex flex-col items-center md:items-start">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.4em] text-primary uppercase mb-2">Architecting Value</h3>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 dark:text-white text-center md:text-left leading-tight transition-colors">
              Let's <span className="text-[#359EFF]">Connect</span>
            </h1>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-sm mb-12 text-center md:text-left leading-relaxed transition-colors">
            Ready to transform your ideas into high-performance digital reality? Start a secure conversation today.
          </p>

          <div className="flex gap-8 mt-auto pt-4 md:pt-10">
             <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
             </a>
             <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
             <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
          </div>
        </div>
      </div>

      {/* Right Panel: Contact Form */}
      <div className="w-full md:w-7/12 bg-white dark:bg-[#020810] flex flex-col justify-center px-6 md:px-20 py-12 md:py-16 transition-colors duration-500">
        <div className="max-w-2xl w-full mx-auto">
          
          {/* Hidden Iframe for Google Form Submission */}
          <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            style={{display: 'none'}} 
          ></iframe>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-in">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Message Received</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md">
                Thank you for reaching out. I've received your details and will get back to you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary hover:text-blue-600 font-bold transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase block mb-2">Protocol: Messaging</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Send a Message</h2>
              </div>

              <form 
                ref={formRef}
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" 
                      name={FORM_FIELDS.name}
                      required
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 dark:bg-[#0A111A] border border-slate-200 dark:border-slate-800 rounded-lg px-6 py-4 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name={FORM_FIELDS.email}
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-slate-50 dark:bg-[#0A111A] border border-slate-200 dark:border-slate-800 rounded-lg px-6 py-4 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                  <input 
                    type="text" 
                    name={FORM_FIELDS.subject}
                    required
                    placeholder="Project Inquiry" 
                    className="w-full bg-slate-50 dark:bg-[#0A111A] border border-slate-200 dark:border-slate-800 rounded-lg px-6 py-4 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea 
                    name={FORM_FIELDS.message}
                    required
                    rows={6}
                    placeholder="Tell me about your project details..." 
                    className="w-full bg-slate-50 dark:bg-[#0A111A] border border-slate-200 dark:border-slate-800 rounded-lg px-6 py-4 text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-cyan-500/20 group touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>}
                </button>
              </form>
            </>
          )}

          {/* Contact Details Footer */}
          <div className="mt-12 md:mt-16 pt-10 border-t border-slate-200 dark:border-slate-900 grid sm:grid-cols-2 gap-8 transition-colors">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-slate-900 dark:text-white font-medium transition-colors">Nayan@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-slate-900 dark:text-white font-medium transition-colors">7906245582</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <button onClick={onGoHome} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium flex items-center justify-center gap-2 mx-auto p-4">
                <span className="material-symbols-outlined text-base">home</span>
                Back to Home
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
