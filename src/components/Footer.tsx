import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Adnan Mujahid</h3>
            <p className="text-primary-foreground/80">
              Flutter Mobile Application Developer
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/AdnanMujahid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/adnanmujahid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:adnanmujahid@example.com"
                className="text-primary-foreground/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 flex items-center justify-center md:justify-end">
              Portfolio
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              © {currentYear} Adnan Mujahid. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
