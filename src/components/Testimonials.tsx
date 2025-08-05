import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "UX Designer",
    skill: "Learned Python, Taught Figma",
    content: "I taught Python and learned Figma — best trade ever! The quality of teaching I received was incredible, and I made a great friend in the process.",
    avatar: "SC",
    rating: 5,
    color: "skill-violet"
  },
  {
    name: "Mike Rodriguez",
    role: "Full Stack Developer", 
    skill: "Learned Photography, Taught React",
    content: "SkillSwap opened up a whole new creative side for me. I never thought I'd be good at photography, but my skill partner was an amazing teacher.",
    avatar: "MR",
    rating: 5,
    color: "skill-blue"
  },
  {
    name: "Emily Johnson",
    role: "Marketing Specialist",
    skill: "Learned Web Development, Taught Digital Marketing",
    content: "The platform made it so easy to find someone who wanted to learn marketing while teaching me coding. Win-win situation that saved me hundreds in course fees!",
    avatar: "EJ",
    rating: 5,
    color: "skill-mint"
  },
  {
    name: "David Park",
    role: "Product Manager",
    skill: "Learned Spanish, Taught Product Strategy",
    content: "Multi-swap groups are amazing! I was part of a 4-person exchange where we all taught and learned different skills. Such a rich learning experience.",
    avatar: "DP",
    rating: 5,
    color: "skill-violet"
  },
  {
    name: "Lisa Thompson",
    role: "Graphic Designer",
    skill: "Learned Data Analysis, Taught Design",
    content: "The smart matchmaking really works. I was paired with someone who had the exact teaching style that worked for me. Couldn't be happier!",
    avatar: "LT",
    rating: 5,
    color: "skill-blue"
  },
  {
    name: "Alex Kumar",
    role: "Data Scientist",
    skill: "Learned Music Production, Taught Machine Learning",
    content: "Who knew data science principles could help with music production? My skill partner showed me connections I never would have discovered on my own.",
    avatar: "AK",
    rating: 5,
    color: "skill-mint"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Swappers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who've transformed their skills through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-card-hover hover:shadow-skill transition-all duration-500 bg-white/95 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className={`w-8 h-8 text-${testimonial.color} opacity-60`} />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 fill-yellow-400 text-yellow-400`} />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-${testimonial.color} flex items-center justify-center`}>
                    <span className="text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className={`text-xs text-${testimonial.color} font-medium`}>
                      {testimonial.skill}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${testimonial.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              4.9/5
            </div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              2.5x
            </div>
            <div className="text-muted-foreground">Faster Learning</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              89%
            </div>
            <div className="text-muted-foreground">Return for More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;