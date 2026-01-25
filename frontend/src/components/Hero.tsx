export default function Hero() {
  return (
    <section 
      className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-20 lg:py-28" 
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Complete Technology Solutions
            </h2>
            <p className="text-xl md:text-2xl text-brand-200 font-medium">
              Software, Hardware & Everything Between
            </p>
            <p className="text-lg text-brand-100 leading-relaxed">
              From chip-level repairs to custom software development, we deliver 
              comprehensive tech solutions for individuals, small businesses, and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="inline-block bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-brand-600 transition-all text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-80 lg:h-96 flex items-center justify-center">
            {/* PLACEHOLDER: Add hero image */}
            <div className="text-center text-white/50 px-8">
              <p className="text-lg">Hero Image Goes Here</p>
              <p className="text-sm mt-2">Add to /src/assets/hero-image.png</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}