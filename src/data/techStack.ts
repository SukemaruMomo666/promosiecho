import { 
  Smartphone, 
  Server, 
  Database, 
  Brain, 
  Radio, 
  GitBranch 
} from 'lucide-react';
import type { TechItem } from '../types';

export const techStack: TechItem[] = [
  {
    id: 't1',
    name: 'React Native',
    category: 'Frontend',
    description: 'Aplikasi mobile Android dengan performa native.',
    icon: Smartphone,
  },
  {
    id: 't2',
    name: 'FastAPI',
    category: 'Backend',
    description: 'REST API berkecepatan tinggi dengan dukungan asynchronous.',
    icon: Server,
  },
  {
    id: 't3',
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Penyimpanan data relasional yang andal dan skalabel.',
    icon: Database,
  },
  {
    id: 't4',
    name: 'Python + Scikit-learn',
    category: 'AI & Analytics',
    description: 'Analisis emosi hybrid (rule-based + machine learning).',
    icon: Brain,
  },
  {
    id: 't5',
    name: 'Notification Listener',
    category: 'Android Integration',
    description: 'Deteksi lagu dari berbagai platform musik.',
    icon: Radio,
  },
  {
    id: 't6',
    name: 'Git + GitHub',
    category: 'Version Control',
    description: 'Kolaborasi tim dengan metodologi Scrum.',
    icon: GitBranch,
  },
];
