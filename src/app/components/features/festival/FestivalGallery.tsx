import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import './YourComponent.css'; // Import your CSS file if needed

const FestivalGallery = ({ searchKeyword, imageUrl }) => {
  return (
    <div className="js-cont">
      <div className="js-scroll">
        <div className="global-fest">
          <div className="gall-title">
            <h1>Festival Gallery</h1>
            <div className="underline"></div>
          </div>

          <div className="gall-btn-cont">
            {/* Add your button components or other elements here */}
          </div>

          <div id="search-result-empty-state" className="search-empty-state">
            <Image 
              className="search-empty-icon" 
              alt="Search no result illustration" 
              src={imageUrl} 
              width={50} 
              height={50} 
            />

            <p className="l-font-size">Sorry we couldn&apos;t find any matches for <span className="bold" id="search-empty-state-keyword">{searchKeyword}</span></p>

            <p className="m-font-size grey">Please try searching with another term</p>
          </div>
          <main className="fest-gallery-main">
            {/* Add your main gallery content here */}
          </main>
        </div>
      </div>
    </div>
  );
};

FestivalGallery.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default FestivalGallery;
