export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-3xl w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-slate-500 tracking-wide">SOFTWARE ENGINEER</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
              Building digital<br />experiences with<br />precision & care
            </h1>
          </div>
          
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            I'm Afia, a software engineer from Dhaka, Bangladesh. I specialize in crafting 
            scalable web applications with modern technologies and microservices architecture.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <a 
              href="https://linkedin.com/in/afiaanjumpreety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a 
              href="https://github.com/afiaanjumpreety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a 
              href="https://dev.to/2apreety18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Dev.to
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
