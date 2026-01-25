export default function Services() {
  const services = [
    {
      icon: '</>',
      title: 'Software Development',
      description: 'Custom web and mobile applications tailored to your business needs',
      features: [
        'Web & Mobile Applications',
        'Custom Software Solutions',
        'Database & Backend Systems',
        'API Development & Integration'
      ]
    },
    {
      icon: '⚡',
      title: 'Hardware Solutions',
      description: 'From chip-level repairs to custom IoT device development',
      features: [
        'Laptop & Computer Repairs (Chip-Level)',
        'Custom Hardware Builds',
        'ESP32, Arduino, STM32, Raspberry Pi',
        'IoT Device Development'
      ]
    },
    {
      icon: '📚',
      title: 'Training & Consulting',
      description: 'Expert knowledge transfer and technical workshops',
      features: [
        'Technical Workshops',
        'Custom Tutorials',
        'Technology Consulting',
        'One-on-One Mentoring'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-700 mb-16">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-brand-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
