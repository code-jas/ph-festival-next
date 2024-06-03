import React from 'react'
import { FaImages, FaListUl } from 'react-icons/fa6';


const ViewButtons = () => {
    return (
      <div className="view-btns">
          <div className="icon-navbar-view timeline active-rn">
            <div className="tooltip-timeline">Gallery View</div>
            <span><FaImages /></span>
          </div>
          <div className="icon-navbar-view timeline">
            <div className="tooltip-timeline">Timeline View</div>
            <span><FaListUl /></span>
          </div>
      </div>
    );
  };

export default ViewButtons