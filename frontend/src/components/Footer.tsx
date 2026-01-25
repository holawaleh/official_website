export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Tech Affairs',
      content: (
        <p className="text-brand-200 leading-relaxed">
          Complete technology solutions from software to hardware. Building the future, one project at a time.
        </p>
      )
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '#home' },
        { text: 'Services', href: '#services' },
        { text: 'Projects', href: '#projects' },
        { text: 'About', href: '#about' },
        { text: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Software Development', href: '#services' },
        { text: 'Hardware Repairs', href: '#services' },
        { text: 'IoT Solutions', href: '#services' },
        { text: 'Training & Consulting', href: '#services' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { text: 'LinkedIn', href: '#' },
        { text: 'GitHub', href: '#' },
        { text: 'Twitter', href: '#' }
      ]
    }
  ]

  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-brand-300 font-semibold text-lg mb-4">
                {section.title}
              </h3>
              {section.content ? (
                section.content
              ) : (
                <ul className="space-y-2">
                  {section.links?.map((link, i) => (
                    <li key={i}>
                      <a 
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-brand-200 hover:text-brand-300 transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-brand-700 pt-8 text-center text-brand-300">
          <p>&copy; {currentYear} Tech Affairs & Innovative Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}