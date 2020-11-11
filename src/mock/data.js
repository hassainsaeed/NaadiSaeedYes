import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '#NaadiSaeedYes', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    "Wedding website to share details and media from Naadirah and Hussain's upcoming wedding", // e.g: Welcome to my website
};

// LIVESTREAM DATA
export const livestreamData = {
  title: 'Livestream',
  lang: 'en',
  description: "A livestream of the events from Naadi and Hussain's Nikkah ceremony, and more!",
};

// HERO DATA
export const heroData = {
  title: "Hi, we're ",
  name: 'Naadirah & Hussain',
  subtitle: "And we're getting married!",
  cta: 'Learn More',
  img: 'sitting.jpg',
};

// ABOUT DATA
export const aboutData = {
  title: "What's Happening?",
  img: 'standing-profile.jpg',
  paragraphOne: 'Alhamdulilah, we are elated to announce that we are tying the knot this year!',
  paragraphTwo:
    "Our Nikkah will take place on November 21st, 2020, Insha'Allah. The Walima will happen at a later date still TBD",
  paragraphThree:
    'As much as we would love to have all our friends join us, due to government regulations the wedding will be for immediate family only. However we hope that through this website you can join us in spirit, and watch our special occaison through Livestream and photos.',
};

// EVENTS DATA
export const eventsData = [
  {
    id: nanoid(),
    img: 'nikkah.jpg',
    title: 'Nikkah Livestream',
    info: 'Watch our Nikkah ceremony, live from Masjid Anatolia and our homes in Mississauga',
    info2:
      "The Nikkah ceremony live stream will start at 10:30AM EST on November 21st, 2020. And don't worry - a recorded video will be available if you miss it!",
    url: '/livestream',
    cta: 'See Live',
  },
  {
    id: nanoid(),
    img: 'baat-pakki.jpg',
    title: 'Baat Pakki Photogallery',
    info:
      'Its a done deal - here is a photo gallery of pictures taken from our beautiful Baat Pakki ceremony to prove it',
    info2: 'Photographs shot and edited by Mohammad Yunus',
    url: '/baatpakki',
    cta: 'See Photos',
  },
  {
    id: nanoid(),
    img: 'engagement.jpg',
    title: 'Engagement Photogallery',
    info:
      'Naadi did infact say yes! Here are some photographs taken from our engagement proposal at St. Lawrence Park, Mississauga',
    info2: 'Photographs shot and edited by Mohammad Yunus',
    url: '/engagement',
    cta: 'See Photos',
  },
  {
    id: nanoid(),
    img: 'favicon.png',
    title: 'Virtual Guestbook',
    info:
      'If you cannot reach us in person, we would be so grateful if you left a note and photo of your beautiful faces for us to see',
    info2: 'Click the link to leave your best wishes and/or selfie for the Bride and Groom!',
    url: '',
    cta: 'Leave a Note',
  },
];

// CONTACT DATA
export const contactData = {
  title: 'Contact',
  cta: 'Have any questions? Feel free to call or shoot a text message at the number below',
  btn: 'Lets Talk',
  phone: '403-473-0115',
};
