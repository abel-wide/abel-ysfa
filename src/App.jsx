import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Timeline from './components/Timeline' // 👈 አዲስ
import Education from './components/Education'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Timeline /> {/* 👈 እዚህ ጋር ተቀይሯል */}
        <Education />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}