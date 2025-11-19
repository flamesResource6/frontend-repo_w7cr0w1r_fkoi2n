import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200/90 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
            Full‑Stack Developer • AI + Machine Learning
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_0_25px_rgba(99,102,241,0.25)]">
            Building intelligent experiences for the next web
          </h1>

          <p className="mt-6 text-lg md:text-xl text-indigo-100/90 max-w-xl">
            I design and engineer immersive, AI‑powered products with real‑time data, elegant UX, and cinematic interactions. Always exploring the edge of what’s possible.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              <span className="relative inline-flex">
                <span className="absolute inset-0 blur-md bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-400 opacity-60 group-hover:opacity-90" />
                <span className="relative">See featured work</span>
              </span>
            </a>
            <a href="#contact" className="rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3 text-sm font-semibold text-indigo-200 hover:bg-white/5 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
