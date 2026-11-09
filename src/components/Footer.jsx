import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0f172a] border-t border-white/5 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Left: Logo and Copyright */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary">.dev</span>
            </h3>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Right: Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

        </div>
        
      </div>
    </footer>
  )
}