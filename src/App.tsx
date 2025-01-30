import React, { useState } from 'react';
import { Star, Moon, Sun, Clock, MapPin, Phone, Mail, Calendar, Telescope, History, Users } from 'lucide-react';
import { AuthModal } from './components/AuthModal';
import { Chatbot } from './components/Chatbot';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

function App() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login'
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white font-inter">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Telescope className="w-8 h-8 text-blue-500" />
              <span className="font-space-grotesk text-xl font-bold">Stars from Himalaya</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
                className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition"
              >
                Log In
              </button>
              <button
                onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
                className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1532798369041-b33eb576ef16")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Discover the Universe
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Journey through space and time at India's premier astronomical experience
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 rounded-lg text-lg font-medium hover:bg-blue-700 transition w-full sm:w-auto">
              Book a Visit
            </button>
            <button className="px-8 py-3 bg-white/10 rounded-lg text-lg font-medium hover:bg-white/20 transition w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* History Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <History className="w-10 h-10 text-blue-500 mr-4" />
            <h2 className="font-space-grotesk text-4xl font-bold">Our Legacy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc"
                alt="Historic planetarium"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Established in 1985, Stars from Himalaya began as a humble observatory in the heart of Ahmedabad. Our founder, Dr. Rajesh Patel, envisioned a place where the mysteries of the cosmos would be accessible to all.
              </p>
              <p className="text-lg text-gray-300">
                Over the decades, we've grown into Gujarat's premier astronomical institution, housing state-of-the-art projection systems and telescopes. Our facility has hosted over 1 million visitors, including students, researchers, and astronomy enthusiasts from around the world.
              </p>
              <p className="text-lg text-gray-300">
                Today, we continue our mission of bringing the universe closer to Earth, offering immersive experiences that inspire the next generation of astronomers and space explorers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 text-center">Experience the Cosmos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Sun className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Solar System Shows</h3>
              <p className="text-gray-300 mb-6">Experience immersive journeys through our solar system with state-of-the-art projection technology.</p>
              <button className="text-blue-400 hover:text-blue-300 font-medium">Learn more →</button>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Moon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Night Sky Viewing</h3>
              <p className="text-gray-300 mb-6">Join our evening sessions to observe celestial objects through professional telescopes.</p>
              <button className="text-blue-400 hover:text-blue-300 font-medium">Learn more →</button>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <Calendar className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Special Events</h3>
              <p className="text-gray-300 mb-6">Regular workshops, astronomy clubs, and special astronomical event viewings.</p>
              <button className="text-blue-400 hover:text-blue-300 font-medium">Learn more →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-slate-800 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk text-4xl font-bold mb-12 text-center">Show Timings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-400" />
                Weekdays
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-32">Morning</span>
                  <span>10:00 AM - 11:30 AM</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Afternoon</span>
                  <span>2:00 PM - 3:30 PM</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Evening</span>
                  <span>6:00 PM - 7:30 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-400" />
                Weekends
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-32">Morning</span>
                  <span>9:00 AM - 10:30 AM</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Afternoon</span>
                  <span>1:00 PM - 2:30 PM</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Evening</span>
                  <span>4:00 PM - 5:30 PM</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Night</span>
                  <span>7:00 PM - 8:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Users className="w-10 h-10 text-blue-500 mr-4" />
            <h2 className="font-space-grotesk text-4xl font-bold">Talk to Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white/20 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Near Gujarat Science City<br />
                      Sarkhej-Gandhinagar Highway<br />
                      Ahmedabad, Gujarat 380060<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <p className="text-gray-300">+91 79 2929 4000</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <p className="text-gray-300">info@starsfromhimalaya.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Telescope className="w-8 h-8 text-blue-500" />
            <span className="font-space-grotesk text-xl font-bold ml-3">Stars from Himalaya</span>
          </div>
          <p className="text-center text-gray-400">© 2024 Stars from Himalaya. All rights reserved.</p>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;