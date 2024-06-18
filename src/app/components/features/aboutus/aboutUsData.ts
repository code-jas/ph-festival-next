export interface About {
   title: string;
   content: string;
   image: string;
}

export interface Member {
   name: string;
   role: string;
   image: string;
   socialLinks: {
      facebook: string;
      twitter: string;
      instagram: string;
   };
}
export interface Team {
   title: string;
   subtitle: string;
   members: Member[];
}

export interface VisitUs {
   title: string;
   content: string;
   mapLink: string;
   mapImage: string;
}
export interface ContactDetails {
   label: string;
   type: string;
   value: string;
   icon: string;
}
export interface ContactUsDetails {
   visitUs: VisitUs;
   contactDetails: ContactDetails[];
}
export interface Contact {
   title: string;
   subtitle: string;
   details: ContactUsDetails;
}

export interface FooterQuickLinks {
   name: string;
   href: string;
}

export interface FooterSocialMedia {
   platform: string;
   icon: string;
   href: string;
}

export interface Footer {
   logo: string;
   brandingImage: string;
   tagline: string;
   quickLinks: FooterQuickLinks[];
   socialMedia: FooterSocialMedia[];
   copyright: string;
}

export interface AboutUsData {
   about: About;
   team: Team;
   contact: Contact;
   footer: Footer;
}

export const aboutUsData: AboutUsData = {
   about: {
      title: 'About Us',
      content: `In the Philippines, festivals provide an opportunity for people to showcase their rich culture and pay
                             homage to their history and patron saints. They are lively, large, and lavishly celebrated with pomp and
                             circumstance. It's unsurprising that each province has its unique Filipino Fiesta, which they are
                             extremely
                             proud of. Our works are intended to educate readers about the various festivals observed in the
                             Philippines
                             each year. We hope that through this site, we will pique people's interest in and exploration of the
                             Philippines' natural splendor. This site will also assist our users in learning something new and in
                             comprehending the many stories behind the festivals we celebrate in the Philippines each year.`,
      image: '/images/about-img1.png',
   },
   team: {
      title: 'The Team',
      subtitle: "We're a small team obsessed with productivity",
      members: [
         {
            name: 'John Angelo Silvestre',
            role: 'Lead Developer',
            image: '/images/team/angelo.jpg',
            socialLinks: {
               facebook: 'https://www.facebook.com/angelo.silvestre.315',
               twitter: 'https://twitter.com/CodeJs04',
               instagram: 'https://www.instagram.com/iamgroot04/',
            },
         },
         {
            name: 'Ma. Angelica Cueto',
            role: 'Design',
            image: '/images/team/angelica.jpg',
            socialLinks: {
               facebook: 'https://www.facebook.com/profile.php?id=100009214490263',
               twitter: 'https://twitter.com/anggecuetz',
               instagram:
                  'https://www.instagram.com/angge_cueto/?fbclid=IwAR16B4R2SOod8rDWCLY9ztHs_6ZbtUcREU073vIqv_H7qzY12PSetvDTCDY',
            },
         },
         {
            name: 'Raymond Matullano',
            role: 'Design',
            image: '/images/team/raymond.jpg',
            socialLinks: {
               facebook: 'https://www.facebook.com/r.matullano00',
               twitter: 'https://twitter.com/kittybunny22?t=dw-ukWMexy_wiRD0fdySIg&s=07',
               instagram: 'https://www.instagram.com/bunnypuu/',
            },
         },
         {
            name: 'John Mark Pareja',
            role: 'Migration',
            image: '/images/team/Pareja.jpg',
            socialLinks: {
               facebook: 'https://www.facebook.com/jmark404',
               twitter: 'https://www.twitter.com/jmark404',
               instagram: 'https://www.instagram.com/makmarkuss',
            },
         },
         {
            name: 'Chandy Mae Fortunado',
            role: 'Documentation',
            image: '/images/team/chandy.jpg',
            socialLinks: {
               facebook: 'https://www.facebook.com/cm.fortunado',
               twitter: 'https://twitter.com/chanfrtnd?t=WRthD06hzywOvPSstj5oYA&s=09',
               instagram:
                  'https://www.instagram.com/invites/contact/?i=1cu0bhosifqvb&utm_content=2qrtkl6',
            },
         },
         {
            name: 'Karl Jezrel Anglo',
            role: 'Documentation',
            image: '/images/team/karl.jpg',
            socialLinks: {
               facebook: 'https://www.facebook.com/karljezrel.anglo',
               twitter: 'https://twitter.com/AngloTan',
               instagram: 'https://www.instagram.com/xxgeloyeloxx/',
            },
         },
      ],
   },
   contact: {
      title: 'Get in Touch',
      subtitle: "How can we help you? We'd love to hear from you.",
      details: {
         visitUs: {
            title: 'Come to see us!',
            content: `Festival Ph team want you to be part of growing our website. Come and reach us now to help us
                                        improve our website. We are open to receive all suggestions and feedbacks.`,
            mapLink: 'https://mapcarta.com/W28395565',
            mapImage: '/images/map.png',
         },
         contactDetails: [
            {
               label: 'E-mail',
               type: 'text',
               value: 'phfestival2022@gmail.com',
               icon: 'envelope',
            },
            {
               label: 'Facebook',
               type: 'text',
               value: 'ph.festival2022',
               icon: 'facebook',
            },
            {
               label: 'Phone',
               type: 'text',
               value: '0965-387-0742',
               icon: 'phone',
            },
            {
               label: 'Address',
               type: 'textarea',
               value: `Technological University of the Philippines @ Ayala Blvd, Ermmita, Manila, 1000 Metro Manila`,
               icon: 'map',
            },
         ],
      },
   },
   footer: {
      logo: '/images/logo/Festival Ph - Logo 96x96.png',
      brandingImage: 'https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png',
      tagline: 'Make it a memorable Festival Experience in the Philippines',
      quickLinks: [
         { name: 'Home', href: '#home' },
         { name: 'Festival', href: 'festival.html' },
         { name: 'About Us', href: 'aboutus.html' },
      ],
      socialMedia: [
         { platform: 'Instagram', icon: 'fab fa-instagram', href: '#' },
         { platform: 'Facebook', icon: 'fab fa-facebook', href: '#' },
         { platform: 'Google Plus', icon: 'fab fa-google-plus-square', href: '#' },
      ],
      copyright: 'Copyright © FestivalPh 2021.',
   },
};
