// Photographs on the homepage BECCI cards. They are illustrative images created with AI image generation
// (Figma AI, Nov 2026) for this website. They do not show real BECCI members, staff or events.
export interface Photo { src: string; alt: string }

const img = (n: string) => `/images/home/${n}`;

export const photos = {
  bahujan: { src: img('bahujan'), alt: 'A group of Indian professionals in conversation in a bright modern atrium' },
  entrepreneurs: { src: img('entrepreneurs'), alt: 'A woman entrepreneur reviewing fabric samples with a younger colleague in her design studio' },
  chamber: { src: img('chamber'), alt: 'Business leaders in discussion around a boardroom table' },
  commerce: { src: img('commerce'), alt: 'Two business owners shaking hands across a table in a business lounge' },
  industry: { src: img('industry'), alt: 'A plant director and an engineer discussing production in a modern factory' },
} satisfies Record<string, Photo>;

export const PHOTO_NOTE = 'The photographs on the homepage cards are illustrative images created with AI. They do not show real BECCI members, staff or events.';

export const srcset = (p: Photo) => `${p.src}-640.webp 640w, ${p.src}-1024.webp 1024w`;
