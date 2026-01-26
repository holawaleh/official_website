import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Tech Affairs Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accepting New Projects for 2026
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6">
            Solutions That <br />
            <span className="text-primary">Just Work.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            The bridge between high-end software development and precision hardware engineering. We fix, build, and scale your tech infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-base h-12 px-8 shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8 bg-background/50 backdrop-blur-sm">
              View Our Services
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-4 w-4" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-4 w-4" />
              <span>IoT & Hardware Repair</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary h-4 w-4" />
              <span>Expert Consulting</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element / Illustration Placeholder */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
        >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
               <img src={heroBg} alt="Tech Visualization" className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-xl border border-border shadow-xl animate-pulse-slow">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">System Status</p>
                        <p className="font-bold">100% Operational</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
      
      {/* Tilt Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform origin-bottom-right -skew-y-2 translate-y-12 z-20 border-t border-border/50"></div>
    </div>
  );
}
