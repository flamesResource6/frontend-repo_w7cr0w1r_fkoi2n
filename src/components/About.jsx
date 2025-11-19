import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Out-of-the-box builder with an AI core</h2>
            <p className="mt-6 text-indigo-100/90 text-lg">
              I blend rigorous engineering with cinematic design. My focus: data-driven systems, edge AI, real-time apps, and playful micro-interactions that make complex tech feel inevitable.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-indigo-200/90">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Generative UX + copilots</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">LLM orchestration + RAG</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Realtime dashboards + websockets</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">3D interfaces with Spline</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -inset-1 blur-2xl bg-gradient-to-tr from-fuchsia-600/30 via-indigo-500/30 to-cyan-400/30" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { k: 'Years', v: '7+' },
                  { k: 'Projects', v: '60+' },
                  { k: 'Awards', v: '12' },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-extrabold text-white">{s.v}</div>
                    <div className="text-xs uppercase tracking-wider text-indigo-200/70">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-indigo-200/90">
                Previously at startups and research labs. I team up with founders and design leaders to ship the improbable.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
