import React from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400">
              I'm always open to discussing new learning opportunities, projects, or just chatting about tech.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 md:p-12 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email Me</p>
                      <p className="text-white font-medium">nibedan@student-mail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-white font-medium">Campus / Remote</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-slate-300 italic">
                    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
                  </p>
                  <p className="text-cyan-400 mt-2 text-sm font-bold">- Brian Herbert</p>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-600 resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                <button 
                  type="button" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;