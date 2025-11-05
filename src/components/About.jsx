import { motion } from 'framer-motion'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Design meets rhythm</h2>
            <p className="text-gray-700 text-lg">
              I blend strong visual systems with sharp editorial pacing. Whether it’s a brand launch or a 30-second cut for socials, the goal is the same: make it memorable and make it move.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Brand Identity', 'Motion Graphics', 'Video Editing', 'Art Direction', 'Short-form', 'Reels & TikTok'].map((chip) => (
                <span key={chip} className="rounded-full bg-gray-100 text-gray-800 text-xs px-3 py-1">{chip}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-6"
          >
            <Stat value="6+" label="Years" />
            <Stat value="80+" label="Projects" />
            <Stat value="20M+" label="Views" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
