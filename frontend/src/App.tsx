function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <img src="/src/assets/logo.png" alt="Tech Affairs Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Tech Affairs</h1>
              <p className="text-sm text-gray-600">& Innovative Hub</p>
            </div>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Complete Technology Solutions</h2>
            <p className="text-xl mb-6">Software, Hardware & Everything Between</p>
            <p className="mb-8">From chip-level repairs to custom software development, we deliver comprehensive tech solutions for individuals, small businesses, and enterprises.</p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">View Projects</a>
              <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600">Get in Touch</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/src/assets/hero-image.png" alt="Technology Solutions" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{'</>'}</div>
              <h3 className="text-xl font-semibold mb-4">Software Development</h3>
              <p className="mb-4">Custom web and mobile applications tailored to your business needs</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Web & Mobile Applications</li>
                <li>• Custom Software Solutions</li>
                <li>• Database & Backend Systems</li>
                <li>• API Development & Integration</li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Hardware Solutions</h3>
              <p className="mb-4">From chip-level repairs to custom IoT device development</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Laptop & Computer Repairs (Chip-Level)</li>
                <li>• Custom Hardware Builds</li>
                <li>• ESP32, Arduino, STM32, Raspberry Pi</li>
                <li>• IoT Device Development</li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-4">Training & Consulting</h3>
              <p className="mb-4">Expert knowledge transfer and technical workshops</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Technical Workshops</li>
                <li>• Custom Tutorials</li>
                <li>• Technology Consulting</li>
                <li>• One-on-One Mentoring</li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="/src/assets/My Avatar.jpg" alt="Founder Photo" className="w-full max-w-sm mx-auto rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
              <p className="text-lg mb-4"><strong>Your Name</strong></p>
              <p className="mb-4">With expertise spanning from web development to chip-level repairs, I bring a unique perspective to technology solutions. Whether you're an individual needing laptop repair or an enterprise seeking custom software, I deliver quality results.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read Full Story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/src/assets/project${i}.jpg`} alt={`Project ${i}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Software</span>
                  <h3 className="font-semibold mt-2">Project Title</h3>
                  <p className="text-sm text-gray-600 mt-1">Brief project description</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-lg mb-8">Ready to start your project? Get in touch today.</p>
          <a href="mailto:your-email@example.com" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 inline-block mb-8">Send a Message</a>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <strong>Email</strong>
              <p>your@email.com</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>+234 XXX XXX XXXX</p>
            </div>
            <div>
              <strong>Location</strong>
              <p>Ibadan, Oyo State, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tech Affairs</h3>
              <p>Complete technology solutions from software to hardware.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Software Development</a></li>
                <li><a href="#" className="hover:text-blue-400">Hardware Repairs</a></li>
                <li><a href="#" className="hover:text-blue-400">IoT Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400">Training</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Tech Affairs & Innovative Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App