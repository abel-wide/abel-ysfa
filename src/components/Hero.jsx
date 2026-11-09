import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-primary font-bold tracking-wider uppercase mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">{personalInfo.name}</h1>
          <h2 className="text-xl md:text-2xl text-slate-600 font-semibold mb-6">{personalInfo.title}</h2>
          <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">{personalInfo.about}</p>
          
                    {/* Buttons matching the image */}
          <div className="flex flex-wrap gap-4 mb-8">
            
            {/* Hire Me Button - Blue */}
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-[#0f172a] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/40 hover:-translate-y-1 active:scale-95 group"
            >
              Hire Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            {/* Download CV Button - White Outline */}
            <a 
              href={personalInfo.resumeUrl || "#"} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 active:bg-slate-50 active:scale-95 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
            >
              Download CV
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-2xl text-slate-400">
            {personalInfo.social.github && (
              <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 transition-transform">
                <FaGithub />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 transition-transform">
                <FaLinkedin />
              </a>
            )}
            {personalInfo.social.telegram && (
              <a href={personalInfo.social.telegram} target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 transition-transform">
                <FaTelegram />
              </a>
            )}
          </div>
        </div>

        {/* Right Content (Avatar/Image) */}
        <div className="hidden md:flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-7xl font-bold text-white relative shadow-2xl group-hover:scale-105 transition-transform duration-500">
              {personalInfo.name.charAt(0)}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}