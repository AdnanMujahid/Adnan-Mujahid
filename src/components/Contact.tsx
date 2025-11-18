import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adnanmujahid360@gmail.com",
      link: "mailto:adnanmujahid@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 300 1234567",
      link: "tel:+923001234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/AdnanMujahid/",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/adnanmujahid/",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:adnanmujahid@example.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <Section id="contact" className="bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Ready to bring your app idea to life? Get in touch and let's discuss your next Flutter project.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="p-8 card-glass hover-lift animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Send Me a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full btn-primary text-lg py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 card-glass hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 card-glass hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Follow Me
            </h3>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-primary/10 rounded-full text-primary transition-all hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Connect with me on social media or check out my latest projects on GitHub. 
              I'm always excited to discuss new opportunities and innovative ideas.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
