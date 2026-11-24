// Photographs used on the homepage. All from Wikimedia Commons under the licence shown, resized, sometimes cropped, and converted to WebP.
// They are illustrative of BECCI's themes; none shows BECCI members or BECCI events.
export interface Photo { src: string; alt: string; by: string; licence: string; licenceUrl: string; page: string; title: string }

const img = (n: string) => `/images/home/${n}`;

export const photos = {
  bahujan: { src: img('bahujan'), alt: 'Two women beside hand-drawn community planning charts on a wall', title: 'India 2, GHR 14', by: 'Trócaire from Ireland', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0', page: 'https://commons.wikimedia.org/wiki/File:India_2,_GHR_14_(10265551223).jpg' },
  entrepreneurs: { src: img('entrepreneurs'), alt: 'A woman weaving at a handloom', title: 'Mecheri weavers', by: 'Mecheri prabhagaran weavers', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0', page: 'https://commons.wikimedia.org/wiki/File:Mecheri_weavers.jpg' },
  chamber: { src: img('chamber'), alt: 'A group of young people talking together around a table', title: 'UFV Chandigarh + SD College students', by: 'University of the Fraser Valley', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0', page: 'https://commons.wikimedia.org/wiki/File:UFV_Chandigarh_%2B_SD_College_students_(25534810033).jpg' },
  commerce: { src: img('commerce'), alt: 'A shopkeeper in his textile shop, surrounded by fabrics', title: 'Shopkeeper selling traditional clothes', by: 'Bhaiyaji Smile 123', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0', page: 'https://commons.wikimedia.org/wiki/File:Shopkeeper_selling_traditional_clothes_05.jpg' },
  industry: { src: img('industry'), alt: 'Workers assembling electric fans in a small factory', title: 'India - Varanasi electric fan factory', by: 'Jorge Royan', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0', page: 'https://commons.wikimedia.org/wiki/File:India_-_Varanasi_electric_fan_factory_-_1464.jpg' },
  craft: { src: img('craft'), alt: 'A craftsman at work in his workshop', title: 'At workshop', by: 'Sushilsakhuja', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0', page: 'https://commons.wikimedia.org/wiki/File:AT_WORKSHOP.jpg' },
  shop: { src: img('shop'), alt: 'A shop owner showing a lehenga to a customer', title: 'A store person showcases a lehenga', by: 'Siddharth Srivastava', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0', page: 'https://commons.wikimedia.org/wiki/File:A-store-person-showcases-a-lehenga.jpg' },
} satisfies Record<string, Photo>;

export const srcset = (p: Photo) => `${p.src}-800.webp 800w, ${p.src}-1600.webp 1600w`;
