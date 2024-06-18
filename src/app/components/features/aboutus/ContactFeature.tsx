import React from 'react';
import { Contact } from './aboutUsData';
import Image from 'next/image';
import ContactInfo from './ContactInfo';

interface ContactFeatureProps {
   contact: Contact;
}
const ContactFeature: React.FC<ContactFeatureProps> = ({ contact }) => {
   const { title, subtitle, details } = contact;
   const { visitUs, contactDetails } = details;
   return (
      <div id="contact-us" className="contact-us-section">
         <h1>{title}</h1>
         <p>{subtitle}</p>
         <div className="contact-us-container">
            <div className="left-cont">
               <div className="contact-description">
                  <h3>{visitUs.title}</h3>
                  <p>{visitUs.content}</p>
               </div>
               <div className="contact-map">
                  <h3>We are on map!</h3>
                  <div className="img-card">
                     <a href={visitUs.mapLink} target="_blank">
                        <Image
                           src={visitUs.mapImage}
                           alt="map"
                           width={262.84}
                           height={200}
                           style={{ objectFit: 'cover' }}
                        />
                     </a>
                  </div>
               </div>
            </div>
            <ContactInfo details={contactDetails} />
         </div>
      </div>
   );
};

export default ContactFeature;
