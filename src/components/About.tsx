import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import teamIllustration from "@/assets/team-illustration.png";

const team = [
  {
    name: "Ayush Tiwari",
    role: "Frontend Web Developer",
    skills: ["HTML", "CSS", "JS", "React", "Tailwind"],
    color: "skill-violet",
    initials: "AT"
  },
  {
    name: "Anubhav Singh",
    role: "Frontend Web Developer", 
    skills: ["HTML", "CSS", "JS", "React", "Tailwind"],
    color: "skill-blue",
    initials: "AS"
  },
  {
    name: "Ayush Pandey",
    role: "Frontend Web Developer",
    skills: ["HTML", "CSS", "JS", "React", "Tailwind"],
    color: "skill-mint",
    initials: "AP"
  },
  {
    name: "Shivam Singh Mahar",
    role: "Frontend Web Developer",
    skills: ["HTML", "CSS", "JS", "React", "Tailwind"],
    color: "skill-violet",
    initials: "SM"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span> Behind SkillSwap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developers dedicated to making learning collaborative and accessible for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team illustration */}
          <div className="relative order-2 lg:order-1">
            <img
              src={teamIllustration}
              alt="SkillSwap development team"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-primary rounded-full opacity-30 animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Team cards */}
          <div className="space-y-6 order-1 lg:order-2">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-card-hover hover:shadow-skill transition-all duration-500 bg-white/90 backdrop-blur-sm hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className={`w-16 h-16 rounded-full bg-${member.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">
                        {member.initials}
                      </span>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {member.role}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-${member.color}/10 text-${member.color} border border-${member.color}/20`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social links */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className={`w-8 h-8 rounded-full bg-${member.color}/10 hover:bg-${member.color}/20 flex items-center justify-center transition-colors`}>
                        <Github className={`w-4 h-4 text-${member.color}`} />
                      </button>
                      <button className={`w-8 h-8 rounded-full bg-${member.color}/10 hover:bg-${member.color}/20 flex items-center justify-center transition-colors`}>
                        <Linkedin className={`w-4 h-4 text-${member.color}`} />
                      </button>
                      <button className={`w-8 h-8 rounded-full bg-${member.color}/10 hover:bg-${member.color}/20 flex items-center justify-center transition-colors`}>
                        <Mail className={`w-4 h-4 text-${member.color}`} />
                      </button>
                    </div>
                  </div>
                </CardContent>
                
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${member.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-card-hover">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We believe that everyone has something valuable to teach and something exciting to learn. 
                SkillSwap was born from the idea that knowledge sharing should be accessible, mutual, and 
                rewarding for all participants. Our goal is to create a world where learning knows no 
                boundaries and where every skill exchange builds meaningful connections between people.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;