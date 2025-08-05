import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/auth');
  };

  const handleJoinWaitlist = () => {
    navigate('/auth');
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-skill-violet/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-skill-mint/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-skill-blue/5 rounded-full animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA content */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Ready to Transform Your Learning?</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Start your first
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                skill swap today!
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join thousands of learners who are already exchanging skills, building connections, 
              and discovering new passions. Your next skill is just a swap away.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={handleSignUp}
            >
              Sign Up Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="group border-2 hover:shadow-card-hover"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Social proof */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-card-hover">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                5,000+
              </div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-card-hover">
              <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                50,000+
              </div>
              <div className="text-muted-foreground">Skills Exchanged</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-card-hover">
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground">Available Skills</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by learners worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">⭐ 4.9/5</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-sm">Free to start</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-sm">No commitments</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-sm">Secure platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;