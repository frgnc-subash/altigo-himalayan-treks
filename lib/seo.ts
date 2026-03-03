export const SITE_URL = "https://altigohimalayantreks.com";
export const SITE_NAME = "Altigo Himalayan Treks";
export const SITE_EMAIL = "info@altigohimalayantreks.com";
export const SITE_PHONE = "+9779707921000";

export const SOCIAL_LINKS = [
  "https://www.facebook.com/profile.php?id=61584054197541",
  "https://www.instagram.com/altigohimalayantreksofficial/",
  "https://wa.me/9779707921000",
];

export const DEFAULT_OG_IMAGE_PATH = "/backgrounds/bg9.jpeg";

export const packageImageById: Record<string, string> = {
  "langtang-valley": "/gallery/image8.jpeg",
  "annapurna-circuit": "/abc/8.jpg",
  "annapurna-semi-circuit": "/abc/6.jpg",
  "everest-gokyo-cho-la": "/ebc/8.jpg",
  "lower-dolpo-trek": "/backgrounds/bg9.jpeg",
  "nar-phu-valley-jomsom": "/backgrounds/bg4.jpeg",
  "sacred-valley-ruby-valley": "/backgrounds/bg7.jpeg",
  "everest-base-camp": "/ebc/9.jpg",
  "poon-hill": "/gallery/image7.jpeg",
  "upper-mustang": "/upper-mustang/lomanthang.jpg",
};

export const getPackageImagePath = (id: string) =>
  packageImageById[id] || "/backgrounds/bg8.jpeg";

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
