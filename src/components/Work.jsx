import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neural Canvas',
    tag: 'GenAI Art Tool',
    desc: 'Create storyboards from prompts with controllable diffusion and reference-guided styles.',
  },
  {
    title: 'Realtime Copilot',
    tag: 'Voice + Action Agent',
    desc: 'Low-latency voice interface that executes workflows over APIs and internal tools.',
  },
  {
    title: 'Hologrid',
    tag: '3D Product Explorer',
    desc: 'Spatial interface powered by vector search that visualizes relationships in 3D.',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_70%_0%,rgba(34,211,238,0.16),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Featured work</h2>
          <a href="#contact" className="text-sm text-indigo-200/90 hover:text-white">Need something specific?</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-fuchsia-600/20 via-indigo-500/20 to-cyan-400/20 blur" />
              <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(400px_120px_at_30%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
                <div className="absolute inset-0 opacity-20 bg-[conic-gradient(at_10%_10%,#22d3ee_10%,transparent_30%,#a78bfa_60%,transparent_80%)] animate-pulse" />
                <div className="relative p-5 h-full flex flex-col justify-end">
                  <div className="text-xs text-indigo-200/80">{p.tag}</div>
                  <div className="text-white font-semibold text-lg">{p.title}</div>
                  <div className="text-sm text-indigo-100/90 mt-1">{p.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
