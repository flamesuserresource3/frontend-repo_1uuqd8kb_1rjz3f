import { Mail, Instagram, Linkedin, Youtube } from 'lucide-react'

function ContactFooter() {
  return (
    <footer id="contact" className="relative py-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Let’s create something bold</h3>
            <p className="mt-2 text-gray-600">Available for freelance, collaborations, and retainer work.</p>
            <a
              href="mailto:hello@avastone.design"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800"
            >
              <Mail size={18} /> hello@avastone.design
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-end">
            <div className="text-gray-700">
              <div className="font-semibold">Follow</div>
              <div className="mt-3 flex items-center gap-3">
                <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50" href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50" href="#" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50" href="#" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <div>© {new Date().getFullYear()} Ava Stone</div>
              <div>Based in Lisbon · Working worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactFooter
