// This file is intended to serve as the single source of truth for all colors used in the app.

export const COLORS = {
  black: 'black',
  grey: 'grey',
  transparent: 'transparent',
  white: 'white',
};

export const LIGHT_COLORS = {
  background9: '#f5f5f5', // Background of Menu item of Settings Screen.

  danger1: '#D63D39',
  danger2: 'red',
  danger3: 'red',

  success1: 'green',
  success2: 'green',
  success3: 'green',

  text1: 'black',
  text2: '#fbfbfc',
  text3: 'black',
  text4: 'black',
  text5: 'black',

  transparent: 'transparent',
};

export const DARK_COLORS = {
  background9: '#8D8D8D', // Background of Menu item of Settings Screen.

  danger1: '#fd5c63',
  danger2: 'red',
  danger3: 'red',

  success1: '#439946',
  success2: 'green',
  success3: 'green',

  text1: '#cec5b4',
  text2: '#fbfbfc',
  text3: 'black',
  text4: 'black',
  text5: 'black',

  transparent: 'transparent',
};

// =====================
// Numerology app theme
// =====================
// This app is dark-first by design (its signature look, not just a
// "dark mode toggle" variant) — deep indigo-navy background with a
// warm gold accent reserved for the result reveal. A light variant is
// kept as an accessibility fallback for users who override system
// settings.

export const INDIGO_LIGHT_THEME = {
  ...LIGHT_COLORS,
  background1: '#F5F3FF', // Main background color of app
  background4: '#E0DBF5', // Divider / hairline color
  background7: '#FFFFFF', // Card / input surface background
  background8: '#FFFFFF', // Result card surface background

  text1: '#1A1730', // Main text color

  gold: '#B8863F', // Result highlight accent (deeper, for contrast on light bg)
  goldMuted: 'rgba(184, 134, 63, 0.14)', // Soft gold fill (result badge backdrop)
};

export const INDIGO_DARK_THEME = {
  ...DARK_COLORS,
  background1: '#151233', // Main background color of app
  background4: '#332C63', // Divider / hairline color
  background7: '#1E1A42', // Card / input surface background
  background8: '#1E1A42', // Result card surface background

  text1: '#EDEAF6', // Main text color (off-white, not pure white)

  gold: '#D4AF6A', // Result highlight accent
  goldMuted: 'rgba(212, 175, 106, 0.16)', // Soft gold fill (result badge backdrop)
};
