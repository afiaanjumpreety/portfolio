import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-slate-500 tracking-wide mb-4">GET IN TOUCH</p>
          </div>
          
          <div className="md:col-span-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
              Have a project in mind?<br />Let's create something together.
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:afiaanjumpreety@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors"
              >
                Send Email
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="https://linkedin.com/in/afiaanjumpreety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-900 text-sm hover:border-slate-900 transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="https://github.com/afiaanjumpreety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-900 text-sm hover:border-slate-900 transition-colors"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
