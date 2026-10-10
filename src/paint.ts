// The app's demo photos (DemoSeed.paint), redrawn as SVG: invented, painted, never a real photo.
// Deterministic, so every build draws the same picture. Served as static files from /paintings.
import type { Scene } from './entries';

export const scenes: Scene[] = ['sunset', 'hills', 'forest', 'rain', 'cafe', 'night'];

export function paint(scene: Scene, seed = 1): string {
  const S = 1200;
  let st = seed * 7919 + scene.length * 131;
  const rnd = (a = 0, b = 1) => { st = (st * 9301 + 49297) % 233280; return a + (st / 233280) * (b - a); };
  const rgb = (r: number, g: number, b: number, a = 1) =>
    `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${a})`;
  const uid = `p${scene}`;

  const shapes: string[] = [];
  const defs: string[] = [];
  let n = 0;

  const sky = (top: string, bottom: string, horizon: number) => {
    const id = `${uid}s${n++}`;
    defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="${S * horizon}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>`);
    shapes.push(`<rect width="${S}" height="${S}" fill="url(#${id})"/>`);
  };
  const sun = (cx: number, cy: number, r: number, color: [number, number, number]) => {
    const id = `${uid}g${n++}`;
    defs.push(`<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r * 3}" gradientUnits="userSpaceOnUse"><stop offset="0.35" stop-color="${rgb(...color)}"/><stop offset="1" stop-color="${rgb(...color, 0)}"/></radialGradient>`);
    shapes.push(`<circle cx="${cx}" cy="${cy}" r="${r * 3}" fill="url(#${id})"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="${rgb(...color)}"/>`);
  };
  const sea = (horizon: number, near: string, far: string) => {
    const y = S * horizon, id = `${uid}w${n++}`;
    defs.push(`<linearGradient id="${id}" x1="0" y1="${y}" x2="0" y2="${S}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${near}"/><stop offset="1" stop-color="${far}"/></linearGradient>`);
    shapes.push(`<rect y="${y}" width="${S}" height="${S - y}" fill="url(#${id})"/>`);
    for (let i = 0; i < 40; i++) {
      const ly = rnd(y, S * 0.95), lw = rnd(20, 120) * (1 - (ly - y) / S);
      shapes.push(`<rect x="${(S * 0.5 - lw / 2 + rnd(-60, 60)).toFixed(1)}" y="${ly.toFixed(1)}" width="${lw.toFixed(1)}" height="3" fill="${rgb(1, 0.8, 0.55, rnd(0.15, 0.5))}"/>`);
    }
  };
  const ridge = (base: number, amp: number, color: string) => {
    const phase = rnd(0, Math.PI * 2);
    let d = `M0,${S}`;
    for (let x = 0; x <= S; x += 8) {
      const t = x / S;
      d += ` L${x},${(S * (base - amp * Math.sin(t * 5 + phase) - amp * 0.4 * Math.sin(t * 13 + phase * 2))).toFixed(1)}`;
    }
    shapes.push(`<path d="${d} L${S},${S} Z" fill="${color}"/>`);
  };
  const trees = (base: number, color: string) => {
    shapes.push(`<rect y="${S * base}" width="${S}" height="${S * (1 - base)}" fill="${color}"/>`);
    let x = -40;
    while (x < S) {
      const tw = rnd(60, 140), th = rnd(160, 320);
      shapes.push(`<path d="M${x},${S * base + 2} L${x + tw / 2},${S * base - th} L${x + tw},${S * base + 2} Z" fill="${color}"/>`);
      x += tw * rnd(0.5, 0.9);
    }
  };
  const skyline = (color: string) => {
    let x = 0;
    while (x < S) {
      const bw = rnd(70, 180), bh = S * rnd(0.25, 0.6);
      shapes.push(`<rect x="${x.toFixed(1)}" y="${(S - bh).toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${bh.toFixed(1)}" fill="${color}"/>`);
      for (let wy = S - bh + 20; wy < S - 20; wy += 34)
        for (let wx = x + 12; wx < x + bw - 24; wx += 26)
          if (rnd() < 0.3) shapes.push(`<rect x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="10" height="14" fill="${rgb(1, 0.85, 0.55, 0.8)}"/>`);
      x += bw;
    }
  };
  const streaks = () => {
    let d = '';
    for (let i = 0; i < 260; i++) {
      const x = rnd(0, S), y = rnd(0, S);
      d += `M${x.toFixed(0)},${y.toFixed(0)}l-8,${rnd(30, 70).toFixed(0)}`;
    }
    shapes.push(`<path d="${d}" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>`);
  };
  const bokeh = () => {
    for (let i = 0; i < 45; i++) {
      const r = rnd(30, 140), cx = rnd(0, S), cy = rnd(0, S), g = rnd(0.6, 0.85), b = rnd(0.3, 0.5), a = rnd(0.15, 0.45);
      const id = `${uid}b${n++}`;
      defs.push(`<radialGradient id="${id}"><stop offset="0.6" stop-color="${rgb(1, g, b, a)}"/><stop offset="1" stop-color="${rgb(1, g, b, 0)}"/></radialGradient>`);
      shapes.push(`<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(0)}" fill="url(#${id})"/>`);
    }
  };
  const stars = () => {
    for (let i = 0; i < 400; i++)
      shapes.push(`<circle cx="${rnd(0, S).toFixed(0)}" cy="${rnd(0, S * 0.85).toFixed(0)}" r="${(rnd(1, 3.5) / 2).toFixed(2)}" fill="rgba(255,255,255,${rnd(0.3, 1).toFixed(2)})"/>`);
  };

  switch (scene) {
    case 'sunset':
      sky(rgb(0.23, 0.2, 0.42), rgb(0.98, 0.62, 0.35), 0.62);
      sun(S * 0.48, S * 0.6, S * 0.09, [1, 0.85, 0.6]);
      sea(0.62, rgb(0.2, 0.22, 0.38), rgb(0.08, 0.09, 0.18));
      break;
    case 'hills':
      sky(rgb(0.55, 0.72, 0.9), rgb(0.95, 0.9, 0.8), 0.7);
      sun(S * 0.75, S * 0.25, S * 0.05, [1, 0.97, 0.88]);
      ridge(0.55, 0.06, rgb(0.55, 0.63, 0.55));
      ridge(0.68, 0.05, rgb(0.33, 0.45, 0.33));
      ridge(0.82, 0.04, rgb(0.2, 0.3, 0.22));
      break;
    case 'forest':
      sky(rgb(0.8, 0.86, 0.78), rgb(0.55, 0.65, 0.5), 1);
      for (let l = 0; l < 3; l++) trees(0.55 + l * 0.15, rgb(0.18 - l * 0.04, 0.38 - l * 0.08, 0.22 - l * 0.05));
      break;
    case 'rain':
      sky(rgb(0.42, 0.47, 0.53), rgb(0.62, 0.66, 0.7), 1);
      skyline(rgb(0.22, 0.25, 0.3));
      streaks();
      break;
    case 'cafe':
      sky(rgb(0.2, 0.12, 0.08), rgb(0.42, 0.26, 0.15), 1);
      bokeh();
      break;
    case 'night':
      sky(rgb(0.03, 0.04, 0.12), rgb(0.1, 0.13, 0.28), 1);
      stars();
      sun(S * 0.72, S * 0.22, S * 0.04, [0.96, 0.95, 0.88]);
      ridge(0.85, 0.03, rgb(0.02, 0.03, 0.06));
      break;
  }
  // Film grain, so the flat fills read as a photograph.
  defs.push(`<filter id="${uid}n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.09 0"/></filter>`);
  shapes.push(`<rect width="${S}" height="${S}" filter="url(#${uid}n)"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" preserveAspectRatio="xMidYMid slice"><defs>${defs.join('')}</defs>${shapes.join('')}</svg>`;
}
