export type UserRole = 'client' | 'developer' | 'designer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  bio?: string;
  avatar?: string;
  rating?: number;
  projectsCompleted?: number;
  skills?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  budget: number;
  category: 'electronics' | '3ddesign' | 'both';
  status: 'draft' | 'open' | 'in_progress' | 'completed' | 'cancelled';
  requirements: string;
  attachments?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Proposal {
  id: string;
  projectId: string;
  professionalId: string;
  message: string;
  price: number;
  estimatedDuration: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  projectId?: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Review {
  id: string;
  projectId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ProjectFilter {
  category?: 'electronics' | '3ddesign' | 'both';
  minBudget?: number;
  maxBudget?: number;
  status?: Project['status'];
}