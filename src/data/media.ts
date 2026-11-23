// Approved brand assets and photography.
// Drop files at these paths in /public and they replace the graphic fallbacks automatically.
export const LOGO = { full: '/brand/becci-logo.svg', mark: '/brand/becci-emblem.svg' };

export const PHOTOS = {
  homeHero: { src: '/images/home-hero.jpg', alt: 'BECCI members at a chamber gathering' },
  aboutCover: { src: '/images/about-cover.jpg', alt: 'Entrepreneurs at a BECCI meeting' },
  aboutStory: { src: '/images/about-story.jpg', alt: 'A Bahujan entrepreneur at work' },
  founder: { src: '/images/founder.jpg', alt: 'Founder of BECCI' },
} as const;
