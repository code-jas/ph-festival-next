import React from 'react';
import Image from 'next/image';

interface FestivalEmptyStateProps {
   searchKeyword: string;
   searchEmptyElRef: React.RefObject<HTMLDivElement>;
   displayInputSearchElRef: React.RefObject<HTMLSpanElement>;
}

const FestivalEmptyState: React.FC<FestivalEmptyStateProps> = ({
   searchKeyword,
   searchEmptyElRef,
   displayInputSearchElRef,
}) => {
   return (
      <div id="search-result-empty-state" className="search-empty-state" ref={searchEmptyElRef}>
         <Image
            className="search-empty-icon"
            alt="Search no result illustration"
            src="/images/search-empty-icon.svg"
            width={50}
            height={50}
         />
         <p className="l-font-size">
            Sorry we couldn&apos;t find any matches for{' '}
            <span className="bold" id="search-empty-state-keyword" ref={displayInputSearchElRef}>
               {searchKeyword}
            </span>
         </p>
         <p className="m-font-size grey">Please try searching with another term</p>
      </div>
   );
};

export default FestivalEmptyState;
