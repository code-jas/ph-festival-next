'use client';

import React, { useEffect, useState, useRef, ChangeEvent, LegacyRef } from 'react';
import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import FestivalCardtem from './FestivalCardtem';

interface FestivalItem {
   id: string;
   title: string;
   img: string;
   paragraph1: string;
   islandGroup: string;
}

interface FestivalGalleryProps {
   festivals: FestivalItem[];
}

const FestivalGallery: React.FC<FestivalGalleryProps> = ({ festivals }) => {
   const [festivalContent, setFestivalContent] = useState<FestivalItem[]>([]);
   const [searchKeyword, setSearchKeyword] = useState<string>('');
   const [categories, setCategories] = useState<string[]>(['all']);
   const [filteredContent, setFilteredContent] = useState<FestivalItem[]>([]);
   const [searchActive, setSearchActive] = useState<boolean>(false);
   const [clickCount, setClickCount] = useState<number>(0);

   const searchIconRef = useRef<HTMLButtonElement>(null);
   const searchFestRef = useRef<HTMLDivElement>(null);
   const btnsRef = useRef<(HTMLButtonElement | null)[]>([]);
   const searchBarRef = useRef<HTMLInputElement>(null);
   const searchEmptyElRef = useRef<HTMLDivElement>(null);
   const displayInputSearchElRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      const init = async () => {
         try {
            setFestivalContent(festivals);
            setFilteredContent(festivals);
            setCategories(['all', ...new Set(festivals.map((item) => item.islandGroup))]);
         } catch (error) {
            console.error('Error fetching festival details:', error);
         }
      };

      init();
   }, [festivals]);

   const handleCategoryClick = (category: string) => {
      if (category === 'all') {
         setFilteredContent(festivalContent);
      } else {
         const filtered = festivalContent.filter((item) => item.islandGroup === category);
         setFilteredContent(filtered);
      }
   };

   const handleSearchIconClick = () => {
      setSearchActive(!searchActive);
      setClickCount((prevCount) => prevCount + 1);

      if ((clickCount + 1) % 2 === 0) {
         closeSearchInput();
      }
   };

   const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const searchString = e.target.value;
      setSearchKeyword(searchString);

      const filteredSearchFestival = festivalContent.filter((festival) => {
         return festival.title.toLowerCase().includes(searchString.toLowerCase());
      });

      if (searchEmptyElRef.current) {
         if (filteredSearchFestival.length === 0) {
            searchEmptyElRef.current.style.display = 'block';
         } else {
            searchEmptyElRef.current.style.display = 'none';
         }
      }

      setFilteredContent(filteredSearchFestival);
   };

   const closeSearchInput = () => {
      setSearchActive(!searchActive);
      setSearchKeyword('');
      if (searchEmptyElRef.current && searchBarRef.current) {
         searchBarRef.current.style.display = 'none';
         searchEmptyElRef.current.style.display = 'none';
      }
      setFilteredContent(festivalContent);
   };

   const renderCategoryButtons = () => {
      return categories.map((category, index) => (
         <button
            key={category}
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
            type="button"
            data-id={category}
            onClick={() => handleCategoryClick(category)}
            ref={btnsRef.current[index] as LegacyRef<HTMLButtonElement>}
         >
            {category}
         </button>
      ));
   };

   useEffect(() => {
      if (festivalContent.length > 0) {
         setFestivalContent(festivalContent);
         setFilteredContent(festivalContent);
      }
   }, [festivalContent]);

   useEffect(() => {
      if (btnsRef.current.length > 0) {
         btnsRef.current.forEach((btn) => {
            if (btn) {
               btn.classList.toggle('search-hide', !searchActive);
            }
         });
      }
   }, [searchActive]);

   return (
      <>
         <div className="gall-btn-cont">
            {renderCategoryButtons()}
            {/* filtering search buttons */}
            <div
               className={`search-festival ${searchActive ? 'search-active' : ''}`}
               ref={searchFestRef}
            >
               <button
                  onClick={handleSearchIconClick}
                  ref={searchIconRef}
                  className="icon-font-awesome"
               >
                  <FaMagnifyingGlass />
               </button>
               {searchActive && (
                  <div className="input-search">
                     <input
                        type="text"
                        placeholder="Search for a Festival..."
                        id="search-inp-fest"
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                        ref={searchBarRef}
                     />
                  </div>
               )}
               <span className="clear" onClick={closeSearchInput}></span>
            </div>
         </div>

         {filteredContent.length === 0 ? (
            <div
               id="search-result-empty-state"
               className="search-empty-state"
               ref={searchEmptyElRef}
            >
               <Image
                  className="search-empty-icon"
                  alt="Search no result illustration"
                  src="/images/search-empty-icon.svg"
                  width={50}
                  height={50}
               />
               <p className="l-font-size">
                  Sorry we couldn&apos;t find any matches for{' '}
                  <span
                     className="bold"
                     id="search-empty-state-keyword"
                     ref={displayInputSearchElRef}
                  >
                     {searchKeyword}
                  </span>
               </p>
               <p className="m-font-size grey">Please try searching with another term</p>
            </div>
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
