import { skills } from '../data/portfolioData'

const sections = [
  { 
    key: 'languagesAndFrameworks', 
    title: 'Languages & Frameworks', 
    icon: '</>', 
    iconColor: 'text-blue-600', 
    iconBg: 'bg-blue-50' 
  },
  { 
    key: 'databaseAndBackend', 
    title: 'Database & Backend', 
    icon: '🗄️', 
    iconColor: 'text-green-600', 
    iconBg: 'bg-green-50' 
  },
  { 
    key: 'toolsAndDevOps', 
    title: 'Tools & DevOps', 
    icon: '>_', 
    iconColor: 'text-orange-600', 
    iconBg: 'bg-orange-50' 
  },
  { 
    key: 'softSkills', 
    title: 'Soft Skills', 
    icon: '💡', 
    iconColor: 'text-purple-600', 
    iconBg: 'bg-purple-50' 
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">My Expertise</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I utilize to build robust applications.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s) => {
            const items = skills[s.key] || []
            if (items.length === 0) return null
            
            return (
              // እዚህ ጋር hover እና transition ተጨምሯል
              <div 
                key={s.key} 
                className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:border-primary/20 cursor-default"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${s.iconBg} ${s.iconColor} transition-colors duration-300`}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 leading-tight">{s.title}</h3>
                </div>
                
                <hr className="border-slate-200 mb-4" />

                {/* Skills List */}
                <ul className="space-y-3 flex-grow">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}