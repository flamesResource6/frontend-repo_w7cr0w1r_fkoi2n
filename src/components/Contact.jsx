import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_240px_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10">
          <div className="absolute -inset-1 blur-3xl bg-gradient-to-tr from-fuchsia-600/20 via-indigo-500/20 to-cyan-400/20" />
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">Let’s build something impossible</h3>
            <p className="mt-4 text-indigo-100/90 max-w-2xl">
              Open to select collaborations, prototypes, and product sprints. If the problem is hard and the outcome magical, I’m in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:you@example.com" className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">Email me</a>
              <a href="#" className="rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3 text-sm font-semibold text-indigo-200 hover:bg-white/5 transition">Download CV</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
