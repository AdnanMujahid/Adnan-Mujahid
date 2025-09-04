import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Database, 
  Cloud, 
  Code, 
  Palette, 
  Brain,
  GitBranch,
  Shield
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "iOS Development", level: 85 },
        { name: "Android Development", level: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Database,
      skills: [
        { name: "Firebase", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Cloud & Database",
      icon: Cloud,
      skills: [
        { name: "Cloud Firestore", level: 90 },
        { name: "Supabase", level: 85 },
        { name: "Firebase Auth", level: 95 },
        { name: "Cloud Storage", level: 80 }
      ]
    },
    {
      title: "AI & Modern Tech",
      icon: Brain,
      skills: [
        { name: "AI Integration", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "RAG Systems", level: 75 },
        { name: "Machine Learning", level: 70 }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch },
    { name: "VS Code", icon: Code },
    { name: "Figma", icon: Palette },
    { name: "Security", icon: Shield }
  ];

  return (
    <Section id="skills" className="bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Technical Expertise
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          My technical skills span across mobile development, backend services, and modern AI integration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={category.title} 
            className="p-6 card-glass hover-lift animate-fade-in-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill.name}
                  className="animate-scale-in"
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 card-glass text-center">
        <h3 className="text-2xl font-semibold mb-6 text-primary">
          Development Tools & Workflow
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-primary/5 transition-colors animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}