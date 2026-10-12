export type Lang = 'en' | 'id';
export type Page = '' | 'privacy' | 'terms' | 'support';

export const href = (lang: Lang, page: Page) => (lang === 'en' ? `/${page}` : `/id/${page}`);

export const chrome = {
  en: {
    other: 'id',
    otherName: 'Indonesia',
    skip: 'Skip to content',
    home: 'Oku, home',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    copyright: '© 2026 Muhammad Darrel Prawira',
    tagline: 'A quiet place for your days.',
    toDark: 'Switch to dark', toLight: 'Switch to light',
    ogAlt: 'The Oku app icon beside the line: A quiet place for your days.',
  },
  id: {
    other: 'en',
    otherName: 'English',
    skip: 'Langsung ke isi',
    home: 'Oku, beranda',
    privacy: 'Privasi',
    terms: 'Ketentuan',
    support: 'Bantuan',
    copyright: '© 2026 Muhammad Darrel Prawira',
    tagline: 'Ruang tenang untuk harimu.',
    toDark: 'Ganti ke mode gelap', toLight: 'Ganti ke mode terang',
    ogAlt: 'Ikon aplikasi Oku di samping kalimat: Ruang tenang untuk harimu.',
  },
} as const;

export const contactEmail = 'darrelprawira26@gmail.com';

// <title> and meta description per page. Descriptions quote the page's own first lines.
export const legal = {
  en: {
    privacy: { title: 'Privacy Policy · Oku', description: 'Oku has no accounts, no servers, no analytics, no ads and no tracking.' },
    terms: { title: 'Terms of Use · Oku', description: 'The terms for using Oku, a journal app for iPhone.' },
    support: { title: 'Support · Oku', description: 'Common questions about Oku, and how to get in touch.' },
  },
  id: {
    privacy: { title: 'Kebijakan Privasi · Oku', description: 'Oku tidak punya akun, server, analitik, iklan, maupun pelacakan.' },
    terms: { title: 'Ketentuan Penggunaan · Oku', description: 'Ketentuan pemakaian Oku, aplikasi jurnal untuk iPhone.' },
    support: { title: 'Bantuan · Oku', description: 'Pertanyaan yang sering ditanya tentang Oku, dan cara menghubungi kami.' },
  },
} as const;

// Flip `live` to true the day Oku is on the App Store: the badges then link to the listing.
// Until then they read "coming soon" and link nowhere (Apple ID 6818423084).
export const appStore = {
  live: false,
  url: 'https://apps.apple.com/app/id6818423084',
  // While the app waits for review, the badge's place is a TestFlight invite.
  beta: 'https://testflight.apple.com/join/fYEVdVS8',
  betaLabel: { en: 'Join the TestFlight beta', id: 'Ikut uji coba beta di TestFlight' },
  soon: { en: 'Coming soon to the App Store', id: 'Segera hadir di App Store' },
  alt: { en: 'Download on the App Store', id: 'Download di App Store' },
} as const;
