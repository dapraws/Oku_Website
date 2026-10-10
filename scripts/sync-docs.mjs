// Pulls the published text out of the Oku repo, which stays the source of truth.
// PRIVACY.md and TERMS.md: the quoted "Public ... (EN)" / "(ID)" blocks, word for word.
// FAQ: SettingsCopy.faqEN / faqID in the app.
// Run `npm run sync` after any change there, then commit the generated files.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const OKU = new URL('../../Oku/', import.meta.url);
const OUT = new URL('../src/generated/', import.meta.url);

// The day each page went live, or last changed. Bump when the text changes.
const PUBLISHED = { privacy: '2026-10-10', terms: '2026-10-10' };

const formatDate = (iso, locale) =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(iso));

function publicBlock(doc, heading) {
  const lines = doc.split('\n');
  const start = lines.findIndex((l) => l.trim() === heading);
  if (start === -1) throw new Error(`"${heading}" not found`);
  const block = [];
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith('## ')) break;
    if (line.startsWith('>')) block.push(line.replace(/^> ?/, ''));
  }
  if (!block.length) throw new Error(`"${heading}" has no quoted text`);
  return block.join('\n').trim() + '\n';
}

function syncDoc(file, kind, headingEN, headingID) {
  const doc = readFileSync(new URL(file, OKU), 'utf8');
  for (const [lang, heading, locale] of [['en', headingEN, 'en-GB'], ['id', headingID, 'id-ID']]) {
    const text = publicBlock(doc, heading).replace('{{PUBLISH_DATE}}', formatDate(PUBLISHED[kind], locale));
    if (text.includes('{{')) throw new Error(`${file} ${lang}: unfilled placeholder`);
    writeFileSync(new URL(`${kind}.${lang}.md`, OUT), text);
  }
}

function faq(swift, name) {
  const body = swift.match(new RegExp(`static let ${name}: \\[FAQItem\\] = \\[([\\s\\S]*?)\\n    \\]`));
  if (!body) throw new Error(`${name} not found`);
  const str = '"((?:[^"\\\\]|\\\\.)*)"';
  const items = [...body[1].matchAll(new RegExp(`q: ${str},\\s*a: ${str}`, 'g'))];
  const unescape = (s) => s.replace(/\\(.)/g, '$1');
  return items.map(([, q, a]) => ({ q: unescape(q), a: unescape(a) }));
}

mkdirSync(OUT, { recursive: true });
syncDoc('PRIVACY.md', 'privacy', '## Public policy (EN)', '## Public policy (ID)');
syncDoc('TERMS.md', 'terms', '## Public terms (EN)', '## Public terms (ID)');

const swift = readFileSync(new URL('Oku/Views/Settings/SettingsInfoPages.swift', OKU), 'utf8');
const faqs = { en: faq(swift, 'faqEN'), id: faq(swift, 'faqID') };
if (!faqs.en.length || faqs.en.length !== faqs.id.length) throw new Error('FAQ EN/ID mismatch');
writeFileSync(new URL('faq.json', OUT), JSON.stringify(faqs, null, 2) + '\n');

console.log(`synced privacy, terms, ${faqs.en.length} FAQ items`);
