import React, { LegacyRef, useState } from 'react';

interface CategoryButtonsProps {
   categories: string[];
   handleCategoryClick: (category: string) => void;
   btnsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
   categories,
   handleCategoryClick,
   btnsRef,
}) => {
   const [activeCategory, setActiveCategory] = useState<string>('all');

   const onCategoryClick = (category: string) => {
      setActiveCategory(category);
      handleCategoryClick(category);
   };

   return (
      <>
         {categories.map((category, index) => (
            <button
               key={category}
               className={`filter-btn ${category === activeCategory ? 'active' : ''}`}
               onClick={() => onCategoryClick(category)}
               ref={btnsRef.current[index] as LegacyRef<HTMLButtonElement>}
            >
               {category}
            </button>
         ))}
      </>
   );
};

export default CategoryButtons;
