import React, { ChangeEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchBarProps {
   searchActive: boolean;
   searchKeyword: string;
   handleSearchIconClick: () => void;
   handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
   closeSearchInput: () => void;
   searchBarRef: React.RefObject<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
   searchActive,
   searchKeyword,
   handleSearchIconClick,
   handleSearchInputChange,
   closeSearchInput,
   searchBarRef,
}) => {
   return (
      <div className={`search-festival ${searchActive ? 'search-active' : ''}`}>
         <button onClick={handleSearchIconClick} className="icon-font-awesome">
            <FaMagnifyingGlass />
         </button>
         {searchActive && (
            <div className="input-search">
               <input
                  type="text"
                  placeholder="Search for a Festival..."
                  value={searchKeyword}
                  onChange={handleSearchInputChange}
                  ref={searchBarRef}
               />
            </div>
         )}
         <span className="clear" onClick={closeSearchInput}></span>
      </div>
   );
};

export default SearchBar;
