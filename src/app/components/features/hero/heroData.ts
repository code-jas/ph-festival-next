interface Feature {
   imageSrc: string;
   title: string;
   description: string;
}

interface HeroData {
   header: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      imageSrc: string;
      imageAlt: string;
   };
   features: Feature[];
}

export const heroData: HeroData = {
   header: {
      title: 'Philippines Festival Dance',
      description:
         "Festivals are part of our culture in the Philippines where each city or province has a local fiesta. Festivals are the way to promote different province's patron saint or most known product and understand it. It helps us to keep connection with our culture and origin, and to preserve it.",
      buttonText: 'Check it now',
      buttonLink: '/Festival-Gallery',
      imageSrc: '/images/homepage-clip1.png',
      imageAlt: 'Festival Clip-art',
   },
   features: [
      {
         imageSrc: '/images/festival-features-img1.jpg',
         title: 'Be Informed',
         description: 'Be informed and gain knowledge about different festivals in the Philippines',
      },
      {
         imageSrc: '/images/festival-features-img2.jpg',
         title: 'Explore',
         description: 'Explore the beauty of the different festivals in the Philippines',
      },
      {
         imageSrc: '/images/festival-features-img3.jpg',
         title: 'Discover',
         description:
            'Discover different and unique culture of different festivals in the Philippines',
      },
   ],
};
