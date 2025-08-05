import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleFindPartner = () => {
    navigate('/auth');
  };

  const handleListSkills = () => {
    navigate('/auth');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-skill-violet/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-skill-mint/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-skill-blue/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Swap Skills.
                </span>
                <br />
                <span className="text-foreground">Learn Anything.</span>
                <br />
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Teach Everything.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join the peer-to-peer skill exchange platform where you can trade your expertise 
                for knowledge you want to learn. No payments, just pure skill swapping.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={handleFindPartner}
              >
                Find a Skill Partner
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="skill" 
                size="xl" 
                className="group"
                onClick={handleListSkills}
              >
                List Your Skills
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-skill-violet">10K+</div>
                <div className="text-sm text-muted-foreground">Skills Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-skill-blue">5K+</div>
                <div className="text-sm text-muted-foreground">Active Swappers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-skill-mint">50K+</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroIllustration}
                alt="Skill exchange illustration"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Floating elements around illustration */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-accent rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-secondary rounded-full animate-pulse-glow" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full h-20 bg-background"></div>
    </section>
  );
};

export default Hero;