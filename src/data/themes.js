// Exactly Four Selectable Royal Color Worlds Aligned with Master Specification
// 1. SUNSET_ROYAL: Dark cinematic modern royal (dark charcoal, white, coral orange, muted green)
// 2. DARK_ROYAL: Luxury editorial royal (dusty rose terracotta, cream beige, warm gray taupe, dark brown, leaf green)
// 3. LIGHT_ROYAL: Bright luxury technology (royal white, soft cream, champagne gold, light blue, pearl) - UNCHANGED
// 4. WINTER_ROYAL: Luxury winter glass royal (soft light green, milk green, luxury white, deep elegant green)

export const THEMES = {
  sunset_royal: {
    id: 'sunset_royal',
    name: 'Sunset Royal',
    identity: 'Dark cinematic modern royal',
    mood: 'Dark charcoal environment with controlled coral-orange highlights and muted green reflections',
    description: 'A cinematic modern dark royal environment with dark charcoal background, coral-orange highlights, muted green reflections, and crisp white inner accents.',
    background: '#1C1E24',
    backgroundSecondary: '#242730',
    surface: 'rgba(28, 30, 36, 0.92)',
    surfaceSecondary: '#282C35',
    surfaceCard: 'rgba(32, 35, 43, 0.95)',
    surfaceBorder: 'rgba(255, 107, 87, 0.35)',
    innerBackground: '#FFFFFF',
    foreground: '#FFFFFF',
    text: '#FFFFFF',
    textSecondary: '#C5CBD3',
    primary: '#FF6B57', // coral orange
    primaryDark: '#D44C3A',
    secondary: '#8A9A86', // muted green
    accent: '#FF6B57', // main accent: coral orange
    accentBright: '#FFA092',
    naturalAccent: '#8A9A86',
    muted: '#8A9A86',
    border: 'rgba(255, 107, 87, 0.28)',
    glow: '#FF6B57',
    glowColor: 'rgba(255, 107, 87, 0.55)',
    goldGlow: 'rgba(138, 154, 134, 0.45)',
    rimLight: '#FFFFFF',
    particleColors: ['#FF6B57', '#FFFFFF', '#8A9A86'],
    environment: 'Dark charcoal environment with controlled coral-orange highlights and muted green reflections',
    lighting: 'Dark charcoal environment with controlled coral-orange highlights and muted green reflections.',
    visualLanguage: ['Dark charcoal', 'White', 'Coral orange', 'Muted green', 'Natural luxury'],
    buttonStyle: 'Dark charcoal button with coral-orange rim and crisp white text.',
    badge: 'Dark Cinematic Modern Royal',
    iconName: 'Sun',
    bgGradient: 'radial-gradient(circle at 50% 12%, #262A34 0%, #1C1E24 60%, #131418 100%)',
    orbGradient: 'radial-gradient(circle, #FF6B57 0%, #8A9A86 52%, #FFFFFF 100%)'
  },

  dark_royal: {
    id: 'dark_royal',
    name: 'Dark Royal',
    identity: 'Luxury editorial royal',
    mood: 'Soft dusty-rose lighting with warm cream highlights and subtle leaf-green reflections',
    description: 'A mature, expensive, and professional luxury editorial royal atmosphere featuring dusty rose muted terracotta, warm cream beige, taupe depth, dark brown typography, and leaf green nature accents.',
    background: '#F0ECE7', // page background: cream beige
    backgroundSecondary: '#E5DFD7',
    outerBackground: '#8C827B', // warm gray taupe
    surface: 'rgba(240, 236, 231, 0.94)',
    surfaceSecondary: '#8C827B',
    surfaceCard: '#FFFFFF',
    surfaceBorder: '#A97B76',
    foreground: '#3B312E',
    text: '#3B312E', // primary text: dark brown
    textSecondary: '#665B57',
    primary: '#A97B76', // main blocks & headers: dusty rose muted terracotta
    primaryDark: '#855954',
    secondary: '#8C827B', // warm gray taupe
    accent: '#A97B76', // dusty rose muted terracotta
    accentBright: '#C59A95',
    natureAccent: '#6A9B53', // leaf green
    muted: '#8C827B',
    border: '#C7BDB6',
    glow: '#A97B76',
    glowColor: 'rgba(169, 123, 118, 0.45)',
    goldGlow: 'rgba(106, 155, 83, 0.35)',
    rimLight: '#F0ECE7',
    particleColors: ['#F0ECE7', '#A97B76', '#6A9B53'],
    environment: 'Soft dusty-rose lighting with warm cream highlights and subtle leaf-green reflections',
    lighting: 'Soft dusty-rose lighting with warm cream highlights and subtle leaf-green reflections.',
    visualLanguage: ['Dusty rose terracotta', 'Cream beige', 'Warm gray taupe', 'Dark brown', 'Leaf green'],
    buttonStyle: 'Dusty rose block button with warm cream highlights and dark brown typography.',
    badge: 'Luxury Editorial Royal',
    iconName: 'Moon',
    bgGradient: 'radial-gradient(circle at 50% 12%, #F7F4F0 0%, #F0ECE7 60%, #E3DDD5 100%)',
    orbGradient: 'radial-gradient(circle, #A97B76 0%, #6A9B53 50%, #F0ECE7 100%)'
  },

  light_royal: {
    id: 'light_royal',
    name: 'Light Royal',
    identity: 'Bright luxury technology',
    mood: 'Bright luxury technology with royal white, soft cream, champagne gold, light blue and pearl',
    description: 'A luminous white and cream technology palace with champagne gold accents, crystal light blue reflections, and pearl glow.',
    background: '#FAF7F2',
    backgroundSecondary: '#F2EDE4',
    surface: '#FFFFFF',
    surfaceSecondary: '#F7F3EB',
    surfaceCard: 'rgba(255, 255, 255, 0.95)',
    surfaceBorder: '#E3DACB',
    foreground: '#121C2B',
    text: '#121C2B',
    textSecondary: '#607085',
    primary: '#93C5FD', // light blue
    primaryDark: '#1E3A8A',
    secondary: '#E2E8F0', // pearl
    accent: '#D4AF37', // champagne gold
    accentBright: '#E5C467',
    softCream: '#FAF7F2',
    muted: '#607085',
    border: '#E3DACB',
    glow: '#93C5FD',
    glowColor: 'rgba(147, 197, 253, 0.55)',
    goldGlow: 'rgba(212, 175, 55, 0.4)',
    rimLight: '#D4AF37',
    particleColors: ['#FFFFFF', '#D4AF37', '#93C5FD', '#E2E8F0', '#E5C467'],
    environment: 'Bright luxury cream environment with pearl and gold particles floating in studio light',
    lighting: 'Premium studio lighting with champagne gold highlights and soft light blue ambient fill',
    visualLanguage: ['Royal white', 'Soft cream', 'Champagne gold', 'Light blue', 'Pearl', 'Crystal reflections'],
    buttonStyle: 'Champagne gold or crisp royal-white button with light-blue glow and dark luxury text.',
    badge: 'Bright Luxury Technology',
    iconName: 'Sparkles',
    bgGradient: 'radial-gradient(circle at 50% 12%, #F2EDE4 0%, #FAF7F2 60%, #E9E1D4 100%)',
    orbGradient: 'radial-gradient(circle, #FFFFFF 0%, #93C5FD 50%, #D4AF37 95%)'
  },

  winter_royal: {
    id: 'winter_royal',
    name: 'Winter Royal',
    identity: 'Luxury winter glass royal',
    mood: 'Soft white cinematic lighting with light-green and milk-green reflections',
    description: 'A luxury winter glass royal atmosphere featuring soft winter light green, milk green secondary tones, pure luxury white surfaces, and deep elegant green accents.',
    background: '#E8F3ED', // primary_background: soft winter light green
    backgroundSecondary: '#D4EAE0', // secondary_background: milk green
    surface: '#FFFFFF', // surface: luxury white
    surfaceSecondary: '#D4EAE0',
    surfaceCard: 'rgba(255, 255, 255, 0.95)',
    surfaceBorder: 'rgba(27, 67, 50, 0.18)',
    foreground: '#1D2E26', // dark premium green-gray
    text: '#1D2E26', // dark premium green-gray
    textSecondary: '#4A6256',
    primary: '#1B4332', // accent: deep elegant green
    primaryDark: '#0F261D',
    secondary: '#82C29B', // milk green tint
    accent: '#1B4332', // deep elegant green
    accentBright: '#2D6A4F',
    muted: '#628072',
    border: 'rgba(27, 67, 50, 0.18)',
    glow: '#82C29B',
    glowColor: 'rgba(130, 194, 155, 0.55)',
    goldGlow: 'rgba(27, 67, 50, 0.35)',
    rimLight: '#FFFFFF',
    particleColors: ['#FFFFFF', '#D4EAE0', '#1B4332', '#A3D9C9'],
    environment: 'Fresh luxury winter glass atmosphere with pure white and soft green reflections',
    lighting: 'Soft white cinematic lighting with light-green and milk-green reflections.',
    visualLanguage: ['Soft light green', 'Milk green', 'Luxury white', 'Deep elegant green', 'Glass reflections'],
    buttonStyle: 'Deep elegant green button with luxury white glass reflections and crisp contrast.',
    badge: 'Luxury Winter Glass Royal',
    iconName: 'Crown',
    bgGradient: 'radial-gradient(circle at 50% 12%, #F0F8F4 0%, #E8F3ED 60%, #D4EAE0 100%)',
    orbGradient: 'radial-gradient(circle, #FFFFFF 0%, #D4EAE0 50%, #1B4332 95%)'
  }
};
