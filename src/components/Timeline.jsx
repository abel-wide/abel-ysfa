import { experience, projects } from '../data/portfolioData'

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Work Experience & Projects</h2>
        </div>

        {/* 1. Work Experience Section */}
        {experience && experience.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-800 mb-10 flex items-center gap-3 border-l-4 border-slate-800 pl-4">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Work Experience
            </h3>

            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                  {/* የጊዜ መስመር (Line & Dot) */}
                  <div className="hidden md:flex flex-col items-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-primary transition-colors shadow-sm">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="w-px h-full bg-slate-200 absolute top-12 bottom-0 -z-10"></div>
                  </div>

                  {/* የካርድ ይዘት */}
                  <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                        <p className="text-primary font-semibold mt-1">{exp.company}</p>
                      </div>
                      <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">
                        🗓️ {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags?.map((t) => (
                        <span key={t} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Featured Projects Section */}
        {projects && projects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-10 flex items-center gap-3 border-l-4 border-slate-800 pl-4">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Featured Projects
            </h3>

            <div className="space-y-12">
              {projects.map((p, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                  {/* የጊዜ መስመር (Line & Dot) */}
                  <div className="hidden md:flex flex-col items-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-primary transition-colors shadow-sm">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="w-px h-full bg-slate-200 absolute top-12 bottom-0 -z-10"></div>
                  </div>

                  {/* የካርድ ይዘት */}
                  <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                          {p.title}
                        </h4>
                        {p.subtitle && <p className="text-primary font-semibold mt-1">{p.subtitle}</p>}
                      </div>
                      <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">
                        🗓️ {p.year}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags?.map((t) => (
                        <span key={t} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                          <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-700">
                        View Project <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}