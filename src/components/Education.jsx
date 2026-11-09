import { education, certifications } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Background</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Education & Credentials</h2>
        </div>

        {/* Grid for Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {education.map((ed, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{ed.school}</h3>
                <p className="text-base font-semibold text-slate-700">{ed.degree}</p>
              </div>

              <p className="text-sm text-slate-500 font-medium mb-5">{ed.period}</p>

              <ul className="space-y-3">
                {ed.details?.map((d, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        {certifications && certifications.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12 bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Certifications & Awards</h3>
            <ul className="space-y-4">
              {certifications.map((c, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                  <div>
                    <span className="text-slate-900 font-bold block">{c.title}</span> 
                    <span className="text-slate-500 text-sm">{c.issuer}</span>
                  </div>
                  {c.date && <span className="text-slate-400 text-sm font-medium mt-1 sm:mt-0 bg-slate-50 px-3 py-1 rounded-full">{c.date}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  )
}