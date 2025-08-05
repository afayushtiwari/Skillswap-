import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Calendar, Repeat } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.png";

const steps = [
  {
    step: 1,
    title: "Sign Up & Add Skills to Teach",
    description: "Create your profile and list the skills you're passionate about sharing with others.",
    icon: UserPlus,
    color: "skill-violet"
  },
  {
    step: 2,
    title: "Browse Skills You Want to Learn",
    description: "Explore our vast catalog of skills and find exactly what you want to master.",
    icon: Search,
    color: "skill-blue"
  },
  {
    step: 3,
    title: "Book a Swap Session",
    description: "Connect with skill partners and schedule your mutual learning sessions.",
    icon: Calendar,
    color: "skill-mint"
  },
  {
    step: 4,
    title: "Earn Credits or Offer Back a Lesson",
    description: "Complete your session and build credits for future swaps or teach back immediately.",
    icon: Repeat,
    color: "skill-violet"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">SkillSwap</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with skill exchange is simple and rewarding. Follow these easy steps to begin your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="relative overflow-hidden border-0 shadow-card-hover hover:shadow-skill transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`text-sm font-semibold text-${step.color} bg-${step.color}/10 px-3 py-1 rounded-full`}>
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${step.color}/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                </Card>
              );
            })}
          </div>

          <div className="relative">
            <img
              src={howItWorksImage}
              alt="How SkillSwap works process"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;