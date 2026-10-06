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
    tagline: 'Tempat tenang untuk harimu.',
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
