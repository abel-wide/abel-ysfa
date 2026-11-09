import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/50'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-slate-900">
          {personalInfo.name.split(' ')[0]}<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="hover:text-primary transition-colors">{l.name}</a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-white border-t border-slate-100 px-6 pb-4 space-y-3">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-slate-600 hover:text-primary py-2">{l.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}