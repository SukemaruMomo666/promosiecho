import type { Sprint } from '../types';

export const roadmap: Sprint[] = [
  {
    id: 's0',
    name: 'Sprint 0',
    focus: 'Inisialisasi proyek, arsitektur, setup lingkungan',
    status: 'done',
  },
  {
    id: 's1',
    name: 'Sprint 1',
    focus: 'Music Detection (Notification Listener + MediaSession)',
    status: 'in-progress',
  },
  {
    id: 's2',
    name: 'Sprint 2',
    focus: 'Mood Classification Engine + analisis audio',
    status: 'planned',
  },
  {
    id: 's3',
    name: 'Sprint 3',
    focus: 'Emotional Dashboard + visualisasi emosi',
    status: 'planned',
  },
  {
    id: 's4',
    name: 'Sprint 4',
    focus: 'Music Recommendation berbasis emosi',
    status: 'planned',
  },
  {
    id: 's5',
    name: 'Sprint 5',
    focus: 'Mood Journal, Emotional Insight, testing final',
    status: 'planned',
  },
];
