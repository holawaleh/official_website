export default function Section() {
  const projects = [
    {
      category: 'Software',
      title: 'E-Commerce Platform',
      description: 'Custom online store with payment integration and inventory management'
    },
    {
      category: 'Hardware',
      title: 'IoT Smart Sensor',
      description: 'ESP32-based environmental monitoring system with cloud integration'
    },
    {
      category: 'Software',
      title: 'Business Management App',
      description: 'Mobile-first solution for small business operations and tracking'
    },
    {
      category: 'Hardware',
      title: 'Custom Arduino Controller',
      description: 'Specialized control system for industrial automation'
    }
  ]

  return (
    <>
      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <div className="bg-gray-200 rounded-2xl h-96 lg:h-[500px] overflow-hidden">
              {/* PLACEHOLDER: Add your photo */}
              <div className="h-full flex items-center justify-center text-gray-400 text-center p-8">
                <div>
                  <p className="text-lg">Your Professional Photo</p>
                  <p className="text-sm mt-2">Add to /src/assets/founder-photo.jpg</p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-700">
                Meet the Founder
              </h2>
              <p className="text-xl font-semibold text-brand-600">
                {/* PLACEHOLDER: Your Name Goes Here */}
                [Your Name]
              </p>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  {/* PLACEHOLDER: Write 2-3 paragraphs about yourself here:
                  - How you got started in tech
                  - Your expertise in both software and hardware
                  - What drives your passion
                  - Your vision for Tech Affairs */}
                </p>
                <p>
                  With expertise spanning from web development to chip-level repairs, 
                  I bring a unique perspective to technology solutions. Whether you're 
                  an individual needing laptop repair or an enterprise seeking custom 
                  software, I deliver quality results backed by years of hands-on experience.
                </p>
              </div>
              <a 
                href="#contact" 
                className="inline-block text-brand-600 font-semibold hover:text-brand-700 transition-colors text-lg"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-700 mb-16">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400">
                  {/* PLACEHOLDER: Project image */}
                  <p>Project Image</p>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-brand-600 text-white text-sm px-3 py-1 rounded-full font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-brand-700 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-brand-700 text-white" id="contact">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Ready to start your project? Get in touch today.
          </p>
          <a 
            href="mailto:info@techaffairs.com" 
            className="inline-block bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1 mb-12"
          >
            Send a Message
          </a>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-2">
              <p className="text-brand-200 font-semibold text-lg">Email</p>
              <p className="text-lg">info@techaffairs.com</p>
              {/* PLACEHOLDER: Replace with your actual email */}
            </div>
            <div className="space-y-2">
              <p className="text-brand-200 font-semibold text-lg">Phone</p>
              <p className="text-lg">+234 XXX XXX XXXX</p>
              {/* PLACEHOLDER: Replace with your actual phone */}
            </div>
            <div className="space-y-2">
              <p className="text-brand-200 font-semibold text-lg">Location</p>
              <p className="text-lg">Ibadan, Oyo State, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}