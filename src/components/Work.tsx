import { Circle } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-slate-500 tracking-wide mb-4">EXPERIENCE</p>
          </div>
          
          <div className="md:col-span-8 space-y-16">
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

            <div className="group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">Assistant Relationship Manager</h3>
                  <p className="text-slate-600">UCB Stock Brokerage Limited</p>
                </div>
                <p className="text-sm text-slate-500">Aug 2021 – Nov 2022 <span className="text-slate-400">(1yr)</span></p>
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
  );
}
