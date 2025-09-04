import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Adnan Mujahid
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-white/90">
            Flutter Mobile Application Developer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/80 font-light max-w-3xl mx-auto">
            Building cross-platform apps with beautiful UI and seamless performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="btn-outline-glow text-lg px-8 py-3 rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-3 rounded-full"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/AdnanMujahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/adnanmujahid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:adnanmujahid@example.com"
              className="text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}