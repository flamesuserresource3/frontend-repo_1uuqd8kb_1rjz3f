import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Futura Brand Reel',
    role: 'Editing · Sound Design',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Muse Creative',
    role: 'Identity · Art Direction',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Neon Streetwear',
    role: 'Campaign · Short-form',
    color: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Orbit App',
    role: 'Product · Motion',
    color: 'from-emerald-500 to-teal-500',
  },
]

function WorkCard({ title, role, color, i }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
    >
      <div className={`h-52 sm:h-60 bg-gradient-to-br ${color} opacity-90`} />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">Case Study</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{role}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
          View project →
        </div>
      </div>
    </motion.a>
  )
}

function WorkGrid() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-2 text-gray-600">A mix of identity, motion, and editorial projects.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
            Book a project
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <WorkCard key={p.title} i={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
