import React, { useEffect, useState } from 'react';
import { FestivalDetailsType } from '@/app/typings/festival-detail-type';
import '@/assets/styles/festival-timeline.css';

interface FestivalClientProps {
  festivals: FestivalDetailsType[];
}

const FestivalTimeline: React.FC<FestivalClientProps> = ({ festivals }) => {
  const [sortedFestivals, setSortedFestivals] = useState<FestivalDetailsType[]>([]);

  useEffect(() => {
    const sorted = sortMonth([...festivals]);
    console.log('sorted :>> ', sorted);
    setSortedFestivals(sorted);
  }, [festivals]);

  const sortMonth = (festival: FestivalDetailsType[]) => {
    return festival.sort((a, b) => {
      return new Date(a.dateFormat).getTime() - new Date(b.dateFormat).getTime() || a.title.localeCompare(b.title);
    });
  };

  const truncateWords = (shortDesc: string) => {
    const words = shortDesc.split(' ');
    const amount = 35, tail = '...';

    if (amount >= words.length) {
      return shortDesc;
    }

    const truncated = words.slice(0, amount);
    return `${truncated.join(' ')}${tail}`;
  };

  const getMonthInWord = (month: number) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];
  };

  const displayFestivalTimelineItems = (festivalItems: FestivalDetailsType[]) => {
    return festivalItems.map((item, index) => {
        console.log('item.dateFormat :>> ', item.dateFormat);
      const date = new Date(item.dateFormat);
      console.log('date :>> ', date);
      const month = getMonthInWord(date.getMonth());
      console.log('month :>> ', month);
      return (
        <React.Fragment key={index}>
          <li className="fest-tl-list">
            <h3 className="fest-tl-hd1">{item.title}</h3>
            <p className="fest-tl-hd2">{item.date}</p>
            <p>{truncateWords(item.paragraph1)}</p>
            <a href="#">Read More </a>
          </li>
          <span className="fest-tl-date">{month}</span>
          <span className="fest-tl-circle"></span>
        </React.Fragment>
      );
    });
  };

  return (
    <div className='main-tl'>
      {/* <pre>{JSON.stringify(festivals, null, 2)}</pre> */}
      <div className="fest-tl-cont">
        <ul id="fest-tl-lms">
          {displayFestivalTimelineItems(sortedFestivals)}
        </ul>
      </div>
    </div>
  );
};

export default FestivalTimeline;
