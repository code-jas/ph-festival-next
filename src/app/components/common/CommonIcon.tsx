import { icons } from '@/app/libs/icons';
import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
   name: string;
   size?: number;
   color?: string;
   className?: string;
}

const CommonIcon: React.FC<IconProps> = ({
   name,
   size = 24,
   color = 'currentColor',
   className = '',
}) => {
   const IconComponent: IconType = icons[name];

   if (!IconComponent) {
      console.log('No declared icons in icon.ts');
      return null;
   }

   return <IconComponent size={size} color={color} className={className} />;
};

export default CommonIcon;
