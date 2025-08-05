import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    Support: [
      { name: "Help Center", href: "#help" },
      { name: "Safety Guidelines", href: "#safety" },
      { name: "Community", href: "#community" },
      { name: "Report Issue", href: "#report" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Guidelines", href: "#guidelines" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#github", color: "hover:text-skill-violet" },
    { name: "Twitter", icon: Twitter, href: "#twitter", color: "hover:text-skill-blue" },
    { name: "LinkedIn", icon: Linkedin, href: "#linkedin", color: "hover:text-skill-mint" },
    { name: "Email", icon: Mail, href: "#email", color: "hover:text-skill-violet" },
    { name: "Discord", icon: MessageCircle, href: "#discord", color: "hover:text-skill-blue" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-xl font-bold">SkillSwap</span>
              </div>
              
              <p className="text-background/70 max-w-md leading-relaxed">
                The peer-to-peer skill exchange platform that connects learners and teachers 
                worldwide. Share what you know, learn what you love.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-background">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-background/70 text-sm">
                Get the latest features and skill exchange tips.
              </p>
            </div>
            
            <div className="flex space-x-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
              />
              <button className="px-6 py-2 bg-gradient-primary hover:opacity-90 rounded-lg font-medium transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-background/60">
            <div>
              © 2024 SkillSwap. All rights reserved. Built with ❤️ by the SkillSwap team.
            </div>
            
            <div className="flex items-center space-x-6">
              <span>Made with React & Tailwind CSS</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-skill-violet/60"></div>
                <div className="w-3 h-3 rounded-full bg-skill-blue/60"></div>
                <div className="w-3 h-3 rounded-full bg-skill-mint/60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;