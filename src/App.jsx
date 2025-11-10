import { useState } from 'react'
import { Mountain, Map, Phone, Mail, Calendar, Users, ChevronRight } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-sm mb-4">
              <Mountain size={18} /> Uttarakhand • Devbhoomi
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Explore the Himalayas with local experts
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Handcrafted trips across Rishikesh, Mussoorie, Nainital, Auli, Kedarnath, Valley of Flowers and more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#packages" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition">
                View Packages <ChevronRight size={18} />
              </a>
              <a href="#inquiry" className="inline-flex items-center justify-center gap-2 border border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Plan my trip
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/90">
              <div>
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-sm">Happy Travellers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm">Curated Itineraries</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.9/5</p>
                <p className="text-sm">Average Rating</p>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1974&auto=format&fit=crop" alt="Himalayan landscape" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#fff" fillOpacity="1" d="M0,96L80,96C160,96,320,96,480,80C640,64,800,32,960,42.7C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </section>
  )
}

const packages = [
  { title: 'Char Dham Yatra', days: 10, price: 29999, image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyJTIwRGhhbSUyMFlhdHJhfGVufDB8MHx8fDE3NjI3NzU5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
  { title: 'Rishikesh Adventure', days: 4, price: 12999, image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyJTIwRGhhbSUyMFlhdHJhfGVufDB8MHx8fDE3NjI3NzU5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', highlights: ['Rafting', 'Bungee', 'Ganga Aarti'] },
  { title: 'Nainital & Jim Corbett', days: 5, price: 17999, image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyJTIwRGhhbSUyMFlhdHJhfGVufDB8MHx8fDE3NjI3NzU5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', highlights: ['Naini Lake', 'Snow View', 'Safari'] },
  { title: 'Auli Ski Retreat', days: 6, price: 24999, image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyJTIwRGhhbSUyMFlhdHJhfGVufDB8MHx8fDE3NjI3NzU5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', highlights: ['Skiing', 'Cable Car', 'Gorson Bugyal'] }
]

function PackageCard({ p }) {
  return (
    <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 overflow-hidden flex flex-col">
      <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{p.days} Days • Highlights: {p.highlights.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-emerald-600 font-bold text-lg">₹{p.price.toLocaleString('en-IN')}</p>
          <a href="#inquiry" className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:underline">Enquire <ChevronRight size={16} /></a>
        </div>
      </div>
    </div>
  )
}

function ContactStrip() {
  return (
    <div className="bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-6 grid sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3"><Phone className="text-emerald-600" /><div><p className="text-sm text-gray-500">Call us</p><p className="font-semibold">+91-98765 43210</p></div></div>
        <div className="flex items-center gap-3"><Mail className="text-emerald-600" /><div><p className="text-sm text-gray-500">Email</p><p className="font-semibold">hello@uttarakhandtravels.com</p></div></div>
        <div className="flex items-center gap-3"><Map className="text-emerald-600" /><div><p className="text-sm text-gray-500">Office</p><p className="font-semibold">Dehradun, Uttarakhand</p></div></div>
      </div>
    </div>
  )
}

function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', travelers: 1, start_date: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ loading: false, success: `Thanks! We will contact you shortly. Ref: ${data.id}`, error: null })
      setForm({ name: '', email: '', phone: '', destination: '', travelers: 1, start_date: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="inquiry" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Plan your Uttarakhand escape</h2>
            <p className="mt-2 text-gray-600">Tell us a bit about your trip. Our local experts will craft a personalized itinerary and reach out within a few hours.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center gap-2"><Calendar className="text-emerald-600" /> Flexible dates</li>
              <li className="flex items-center gap-2"><Users className="text-emerald-600" /> Group & Family friendly</li>
              <li className="flex items-center gap-2"><Map className="text-emerald-600" /> Offbeat experiences</li>
              <li className="flex items-center gap-2"><Mountain className="text-emerald-600" /> Certified guides</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-gray-50 p-6 rounded-xl ring-1 ring-gray-100 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input value={form.destination} onChange={e=>setForm({...form, destination:e.target.value})} placeholder="Destination / Package" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="number" min={1} max={20} value={form.travelers} onChange={e=>setForm({...form, travelers:Number(e.target.value)})} placeholder="No. of travelers" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="date" value={form.start_date} onChange={e=>setForm({...form, start_date:e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Tell us anything specific you want to include" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button disabled={status.loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              {status.loading ? 'Submitting...' : 'Get a free quote'}
            </button>
            {status.success && <p className="text-emerald-700 text-sm">{status.success}</p>}
            {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg"><Mountain /> Uttarakhand Travels</div>
          <p className="mt-3 text-sm text-gray-400">Local, reliable and personalized travel experiences across the Himalayas.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Destinations</h4>
          <ul className="space-y-2 text-sm">
            <li>Rishikesh</li>
            <li>Nainital</li>
            <li>Mussoorie</li>
            <li>Auli</li>
            <li>Kedarnath</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Experiences</h4>
          <ul className="space-y-2 text-sm">
            <li>Char Dham Yatra</li>
            <li>Wildlife Safari</li>
            <li>Trekking</li>
            <li>Rafting</li>
            <li>Hill Station Retreats</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">Dehradun, Uttarakhand</p>
          <p className="text-sm">+91-98765 43210</p>
          <p className="text-sm">hello@uttarakhandtravels.com</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-sm">© {new Date().getFullYear()} Uttarakhand Travels. All rights reserved.</div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Mountain /> Uttarakhand Travels
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#packages" className="hover:opacity-80">Packages</a>
            <a href="#inquiry" className="hover:opacity-80">Plan Trip</a>
            <a href="/test" className="hover:opacity-80">System Test</a>
          </nav>
        </div>
      </header>

      <Hero />
      <ContactStrip />

      <section id="packages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Popular Packages</h2>
              <p className="text-gray-600 mt-1">Curated by local experts for the best of Devbhoomi.</p>
            </div>
            <a href="#inquiry" className="text-emerald-700 font-semibold hover:underline">Need a custom plan?</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p,i)=> <PackageCard key={i} p={p} />)}
          </div>
        </div>
      </section>

      <InquiryForm />
      <Footer />
    </div>
  )
}

export default App
