import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Users } from "lucide-react";
import serviceSoftware from "@/assets/service-software.png";
import serviceHardware from "@/assets/service-hardware.png";
import serviceConsulting from "@/assets/service-consulting.png";

const services = [
  {
    id: "software",
    title: "Software Development",
    icon: Code2,
    description: "Custom web and mobile applications built for scale. We handle everything from frontend UI to complex backend APIs.",
    features: ["Web & Mobile Apps", "API Integration", "Cloud Architecture"],
    image: serviceSoftware,
    color: "text-blue-500"
  },
  {
    id: "hardware",
    title: "Hardware Engineering",
    icon: Cpu,
    description: "Expert chip-level repairs and custom IoT solutions. We bridge the physical and digital worlds.",
    features: ["PCB Repair", "IoT & Embedded Systems", "Custom Prototyping"],
    image: serviceHardware,
    color: "text-indigo-500"
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    icon: Users,
    description: "Mentorship, workshops, and strategic guidance for your tech team. Level up your internal capabilities.",
    features: ["1-on-1 Mentoring", "Architecture Reviews", "Tech Workshops"],
    image: serviceConsulting,
    color: "text-cyan-500"
  }
];

export default function ServiceGrid() {
  return (
    <section id="services" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Everything Hub</h2>
          <p className="text-muted-foreground text-lg">
            We don't just write code, and we don't just fix chips. We understand the entire technology stack, from the silicon up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 bg-card">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className={`mb-4 inline-flex p-3 rounded-lg bg-background border border-border w-fit ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:text-primary group-hover:bg-primary/5">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
