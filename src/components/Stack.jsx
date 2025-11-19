import { Database, Cpu, Globe, Atom, ServerCog, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Cpu, title: 'AI + ML', desc: 'Transformers, diffusion, agents, retrievers, vector search' },
  { icon: ServerCog, title: 'Backends', desc: 'FastAPI, Node, GraphQL, streaming, websockets' },
  { icon: Database, title: 'Data', desc: 'MongoDB, Postgres, feature stores, pipelines' },
  { icon: Globe, title: 'Frontend', desc: 'React, Tailwind, 3D, animations, shadcn/ui' },
  { icon: Atom, title: 'Infra', desc: 'Docker, edge runtimes, CI/CD, observability' },
]

export default function Stack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_30%_0%,rgba(168,85,247,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Technologies I bend</h2>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200/90">
            <Sparkles className="w-4 h-4" />
            Shipping with taste and rigor
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-fuchsia-600/20 via-indigo-500/20 to-cyan-400/20 blur" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div className="text-white font-semibold">{title}</div>
                </div>
                <div className="mt-3 text-sm text-indigo-200/90">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
