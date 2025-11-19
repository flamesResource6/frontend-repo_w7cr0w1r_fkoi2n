import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative bg-slate-950 text-slate-200 selection:bg-fuchsia-500/40 selection:text-white">
      {/* global bg decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_10%,rgba(34,211,238,0.12),transparent_70%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-indigo-200/70">
          © {new Date().getFullYear()} — Crafted with curiosity, discipline, and play.
        </div>
      </footer>
    </div>
  )
}

export default App
