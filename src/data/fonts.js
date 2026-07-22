// Curated font registry for the theme picker (Fonts & Theme in the CMS).
// `google` = the family query for Google Fonts; `stack` = the CSS font-family.
// To offer a new font: add it here AND add its name to the options list in
// public/admin/config.yml (Fonts & Theme).
export const FONTS = {
  'Cormorant Garamond': { google: 'Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600', stack: "'Cormorant Garamond', Georgia, serif" },
  'Playfair Display':    { google: 'Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500', stack: "'Playfair Display', Georgia, serif" },
  'EB Garamond':         { google: 'EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500', stack: "'EB Garamond', Georgia, serif" },
  'Cormorant':           { google: 'Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500', stack: "'Cormorant', Georgia, serif" },
  'Libre Baskerville':   { google: 'Libre+Baskerville:ital,wght@0,400;0,700;1,400', stack: "'Libre Baskerville', Georgia, serif" },
  'Marcellus':           { google: 'Marcellus', stack: "'Marcellus', Georgia, serif" },
  'Cinzel':              { google: 'Cinzel:wght@400;500;600;700', stack: "'Cinzel', Georgia, serif" },
  'Cinzel Decorative':   { google: 'Cinzel+Decorative:wght@400;700;900', stack: "'Cinzel Decorative', Georgia, serif" },
  'Montserrat':          { google: 'Montserrat:wght@300;400;500;600', stack: "'Montserrat', -apple-system, sans-serif" },
  'Jost':                { google: 'Jost:wght@300;400;500', stack: "'Jost', sans-serif" },
  'Italianno':           { google: 'Italianno', stack: "'Italianno', 'Snell Roundhand', cursive" },
  'Great Vibes':         { google: 'Great+Vibes', stack: "'Great Vibes', cursive" },
  'Tangerine':           { google: 'Tangerine:wght@400;700', stack: "'Tangerine', cursive" },
  'Pinyon Script':       { google: 'Pinyon+Script', stack: "'Pinyon Script', cursive" },
};

// Turn a theme selection into the <link> href + the CSS-variable overrides.
export function buildFontTheme(theme = {}) {
  const chosen = {
    '--font-display': theme.headingFont,
    '--font-serif': theme.bodyFont,
    '--font-script': theme.scriptFont,
    '--font-deco': theme.decoFont,
  };
  // Montserrat is always needed for the UI (nav/buttons/labels).
  const families = new Set(['Montserrat']);
  for (const name of Object.values(chosen)) {
    if (FONTS[name]) families.add(name);
  }
  const href =
    'https://fonts.googleapis.com/css2?family=' +
    [...families].map((n) => FONTS[n].google).join('&family=') +
    '&display=swap';

  const vars = {};
  for (const [cssVar, name] of Object.entries(chosen)) {
    if (FONTS[name]) vars[cssVar] = FONTS[name].stack;
  }
  const style = Object.entries(vars).map(([k, v]) => `${k}:${v}`).join('; ');
  return { href, style };
}
