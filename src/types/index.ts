export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Sprint {
  id: string;
  name: string;
  focus: string;
  status: 'done' | 'in-progress' | 'planned';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
