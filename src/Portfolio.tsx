import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight, Circle } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'work', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { category: "Frontend", items: ["Angular", "React", "TypeScript", "JavaScript", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Java", "Swift"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Other", items: ["Project Management", "Business Development", "Technical Documentation"] }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium tracking-tight hover:text-slate-600 transition-colors"
            >
              Afia Anjum
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              {['about', 'work', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm capitalize transition-colors ${
                    activeSection === item 
                      ? 'text-slate-900 font-medium' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-6 py-4 space-y-3">
              {['about', 'work', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-sm capitalize py-2 text-slate-600 hover:text-slate-900"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <p className="text-sm text-slate-500 tracking-wide mb-4">ABOUT ME</p>
              
              {/* Profile Image */}
              <div className="mt-8 hidden md:block">
                <div className="aspect-square w-full max-w-xs rounded-lg overflow-hidden bg-slate-200">
                  <img 
                    src="https://via.placeholder.com/400x400?text=Your+Photo" 
                    alt="Afia Anjum"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8 space-y-6">
              {/* Mobile Profile Image */}
              <div className="md:hidden mb-8">
                <div className="aspect-square w-48 mx-auto rounded-lg overflow-hidden bg-slate-200">
                  <img 
                    src="https://via.placeholder.com/400x400?text=Your+Photo" 
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
                  <p className="text-sm font-medium">4+ Years</p>
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

      {/* Work Experience Section */}
      <section id="work" className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <p className="text-sm text-slate-500 tracking-wide mb-4">EXPERIENCE</p>
            </div>
            
            <div className="md:col-span-8 space-y-16">
              {/* Current Position */}
              <div className="group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1">Software Engineer</h3>
                    <p className="text-slate-600">SELISE Digital Platforms</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-slate-900 text-white text-xs px-3 py-1 rounded-full mb-2">Current</span>
                    <p className="text-sm text-slate-500">Feb 2023 – Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Circle size={6} className="mt-2 flex-shrink-0 fill-current" />
                    <span>Develop and maintain high-performance front-end applications using microservices architecture</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Circle size={6} className="mt-2 flex-shrink-0 fill-current" />
                    <span>Collaborate on project requirements and manage front-end workflows, overseeing milestones and timelines</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Circle size={6} className="mt-2 flex-shrink-0 fill-current" />
                    <span>Create and manage comprehensive technical and business documentation</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-16"></div>

              {/* Previous Position */}
              <div className="group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1">Assistant Relationship Manager</h3>
                    <p className="text-slate-600">UCB Stock Brokerage Limited</p>
                  </div>
                  <p className="text-sm text-slate-500">Aug 2021 – Nov 2022</p>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Circle size={6} className="mt-2 flex-shrink-0 fill-current" />
                    <span>Built proactive relationships with clients to explore business opportunities and manage portfolios</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Circle size={6} className="mt-2 flex-shrink-0 fill-current" />
                    <span>Delivered professional client service achieving high satisfaction rates</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <Circle size={6} className="mt-2 flex-shrink-0 fill-current" />
                    <span>Managed international roadshow activities including coordination, content creation, and documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <p className="text-sm text-slate-500 tracking-wide mb-4">SKILLS & EXPERTISE</p>
            </div>
            
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-12">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-xs text-slate-400 uppercase tracking-wide mb-4">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="text-sm text-slate-700">{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section id="education" className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <p className="text-sm text-slate-500 tracking-wide mb-4">EDUCATION & ACHIEVEMENTS</p>
            </div>
            
            <div className="md:col-span-8 space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-xs text-slate-400 uppercase tracking-wide mb-6">Education</h3>
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium mb-1">BSc. Computer Science & Engineering</h4>
                      <p className="text-sm text-slate-600">BRAC University</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">2015 – 2019</p>
                      <p className="text-sm text-slate-900 font-medium mt-1">CGPA 3.59/4.00</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium mb-1">Higher Secondary Certificate</h4>
                      <p className="text-sm text-slate-600">Patuakhali Govt. Women's College</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">2014</p>
                      <p className="text-sm text-slate-900 font-medium mt-1">GPA 5.00/5.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-16"></div>

              {/* Achievements */}
              <div>
                <h3 className="text-xs text-slate-400 uppercase tracking-wide mb-6">🏆 Selected Achievements</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-1">🥈 2nd Runner-up, Women's Day Innovation Challenge</h4>
                    <p className="text-sm text-slate-600">Facebook Developer Circle – Dhaka</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">🎯 Selected Team, BRACATHON 2</h4>
                    <p className="text-sm text-slate-600">Among 200 participating teams</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">👥 Assistant Director - IT</h4>
                    <p className="text-sm text-slate-600">BRAC University Adventure Club (2017-2018)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2025 Afia Anjum</p>
          <p className="text-sm text-slate-400">Designed & Built with React</p>
        </div>
      </footer>
    </div>
  );
}
