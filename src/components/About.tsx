import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export function About() {
  const skills = [
    "Flutter", "Dart", "Firebase", "REST APIs", 
    "Node.js", "Redis", "AI Integration", "Git",
    "Firebase Auth", "Cloud Firestore", "Supabase"
  ];

  return (
    <Section id="about" className="bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          About Me
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Card className="p-8 card-glass hover-lift">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Software Engineer with a Bachelor's degree from International Islamic University Islamabad. 
              My expertise lies in developing high-quality cross-platform mobile applications using Flutter and Dart.
            </p>
          </Card>

          <Card className="p-8 card-glass hover-lift">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Experience</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating intuitive user interfaces, implementing real-time features with Firebase, 
              and integrating AI-powered functionalities. My focus is on delivering seamless user experiences 
              across both iOS and Android platforms.
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-8 card-glass hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-center text-sm font-medium hover:bg-primary/20 transition-colors animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}