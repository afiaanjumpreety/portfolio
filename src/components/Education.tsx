export default function Education() {
  return (
    <section id="education" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-sm text-slate-500 tracking-wide mb-4">EDUCATION & ACHIEVEMENTS</p>
          </div>
          
          <div className="md:col-span-8 space-y-16">
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
  );
}
