import React from 'react';
import { aboutUsData } from '@/app/components/features/aboutus/aboutUsData';
import Image from 'next/image';
import '@/assets/styles/aboutus.css';
import TeamFeature from '@/app/components/features/aboutus/TeamFeature';
import ContactFeature from '@/app/components/features/aboutus/ContactFeature';

const AboutUs = () => {
   const { about, team, contact } = aboutUsData;

   return (
      <div id="about" className="about-main">
         <div className="work-section">
            <h1>{about.title}</h1>
            <p>{about.content}</p>
            <div style={{ width: '80%', height: '80%' }}>
               <Image
                  src={about.image}
                  alt="team graphic image"
                  width={800} // Replace with the actual width of your image
                  height={600} // Replace with the actual height of your image
                  layout="responsive"
               />
            </div>
         </div>
         <TeamFeature team={team} />
         <ContactFeature contact={contact} />
      </div>
   );
};

export default AboutUs;
