import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Search, Users, BookOpen, Target } from 'lucide-react';
import SkillMatchingModal from '@/components/SkillMatchingModal';
import DashboardHeader from '@/components/DashboardHeader';

const Dashboard = () => {
  const { user, updateSkills } = useAuth();
  const { toast } = useToast();
  const [newSkillOffered, setNewSkillOffered] = useState('');
  const [newSkillWanted, setNewSkillWanted] = useState('');
  const [editingOffered, setEditingOffered] = useState<string | null>(null);
  const [editingWanted, setEditingWanted] = useState<string | null>(null);
  const [isMatchingModalOpen, setIsMatchingModalOpen] = useState(false);

  if (!user) return null;

  const addSkillOffered = () => {
    if (newSkillOffered.trim()) {
      const updatedOffered = [...user.skillsOffered, newSkillOffered.trim()];
      updateSkills(updatedOffered, user.skillsWanted);
      setNewSkillOffered('');
      toast({
        title: "Skill Added",
        description: `Added "${newSkillOffered}" to your offered skills`,
      });
    }
  };

  const addSkillWanted = () => {
    if (newSkillWanted.trim()) {
      const updatedWanted = [...user.skillsWanted, newSkillWanted.trim()];
      updateSkills(user.skillsOffered, updatedWanted);
      setNewSkillWanted('');
      toast({
        title: "Skill Added",
        description: `Added "${newSkillWanted}" to your wanted skills`,
      });
    }
  };

  const removeSkillOffered = (skill: string) => {
    const updatedOffered = user.skillsOffered.filter(s => s !== skill);
    updateSkills(updatedOffered, user.skillsWanted);
    toast({
      title: "Skill Removed",
      description: `Removed "${skill}" from your offered skills`,
    });
  };

  const removeSkillWanted = (skill: string) => {
    const updatedWanted = user.skillsWanted.filter(s => s !== skill);
    updateSkills(user.skillsOffered, updatedWanted);
    toast({
      title: "Skill Removed",
      description: `Removed "${skill}" from your wanted skills`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Manage your skills and find learning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills I Offer */}
          <Card className="shadow-card-hover border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-skill-blue" />
                Your Skills Offered
              </CardTitle>
              <CardDescription>
                Skills you can teach others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill you can teach..."
                    value={newSkillOffered}
                    onChange={(e) => setNewSkillOffered(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkillOffered()}
                  />
                  <Button onClick={addSkillOffered} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {user.skillsOffered.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-skill-blue-light text-skill-blue hover:bg-skill-blue hover:text-white group cursor-pointer"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkillOffered(skill)}
                        className="ml-2 opacity-60 hover:opacity-100"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills I Want to Learn */}
          <Card className="shadow-card-hover border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-skill-mint" />
                Skills You Want to Learn
              </CardTitle>
              <CardDescription>
                Skills you'd like to acquire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill you want to learn..."
                    value={newSkillWanted}
                    onChange={(e) => setNewSkillWanted(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkillWanted()}
                  />
                  <Button onClick={addSkillWanted} size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {user.skillsWanted.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-skill-mint-light text-skill-mint hover:bg-skill-mint hover:text-white group cursor-pointer"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkillWanted(skill)}
                        className="ml-2 opacity-60 hover:opacity-100"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Find Swap Partners */}
        <Card className="shadow-card-hover border-0 bg-gradient-primary text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Ready to Start Learning?
                </h3>
                <p className="text-white/90">
                  Find people who can teach you {user.skillsWanted.length > 0 ? user.skillsWanted[0] : 'new skills'} in exchange for your expertise
                </p>
              </div>
              <Button
                onClick={() => setIsMatchingModalOpen(true)}
                size="lg"
                variant="secondary"
                className="bg-white text-skill-violet hover:bg-white/90 font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Swap Partners
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skill Matching Modal */}
        <SkillMatchingModal 
          isOpen={isMatchingModalOpen}
          onClose={() => setIsMatchingModalOpen(false)}
        />
      </main>
    </div>
  );
};

export default Dashboard;