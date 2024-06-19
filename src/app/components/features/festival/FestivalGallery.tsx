import { FestivalDetailsType } from '@/app/typings/festival-detail-type';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { filterFestivalsByCategory, filterFestivalsBySearch } from './festivalUtils';
import CategoryButtons from './CategoryButtons';
import SearchBar from './SearchBar';
import FestivalCardtem from './FestivalCardItem';
import FestivalEmptyState from './FestivalEmptyState';

interface FestivalGalleryProps {
   festivals: FestivalDetailsType[];
   categories: string[];
}

const FestivalGallery: React.FC<FestivalGalleryProps> = ({ festivals, categories }) => {
   const [searchKeyword, setSearchKeyword] = useState<string>('');
   const [filteredContent, setFilteredContent] = useState<FestivalDetailsType[]>([]);
   const [searchActive, setSearchActive] = useState<boolean>(false);

   const btnsRef = useRef<(HTMLButtonElement | null)[]>([]);
   const searchBarRef = useRef<HTMLInputElement>(null);
   const searchEmptyElRef = useRef<HTMLDivElement>(null);
   const displayInputSearchElRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      setFilteredContent(festivals);
   }, [festivals]);

   const handleCategoryClick = (category: string) => {
      const filtered = filterFestivalsByCategory(festivals, category);
      setFilteredContent(filtered);
   };

   const handleSearchIconClick = () => {
      setSearchActive(!searchActive);

      if (searchActive) {
         closeSearchInput();
      }
   };

   const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const searchString = e.target.value;
      setSearchKeyword(searchString);

      const filteredSearchFestival = filterFestivalsBySearch(festivals, searchString);

      if (searchEmptyElRef.current) {
         searchEmptyElRef.current.style.display =
            filteredSearchFestival.length === 0 ? 'block' : 'none';
      }

      setFilteredContent(filteredSearchFestival);
   };

   const closeSearchInput = () => {
      setSearchActive(false);
      setSearchKeyword('');
      if (searchEmptyElRef.current && searchBarRef.current) {
         searchBarRef.current.style.display = 'none';
         searchEmptyElRef.current.style.display = 'none';
      }
      setFilteredContent(festivals);
   };

   return (
      <>
         <div className="gall-btn-cont">
            <CategoryButtons
               categories={categories}
               handleCategoryClick={handleCategoryClick}
               btnsRef={btnsRef}
            />
            <SearchBar
               searchActive={searchActive}
               searchKeyword={searchKeyword}
               handleSearchIconClick={handleSearchIconClick}
               handleSearchInputChange={handleSearchInputChange}
               closeSearchInput={closeSearchInput}
               searchBarRef={searchBarRef}
            />
         </div>

         {filteredContent.length === 0 ? (
            <FestivalEmptyState
               searchKeyword={searchKeyword}
               searchEmptyElRef={searchEmptyElRef}
               displayInputSearchElRef={displayInputSearchElRef}
            />
         ) : (
            <main className="fest-gallery-main">
               {/* {displayFestivalItems(filteredContent)} */}
               {filteredContent.map((festival) => (
                  <FestivalCardtem
                     key={festival.id}
                     id={festival.id.toString()}
                     img={festival.img}
                     title={festival.title}
                     description={festival.paragraph1}
                  />
               ))}
            </main>
         )}
      </>
   );
};

export default FestivalGallery;
