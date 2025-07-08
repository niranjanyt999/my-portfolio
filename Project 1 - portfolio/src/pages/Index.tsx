import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Download, Code, Zap, Brain, Monitor, Cpu, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-tech-darker text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto section-padding py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Experience', 'Skills', 'Services', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center tech-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 via-transparent to-tech-teal/20"></div>
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-4 items-center animate-fade-in">
            {/* Profile Picture - Left Side */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-tech-blue to-tech-teal p-1 animate-glow">
                  <div className="w-full h-full rounded-full bg-tech-darker flex items-center justify-center">
                    <img 
                      src="https://i.postimg.cc/5tRNw2qF/IMG-20241226-150619-649-1-removebg-preview.png" 
                      alt="Niranjan Profile" 
                      className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">
                Niranjan
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">Electrical Engineering Enthusiast | Web development & Circuit Designer | AI/ML Learner</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-tech-blue hover:bg-tech-blue/80 text-white px-8 py-3 text-lg font-medium"
                >
                  Let's Connect <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-tech-teal text-tech-teal hover:bg-tech-teal/10 px-8 py-3 text-lg font-medium"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-tech-dark">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-teal mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated and passionate Diploma student in Electrical Engineering with a strong interest in innovation, problem-solving, and technology-driven solutions. My academic journey has equipped me with a solid foundation in electrical systems, circuit design, power distribution, and automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I enjoy learning new skills and applying them to real-world challenges in energy, electronics, and sustainability. I'm currently focused on enhancing my technical expertise through hands-on projects, certifications, and collaborative learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I aspire to contribute meaningfully to the field of electrical engineering by combining theory with practical applications that drive efficiency and progress.
              </p>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm border-tech-blue/20 glow-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-tech-blue">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium">Diploma in Electrical Engineering</h4>
                    <p className="text-muted-foreground">Govt. Polytechnic College, Munger</p>
                    <p className="text-sm text-tech-teal">Currently Pursuing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-teal mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-tech-blue/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-tech-blue mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">Web Development & AI/ML Intern</h3>
                    <p className="text-tech-teal">Tamizhan Skill</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Gained hands-on experience in web development technologies and artificial intelligence/machine learning concepts, working on real-world projects and enhancing technical skills.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-tech-teal/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-tech-teal mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">AutoCAD Intern</h3>
                    <p className="text-tech-blue">INB Infinity</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Developed proficiency in AutoCAD software for technical drawing and design, creating detailed electrical schematics and engineering drawings for various projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-tech-dark">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-teal mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'Python',
            icon: Code,
            color: 'tech-blue'
          }, {
            name: 'Circuit Design',
            icon: Zap,
            color: 'tech-teal'
          }, {
            name: 'AI/ML',
            icon: Brain,
            color: 'tech-blue'
          }].map((skill, index) => <Card key={skill.name} className="bg-card/50 backdrop-blur-sm border-tech-blue/20 hover:glow-effect transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <skill.icon className={`h-16 w-16 mx-auto mb-4 text-${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-teal mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-tech-blue/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <Monitor className="h-12 w-12 text-tech-blue mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
                <p className="text-muted-foreground">
                  Modern, responsive websites using HTML, CSS, and JavaScript. Creating user-friendly interfaces with clean design and optimal performance across all devices.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-tech-teal/20 hover:glow-effect transition-all duration-300">
              <CardContent className="p-8">
                <Cpu className="h-12 w-12 text-tech-teal mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Circuit Design</h3>
                <p className="text-muted-foreground">
                  Electrical circuit planning and schematic creation using industry-standard tools. Designing efficient and reliable electrical systems for various applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-tech-dark">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-teal mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-tech-blue mr-4" />
                  <a href="mailto:nkr4768@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    nkr4768@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-tech-teal mr-4" />
                  <a href="tel:+919835169043" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9835169043
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="p-3 bg-card/50 rounded-full hover:bg-tech-blue/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-tech-blue" />
                </a>
                <a href="#" className="p-3 bg-card/50 rounded-full hover:bg-tech-teal/20 transition-colors">
                  <Github className="h-6 w-6 text-tech-teal" />
                </a>
              </div>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm border-tech-blue/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-background/50 border-tech-blue/30 focus:border-tech-blue" required />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="bg-background/50 border-tech-blue/30 focus:border-tech-blue" required />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} className="bg-background/50 border-tech-blue/30 focus:border-tech-blue min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-blue/80 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <p className="text-muted-foreground">
            © 2024 Niranjan. All rights reserved. Built with passion and modern technology.
          </p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
