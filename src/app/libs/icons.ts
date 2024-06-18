import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaXTwitter, FaEnvelope, FaPhone, FaMap } from 'react-icons/fa6';
interface IconMap {
   [key: string]: IconType;
}

export const icons: IconMap = {
   facebook: FaFacebook,
   twitter: FaXTwitter,
   instagram: FaInstagram,
   envelope: FaEnvelope,
   phone: FaPhone,
   map: FaMap,
};
