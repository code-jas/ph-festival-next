import React from 'react';
import { FaCodeMerge, FaImages } from 'react-icons/fa6';

interface ViewButtonsProps {
   view: string;
   toggleView: (view: string) => void;
}

const ViewButtons = ({ view, toggleView }: ViewButtonsProps) => {
   return (
      <div className="view-btns">
         <div
            className={`icon-navbar-view timeline ${view === 'gallery' ? 'active-rn' : ''}`}
            onClick={() => toggleView('gallery')}
         >
            <div className="tooltip-timeline">Gallery View</div>
            <span>
               <FaImages />
            </span>
         </div>
         <div
            className={`icon-navbar-view timeline ${view === 'timeline' ? 'active-rn' : ''}`}
            onClick={() => toggleView('timeline')}
         >
            <div className="tooltip-timeline">Timeline View</div>
            <span>
               <FaCodeMerge />
            </span>
         </div>
      </div>
   );
};

export default ViewButtons;
