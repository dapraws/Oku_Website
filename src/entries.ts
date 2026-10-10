// The example entries the landing page writes, files and looks back on. Invented, ordinary days
// (approved with Darrel on 2026-10-10). Moods and reasons use the app's own words.
import type { Lang } from './i18n';

export type Scene = 'sunset' | 'hills' | 'forest' | 'rain' | 'cafe' | 'night';

export type Entry = {
  daysAgo: number;
  place: string;
  title: string;
  body: string;
  mood: number; // 0 Heavy … 4 Bright
  reasons: string[]; // shown chips
  picked: number[]; // indexes into reasons
  person?: string;
  scene: Scene;
};

export const moods: Record<Lang, string[]> = {
  en: ['Heavy', 'Sad', 'Neutral', 'Good', 'Bright'],
  id: ['Berat', 'Sedih', 'Tenang', 'Baik', 'Cerah'],
};

export const entries: Record<Lang, Entry[]> = {
  en: [
    {
      daysAgo: 0, place: 'Kuta', title: 'Suddenly quiet',
      body: 'I felt calm today. Honestly, it feels a little strange. After so long with my heart in pieces, tired from pretending to be strong all the time, today everything suddenly went quiet.',
      mood: 2, reasons: ['Work', 'Family', 'Self', 'Health'], picked: [2, 3],
      scene: 'sunset',
    },
    {
      daysAgo: 1, place: 'Jakarta', title: 'Rain on the way home',
      body: 'Stuck in traffic for an hour. The rain made the city look softer than it is. Called Mum and we talked about nothing.',
      mood: 3, reasons: ['Work', 'Family', 'Friends', 'Money'], picked: [0, 1], person: 'Mum',
      scene: 'rain',
    },
    {
      daysAgo: 3, place: 'Semarang', title: 'Dimsum with Damon',
      body: 'Walked around Kota Lama until our feet hurt. Damon still can’t decide on a job, and that’s okay. We ordered too much dimsum.',
      mood: 4, reasons: ['Friends', 'Food', 'Hobbies', 'Self'], picked: [0, 1], person: 'Damon',
      scene: 'cafe',
    },
  ],
  id: [
    {
      daysAgo: 0, place: 'Kuta', title: 'Hari yang hening',
      body: 'Aku merasa tenang hari ini. Tapi jujur, rasanya agak asing untukku. Setelah sekian lama hati ini rasanya berantakan dan capek banget karena terus-terusan pura-pura kuat, hari ini mendadak semuanya hening.',
      mood: 2, reasons: ['Kerja', 'Keluarga', 'Diri sendiri', 'Kesehatan'], picked: [2, 3],
      scene: 'sunset',
    },
    {
      daysAgo: 1, place: 'Jakarta', title: 'Hujan di jalan pulang',
      body: 'Terjebak macet sejam. Hujan bikin kota kelihatan lebih lembut dari aslinya. Telepon Ibu, ngobrol hal-hal kecil.',
      mood: 3, reasons: ['Kerja', 'Keluarga', 'Teman', 'Uang'], picked: [0, 1], person: 'Ibu',
      scene: 'rain',
    },
    {
      daysAgo: 3, place: 'Semarang', title: 'Dimsum sama Damon',
      body: 'Keliling Kota Lama sampai kaki pegal. Damon masih bingung soal kerjaan, dan itu nggak apa-apa. Kami pesan dimsum kebanyakan.',
      mood: 4, reasons: ['Teman', 'Makanan', 'Hobi', 'Diri sendiri'], picked: [0, 1], person: 'Damon',
      scene: 'cafe',
    },
  ],
};

// App date order: 10 OCTOBER · SATURDAY (sheet), 10 OCT (rows). Filled in on the client.
export const locales: Record<Lang, string> = { en: 'en-GB', id: 'id-ID' };
