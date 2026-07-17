import type { FAQItem } from '../types';

export const faq: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Apakah EchoMind merekam musik atau percakapan saya?',
    answer: 'Tidak. EchoMind hanya membaca metadata lagu (judul, artis, album) dari notifikasi perangkat. Tidak ada rekaman audio maupun percakapan yang disimpan.',
  },
  {
    id: 'faq2',
    question: 'Apakah EchoMind dapat mendiagnosis kondisi kesehatan mental?',
    answer: 'Tidak. EchoMind adalah alat analisis emosional berbasis data musik untuk meningkatkan self-awareness, bukan alat diagnosis medis atau psikologis.',
  },
  {
    id: 'faq3',
    question: 'Platform musik apa saja yang didukung?',
    answer: 'EchoMind mendukung berbagai platform yang memancarkan media notification di Android, termasuk Spotify, YouTube Music, YouTube, dan pemutar musik lokal lainnya.',
  },
  {
    id: 'faq4',
    question: 'Apakah data saya aman?',
    answer: 'Ya. Data pengguna disimpan dengan aman dan terenkripsi. Pengguna memiliki kendali penuh dan dapat menghapus data pribadi kapan saja.',
  },
  {
    id: 'faq5',
    question: 'Apakah EchoMind tersedia untuk iOS?',
    answer: 'Saat ini EchoMind hanya dikembangkan untuk perangkat Android (Android 10 ke atas) dikarenakan kebutuhan akses ke sistem notifikasi. Dukungan iOS merupakan bagian dari rencana pengembangan masa depan.',
  },
  {
    id: 'faq6',
    question: 'Apa perbedaan Mood Matching dan Mood Transition?',
    answer: 'Mood Matching memberikan rekomendasi lagu dengan nuansa emosi yang serupa dengan kondisi saat ini. Mood Transition memberikan rekomendasi lagu yang dirancang untuk membantu mengubah suasana hati secara bertahap menuju kondisi yang lebih baik.',
  },
];
