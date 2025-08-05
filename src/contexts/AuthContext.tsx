import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  skillsOffered: string[];
  skillsWanted: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, name?: string) => void;
  logout: () => void;
  updateSkills: (offered: string[], wanted: string[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, name?: string) => {
    // Simulate login - in real app this would call an API
    const newUser: User = {
      id: '1',
      name: name || email.split('@')[0],
      email,
      skillsOffered: ['JavaScript', 'React'],
      skillsWanted: ['Python', 'Machine Learning']
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateSkills = (offered: string[], wanted: string[]) => {
    if (user) {
      setUser({ ...user, skillsOffered: offered, skillsWanted: wanted });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateSkills }}>
      {children}
    </AuthContext.Provider>
  );
};