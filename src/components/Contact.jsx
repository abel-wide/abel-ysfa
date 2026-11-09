import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Get in Touch</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Let's Work Together</h2>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 shadow-sm hover:shadow-lg transition-shadow">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's talk about your project</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm currently open to freelance work and opportunities. Feel free to reach out if you have a project that needs some creative touch.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              {personalInfo.email && (
                <li className="flex items-center gap-3 group cursor-pointer">
                  <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">📧</span>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
                </li>
              )}
              {personalInfo.phone && (
                <li className="flex items-center gap-3 group cursor-pointer">
                  <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">📱</span>
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">{personalInfo.phone}</a>
                </li>
              )}
              {personalInfo.location && (
                <li className="flex items-center gap-3 group">
                  <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">📍</span>
                  <span>{personalInfo.location}</span>
                </li>
              )}
            </ul>
          </div>

          <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault()
              const name = e.target.name.value
              const email = e.target.email.value
              const msg = e.target.message.value
              window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(msg + '\n\nFrom: ' + email)}`
            }}>
            <input name="name" required placeholder="Your Name" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" />
            <input name="email" type="email" required placeholder="Your Email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" />
            <textarea name="message" required rows="5" placeholder="Your Message" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm resize-none" />
            <button type="submit" className="bg-primary hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all w-full shadow-lg shadow-primary/30 hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}