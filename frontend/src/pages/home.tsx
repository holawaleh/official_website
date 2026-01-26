import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <ServiceGrid />
        <ProjectShowcase />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
