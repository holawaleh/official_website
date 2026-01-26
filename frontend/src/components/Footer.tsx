import { Code2, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-primary" />
                <span className="font-heading font-bold text-xl">Tech<span className="text-primary">Affairs</span></span>
            </div>
            <p className="text-secondary-foreground/70 max-w-sm">
                Bridging the gap between software innovation and hardware precision. Your trusted partner for end-to-end technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hardware Repair</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">IoT Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
                © 2026 Tech Affairs. All rights reserved.
            </p>
            <div className="flex gap-4">
                <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
}
