import React from 'react';
import { FaImages, FaListUl } from 'react-icons/fa6';

interface ViewButtonsProps { 
  toggleView: (view: string) => void;
}

const ViewButtons = ({ toggleView }: ViewButtonsProps) => {
    return (
        <div className="view-btns">
            <div className="icon-navbar-view timeline active-rn" onClick={() => toggleView('gallery')}>
                <div className="tooltip-timeline">Gallery View</div>
                <span><FaImages /></span>
            </div>
            <div className="icon-navbar-view timeline" onClick={() => toggleView('timeline')}>
                <div className="tooltip-timeline">Timeline View</div>
                <span><FaListUl /></span>
            </div>
        </div>
    );
};

export default ViewButtons;
