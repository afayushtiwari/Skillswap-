import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, UserCheck, Sparkles, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Mutual Skill Booking",
    description: "Request a skill and offer yours in return. Perfect balance of giving and receiving knowledge.",
    icon: UserCheck,
    color: "skill-violet",
    bgColor: "skill-violet-light"
  },
  {
    title: "Time-Based Swaps",
    description: "Trade 1 hour of design for 1 hour of coding. Fair and transparent skill exchanges.",
    icon: Clock,
    color: "skill-blue",
    bgColor: "skill-blue-light"
  },
  {
    title: "Multi-Swap Groups",
    description: "Join group exchanges with 3-4 people to learn multiple skills in one session.",
    icon: Users,
    color: "skill-mint",
    bgColor: "skill-mint-light"
  },
  {
    title: "Smart Matchmaking",
    description: "AI-powered matching based on your skills, interests, and availability.",
    icon: Sparkles,
    color: "skill-violet",
    bgColor: "skill-violet-light"
  },
  {
    title: "Built-in Scheduling + Chat",
    description: "Set your availability and message potential skill partners seamlessly.",
    icon: MessageSquare,
    color: "skill-blue",
    bgColor: "skill-blue-light"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Core <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to start swapping skills and building meaningful learning connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-card-hover hover:shadow-skill transition-all duration-500 bg-white/90 backdrop-blur-sm hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon container */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
                
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                
                {/* Bottom gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${feature.color} to-${feature.color}/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </Card>
            );
          })}
        </div>

        {/* Feature highlight card */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-white border-0 shadow-skill overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to start your skill exchange journey?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are already swapping skills and building amazing connections.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-12 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-24 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;