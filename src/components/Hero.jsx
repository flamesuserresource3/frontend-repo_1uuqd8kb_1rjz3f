import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-[0]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Graphic Designer & Video Editor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-gray-700 max-w-xl"
            >
              I craft bold visual identities and cinematic edits for brands, creators, and startups. Clean, modern, and built for impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#work" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-50">
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Subtle overlay gradient to enhance text readability without blocking interactions */}
          <div className="pointer-events-none lg:pointer-events-none lg:block hidden" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
