export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["Angular", "React", "TypeScript", "JavaScript", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Java", "Swift"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Other", items: ["Project Management", "Business Development", "Technical Documentation"] }
  ];

  return (
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
  );
}
