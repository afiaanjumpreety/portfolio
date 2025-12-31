export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-slate-500 tracking-wide mb-4">ABOUT ME</p>
            
            <div className="mt-8 hidden md:block">
              <div className="aspect-square w-full max-w-xs rounded-lg overflow-hidden bg-slate-200">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt="Afia Anjum"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <div className="md:hidden mb-8">
              <div className="aspect-square w-48 mx-auto rounded-lg overflow-hidden bg-slate-200">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt="Afia Anjum"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              I'm passionate about building modern web applications 🚀 using microservices 
              architecture and frameworks like Angular and React. I love turning complex 
              problems into simple, intuitive interfaces.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 4 years of experience ⏱️, I've worked on large-scale products, 
              managed front-end workflows, and collaborated with cross-functional teams 
              to deliver exceptional user experiences.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              When I'm not coding, you'll find me binge-watching anime 📺, enjoying romcoms, 
              baking 🧁, or exploring new places ✈️. I'm a curious soul with diverse interests—always 
              learning, always creating.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">📍 Based in</p>
                <p className="text-sm font-medium">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">💼 Experience</p>
                <p className="text-sm font-medium">2+ Years <span className="text-slate-500 text-xs">(4+ Total)</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">🎓 Education</p>
                <p className="text-sm font-medium">BSc. CSE, BRAC University</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">✅ Availability</p>
                <p className="text-sm font-medium">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
