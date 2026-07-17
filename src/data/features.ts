import { 
  Music, 
  BrainCircuit, 
  LayoutDashboard, 
  ListMusic, 
  Lightbulb, 
  BookHeart 
} from 'lucide-react';
import type { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'f1',
    title: 'Music Detection',
    description: 'Mendeteksi lagu yang sedang diputar dari Spotify, YouTube Music, YouTube, dan pemutar lokal secara otomatis melalui Notification Listener dan MediaSession API.',
    icon: Music,
  },
  {
    id: 'f2',
    title: 'Mood Classification',
    description: 'Menganalisis karakter emosional lagu menggunakan metadata, audio features, dan AI untuk mengestimasi mood: Calm, Energetic, Happy, Melancholic, Reflective, Aggressive.',
    icon: BrainCircuit,
  },
  {
    id: 'f3',
    title: 'Emotional Dashboard',
    description: 'Dashboard visual real-time yang menampilkan Today Mood Timeline, Weekly Emotional Pattern, Dominant Mood Chart, dan Listening Activity Graph.',
    icon: LayoutDashboard,
  },
  {
    id: 'f4',
    title: 'Music Recommendation',
    description: 'Dua mode rekomendasi — Mood Matching (lagu serupa) dan Mood Transition (lagu untuk mengubah suasana hati secara bertahap).',
    icon: ListMusic,
  },
  {
    id: 'f5',
    title: 'Emotional Insight',
    description: 'Insight otomatis berbasis pola: "Kamu cenderung mendengarkan musik calm di malam hari" atau "Musik energetic meningkat di akhir minggu."',
    icon: Lightbulb,
  },
  {
    id: 'f6',
    title: 'Mood Journal',
    description: 'Catat refleksi emosional harianmu. Berfungsi sebagai validasi analisis sistem dan media self-reflection pribadi.',
    icon: BookHeart,
  },
];
