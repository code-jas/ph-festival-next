// utils.js
export const sortByName = (data: any) => {
   return data.sort((a: any, b: any) => a.name.localeCompare(b.name));
};

export const filterFestivalsByCategory = (festivals: FestivalDetailsType[], category: string) => {
   if (category === 'all') return festivals;
   return festivals.filter((item) => item.islandGroup === category);
};

export const filterFestivalsBySearch = (festivals: FestivalDetailsType[], searchString: string) => {
   return festivals.filter((festival) =>
      festival.title.toLowerCase().includes(searchString.toLowerCase()),
   );
};

// TIMELINE
// utils/festivalUtils.ts

import { FestivalDetailsType } from '@/app/typings/festival-detail-type';

export const sortByMonth = (festival: FestivalDetailsType[]) => {
   return festival.sort((a, b) => {
      return (
         new Date(a.dateFormat).getTime() - new Date(b.dateFormat).getTime() ||
         a.title.localeCompare(b.title)
      );
   });
};

export const truncateWords = (shortDesc: string) => {
   const words = shortDesc.split(' ');
   const amount = 35,
      tail = '...';

   if (amount >= words.length) {
      return shortDesc;
   }

   const truncated = words.slice(0, amount);
   return `${truncated.join(' ')}${tail}`;
};

export const getMonthInWord = (month: number) => {
   const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   return monthNames[month];
};
