import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import flashChatMockup from "@/assets/flash-chat-mockup.jpg";
import currencyExchangeMockup from "@/assets/currency-exchange-mockup.jpg";
import lawyerAppMockup from "@/assets/lawyer-app-mockup.jpg";
import mentalHealthMockup from "@/assets/mental-health-app-mockup.jpg";

export function Projects() {
  const projects = [
    {
      title: "Flash Chat App",
      description: "Real-time chat application built with Flutter and Firebase. Features include user authentication, instant messaging, and beautiful chat bubbles with modern UI design.",
      image: flashChatMockup,
      technologies: ["Flutter", "Firebase", "Dart", "Real-time DB"],
      githubUrl: "https://github.com/AdnanMujahid/",
      liveUrl: "https://play.google.com"
    },
    {
      title: "Currency Exchange App",
      description: "USD to PKR currency converter with real-time exchange rates. Built using both Java and Flutter with clean architecture and responsive design.",
      image: currencyExchangeMockup,
      technologies: ["Flutter", "Java", "REST API", "Material Design"],
      githubUrl: "https://github.com/AdnanMujahid/",
      liveUrl: "https://play.google.com"
    },
    {
      title: "Lawyer Hiring Platform",
      description: "Multi-user platform connecting clients with lawyers. Features Firebase authentication, role-based dashboards, and comprehensive user management system.",
      image: lawyerAppMockup,
      technologies: ["Flutter", "Firebase", "Authentication", "Multi-role"],
      githubUrl: "https://github.com/AdnanMujahid/",
      liveUrl: "https://play.google.com"
    },
    {
      title: "Mental Health Advisor",
      description: "AI-powered wellness chatbot built with Flutter Web. Integrates LangChain for intelligent conversations and Firebase for data management.",
      image: mentalHealthMockup,
      technologies: ["Flutter Web", "AI/LangChain", "Firebase", "Chatbot"],
      githubUrl: "https://github.com/AdnanMujahid/",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Here are some of my recent Flutter applications showcasing modern design and cutting-edge functionality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className="overflow-hidden card-glass hover-lift group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-primary">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" className="btn-primary flex items-center gap-2">
                  <Github size={16} />
                  GitHub
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}