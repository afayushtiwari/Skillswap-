import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowUpDown, Clock, MessageSquare } from 'lucide-react';

interface User {
  id: string;
  name: string;
  skillsOffered: string[];
  skillsWanted: string[];
  rating: number;
  location: string;
}

interface SwapConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  targetUser: User;
}

const SwapConfirmationModal: React.FC<SwapConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  targetUser
}) => {
  const { user } = useAuth();
  const [mySkill, setMySkill] = useState('');
  const [theirSkill, setTheirSkill] = useState('');
  const [duration, setDuration] = useState('1');
  const [message, setMessage] = useState('');

  if (!user) return null;

  // Find matching skills
  const myOfferableSkills = user.skillsOffered.filter(skill =>
    targetUser.skillsWanted.some(wanted => wanted.toLowerCase() === skill.toLowerCase())
  );
  
  const theirOfferableSkills = targetUser.skillsOffered.filter(skill =>
    user.skillsWanted.some(wanted => wanted.toLowerCase() === skill.toLowerCase())
  );

  const handleConfirm = () => {
    if (mySkill && theirSkill) {
      onConfirm();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-skill-violet" />
            Confirm Skill Swap
          </DialogTitle>
          <DialogDescription>
            Set up your skill exchange with {targetUser.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Swap Preview */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-primary text-white text-sm">
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">You</p>
                  <p className="text-xs text-muted-foreground">{user.name}</p>
                </div>
              </div>
              
              <ArrowUpDown className="w-6 h-6 text-skill-violet" />
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-medium text-sm">{targetUser.name}</p>
                  <p className="text-xs text-muted-foreground">{targetUser.location}</p>
                </div>
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-secondary text-white text-sm">
                    {targetUser.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Skill Selection */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="my-skill" className="text-sm font-medium">
                Skill you'll teach:
              </Label>
              <Select value={mySkill} onValueChange={setMySkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a skill you can teach" />
                </SelectTrigger>
                <SelectContent>
                  {myOfferableSkills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="their-skill" className="text-sm font-medium">
                Skill you want to learn:
              </Label>
              <Select value={theirSkill} onValueChange={setTheirSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a skill to learn" />
                </SelectTrigger>
                <SelectContent>
                  {theirOfferableSkills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="duration" className="text-sm font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Session duration:
              </Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">30 minutes</SelectItem>
                  <SelectItem value="1">1 hour</SelectItem>
                  <SelectItem value="2">2 hours</SelectItem>
                  <SelectItem value="3">3 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Personal message (optional):
              </Label>
              <Textarea
                id="message"
                placeholder="Introduce yourself and explain what you'd like to learn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Swap Summary */}
          {mySkill && theirSkill && (
            <div className="bg-skill-violet-light rounded-lg p-4">
              <h4 className="font-medium text-skill-violet mb-2">Swap Summary:</h4>
              <p className="text-sm text-skill-violet">
                Exchange {duration} hour{duration !== '1' ? 's' : ''} of <Badge variant="outline" className="mx-1">{mySkill}</Badge> for {duration} hour{duration !== '1' ? 's' : ''} of <Badge variant="outline" className="mx-1">{theirSkill}</Badge>
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleConfirm}
            disabled={!mySkill || !theirSkill}
            className="bg-gradient-primary hover:opacity-90"
          >
            Send Swap Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SwapConfirmationModal;