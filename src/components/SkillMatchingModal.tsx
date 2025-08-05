import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Search, MessageCircle, Star, Users, Filter } from 'lucide-react';
import SwapConfirmationModal from './SwapConfirmationModal';

interface User {
  id: string;
  name: string;
  skillsOffered: string[];
  skillsWanted: string[];
  rating: number;
  location: string;
}

interface SkillMatchingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillMatchingModal: React.FC<SkillMatchingModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const { toast } = useToast();

  // Mock data for potential matches
  const mockUsers: User[] = [
    {
      id: '2',
      name: 'Sarah Chen',
      skillsOffered: ['Python', 'Machine Learning', 'Data Science'],
      skillsWanted: ['JavaScript', 'React', 'Frontend Development'],
      rating: 4.8,
      location: 'San Francisco'
    },
    {
      id: '3',
      name: 'Marcus Johnson',
      skillsOffered: ['UI/UX Design', 'Figma', 'Adobe Creative Suite'],
      skillsWanted: ['React', 'TypeScript', 'Node.js'],
      rating: 4.9,
      location: 'New York'
    },
    {
      id: '4',
      name: 'Elena Rodriguez',
      skillsOffered: ['DevOps', 'AWS', 'Docker', 'Kubernetes'],
      skillsWanted: ['Python', 'Machine Learning'],
      rating: 4.7,
      location: 'Austin'
    },
    {
      id: '5',
      name: 'David Kim',
      skillsOffered: ['Mobile Development', 'React Native', 'Swift'],
      skillsWanted: ['Web Development', 'JavaScript'],
      rating: 4.6,
      location: 'Seattle'
    }
  ];

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.skillsOffered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    user.skillsWanted.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleRequestSwap = (user: User) => {
    setSelectedUser(user);
    setIsSwapModalOpen(true);
  };

  const handleSwapConfirmed = () => {
    setIsSwapModalOpen(false);
    setSelectedUser(null);
    onClose();
    toast({
      title: "Swap Request Sent!",
      description: `Your swap request has been sent to ${selectedUser?.name}. They'll be notified via email.`,
    });
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-skill-violet" />
              Find Your Perfect Skill Match
            </DialogTitle>
            <DialogDescription>
              Connect with people who can teach you what you want to learn
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Search and Filter */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto space-y-4">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="shadow-sm hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-secondary text-white">
                          {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{user.name}</h4>
                            <p className="text-sm text-muted-foreground">{user.location}</p>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{user.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Can teach:</p>
                            <div className="flex flex-wrap gap-1">
                              {user.skillsOffered.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-skill-blue-light text-skill-blue text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Wants to learn:</p>
                            <div className="flex flex-wrap gap-1">
                              {user.skillsWanted.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-skill-mint-light text-skill-mint text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button 
                            onClick={() => handleRequestSwap(user)}
                            className="bg-gradient-primary hover:opacity-90"
                            size="sm"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Request Swap
                          </Button>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredUsers.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No matches found. Try adjusting your search terms.</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Swap Confirmation Modal */}
      {selectedUser && (
        <SwapConfirmationModal
          isOpen={isSwapModalOpen}
          onClose={() => setIsSwapModalOpen(false)}
          onConfirm={handleSwapConfirmed}
          targetUser={selectedUser}
        />
      )}
    </>
  );
};

export default SkillMatchingModal;