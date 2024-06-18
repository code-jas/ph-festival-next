import React from 'react';
import type { ContactDetails } from './aboutUsData';
import CommonIcon from '../../common/CommonIcon';

interface ContactInfoProps {
   details: ContactDetails[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ details }) => {
   return (
      <div className="contact-info">
         <h3>Contact Information</h3>
         <div className="contact-info-details">
            {details &&
               details.map((detail, index) => (
                  <div key={index} className="contact-detail">
                     <label className="contact-details-label">{detail.label}</label>
                     <br />
                     <div className="input-icon">
                        {detail.type === 'textarea' ? (
                           <textarea className="contact-text-area" value={detail.value} readOnly />
                        ) : (
                           <input
                              className="contact-textbox"
                              type={detail.type}
                              value={detail.value}
                              readOnly
                           />
                        )}
                        <i>
                           <CommonIcon name={detail.icon} size={18} />
                        </i>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default ContactInfo;
