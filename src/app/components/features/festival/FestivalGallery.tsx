'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const FestivalGallery = () => {
  const [festivalContent, setFestivalContent] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [categories, setCategories] = useState(['all']);
  const [filteredContent, setFilteredContent] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const searchIconRef = useRef(null);
  const searchFestRef = useRef(null);
  const btnsRef = useRef([]);
  const searchBarRef = useRef(null);
  const searchEmptyElRef = useRef(null);
  const displayInputSearchElRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/festivalDetails');
        const data = await response.json();
        setFestivalContent(data);
        setFilteredContent(data);
        setCategories(['all', ...new Set(data.map(item => item.islandGroup))]);
      } catch (error) {
        console.error('Error fetching festival details:', error);
      }
    };

    fetchData();
  }, []);

  const sortByName = (data) => {
    return data.sort((a, b) => a.title.localeCompare(b.title));
  };

  const truncateWords = (str, numWords = 20) => {
    return str.split(' ').slice(0, numWords).join(' ') + '...';
  };

  const displayFestivalItems = (festivalItems) => {
    return festivalItems.map((item) => (
      <a key={item.id} href={`viewFestivalDetails.php?id=${item.id}`}>
        <div className="festival-card">
          <div className="img-box">
            <Image src={item.img} alt={item.title} width={300} height={378} style={{ objectFit: 'cover' }} />
          </div>
          <div className="fest-info">
            <h3>{item.title}</h3>
            <div className="short-desc">
              <p>{truncateWords(item.paragraph1)}</p>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setFilteredContent(festivalContent);
    } else {
      const filtered = festivalContent.filter(item => item.islandGroup === category);
      setFilteredContent(filtered);
    }
  };

  const handleSearchIconClick = () => {
    setSearchActive(!searchActive);
    setClickCount(prevCount => prevCount + 1);

    if ((clickCount + 1) % 2 === 0) {
      closeSearchInput();
    }
  };

  const handleSearchInputChange = (e) => {
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
    setSearchKeyword('');
    if (searchEmptyElRef.current) {
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
        ref={el => btnsRef.current[index] = el}
      >
        {category}
      </button>
    ));
  };

  useEffect(() => {
    if (festivalContent.length > 0) {
      const sortedData = sortByName(festivalContent);
      setFestivalContent(sortedData);
      setFilteredContent(sortedData);
    }
  }, [festivalContent]);

  useEffect(() => {
    if (btnsRef.current.length > 0) {
      btnsRef.current.forEach(btn => {
        if (btn) {
          btn.classList.toggle('search-hide', !searchActive);
        }
      });
    }
  }, [searchActive]);

  return (
    <div className="js-cont">
      <div className="js-scroll">
        <div className="global-fest">
          <div className="gall-title">
            <h1>Festival Gallery</h1>
            <div className="underline"></div>
          </div>

          <div className="gall-btn-cont">
            {renderCategoryButtons()}
            <div className={`search-festival ${searchActive ? 'search-active' : ''}`} ref={searchFestRef}>
              <i className="fas fa-search icon-font-awesome" onClick={handleSearchIconClick} ref={searchIconRef}></i>
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
              <span className="clear" onClick={closeSearchInput}></span>
            </div>
          </div>

          {filteredContent.length === 0 ? (
            <div id="search-result-empty-state" className="search-empty-state" ref={searchEmptyElRef}>
              <Image
                className="search-empty-icon"
                alt="Search no result illustration"
                src="/images/search-empty-icon.svg"
                width={50}
                height={50}
              />
              <p className="l-font-size">Sorry we couldn&apos;t find any matches for <span className="bold" id="search-empty-state-keyword" ref={displayInputSearchElRef}>{searchKeyword}</span></p>
              <p className="m-font-size grey">Please try searching with another term</p>
            </div>
          ) : (
            <main className="fest-gallery-main">
              {displayFestivalItems(filteredContent)}
            </main>
          )}
        </div>
      </div>
    </div>
  );
};

export default FestivalGallery;
