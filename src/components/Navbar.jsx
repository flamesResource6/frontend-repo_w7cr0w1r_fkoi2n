import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-0 blur-lg bg-gradient-to-tr from-fuchsia-500 via-indigo-400 to-cyan-400 opacity-60 group-hover:opacity-90 transition" />
                <div className="relative rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-400 to-cyan-400 p-[2px]">
                  <div className="rounded-[10px] bg-slate-950 px-3 py-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-300" />
                    <span className="text-sm font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">FS AI Dev</span>
                  </div>
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm text-slate-200/90 hover:text-white hover:bg-white/5 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-3 py-3">
              <div className="grid"> 
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-slate-200/90 hover:text-white hover:bg-white/5 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
