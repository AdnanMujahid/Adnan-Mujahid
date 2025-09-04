import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "education",
      title: "BS Software Engineering",
      organization: "International Islamic University Islamabad",
      location: "Islamabad, Pakistan",
      period: "2020 - 2024",
      description: "Graduated with a comprehensive understanding of software development principles, algorithms, and modern programming practices. Specialized in mobile application development and software architecture.",
      highlights: ["Software Architecture", "Algorithm Design", "Mobile Development", "Database Systems"]
    },
    {
      type: "work",
      title: "Flutter Developer Intern",
      organization: "Macrosoar Technologies",
      location: "Islamabad, Pakistan",
      period: "Summer 2023",
      description: "Contributed to multiple Flutter projects, focusing on UI/UX implementation and Firebase integration. Worked on cross-platform mobile applications with real-time features.",
      highlights: ["Flutter Development", "Firebase Integration", "UI/UX Implementation", "Team Collaboration"]
    }
  ];

  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Experience & Education
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          My academic background and professional experience in software development.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card 
            key={index}
            className="p-8 card-glass hover-lift animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-primary/10 rounded-full">
                  {exp.type === "education" ? (
                    <GraduationCap className="w-8 h-8 text-primary" />
                  ) : (
                    <Briefcase className="w-8 h-8 text-primary" />
                  )}
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-medium mb-3">
                      {exp.organization}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <Badge 
                      key={highlight} 
                      variant="outline" 
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
