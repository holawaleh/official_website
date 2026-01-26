import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import softwareImg from "@/assets/service-software.png";
import hardwareImg from "@/assets/service-hardware.png";

// Mock Data
const projects = [
  {
    id: 1,
    title: "Smart Logistics Dashboard",
    category: "software",
    image: softwareImg,
    description: "A real-time fleet tracking system built with React and Node.js.",
    tags: ["React", "Mapbox", "Node.js"]
  },
  {
    id: 2,
    title: "Custom IoT Controller",
    category: "hardware",
    image: hardwareImg,
    description: "ESP32-based industrial automation controller with custom PCB.",
    tags: ["ESP32", "C++", "PCB Design"]
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "software",
    image: heroBg,
    description: "High-performance headless Shopify storefront.",
    tags: ["Next.js", "Shopify", "Tailwind"]
  },
  {
    id: 4,
    title: "Legacy Motherboard Repair",
    category: "hardware",
    image: hardwareImg,
    description: "Component-level restoration of industrial control board.",
    tags: ["Soldering", "Diagnostics", "Legacy Tech"]
  },
];

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<"all" | "software" | "hardware">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Recent Work</h2>
            <p className="text-muted-foreground text-lg">
              From restoring vintage hardware to deploying cloud-native applications.
            </p>
          </div>
          
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {(["all", "software", "hardware"] as const).map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "ghost"}
                onClick={() => setFilter(category)}
                className="capitalize min-w-25"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Card className="group overflow-hidden border-0 bg-transparent h-full flex flex-col">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <Button variant="secondary" className="gap-2">
                            View Case Study <ExternalLink size={16} />
                        </Button>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2 mb-2">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
