import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
  <img 
    src={logo} 
    alt="Tech Affairs Logo" 
    className="h-10 w-10 object-contain transition-transform group-hover:scale-105" 
  />
  <span className="font-heading font-bold text-xl tracking-tight text-foreground">
    Tech<span className="text-primary">Affairs</span>
  </span>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="font-semibold shadow-lg shadow-primary/20">
            Get Started
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-2">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
