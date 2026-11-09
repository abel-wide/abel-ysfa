import { recommendations } from '../data/portfolioData'

export default function Recommendations() {
  if (!recommendations || recommendations.length === 0) return null
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="section-title text-white">Recommendations</h2>
      <p className="section-subtitle">What others say about my work.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {recommendations.map((r, i) => (
          <div key={i} className="bg-dark/60 border border-white/5 rounded-2xl p-6">
            <p className="text-gray-300 italic mb-4">"{r.quote}"</p>
            <p className="text-white font-semibold">{r.author}</p>
            <p className="text-sm text-gray-500">{r.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}