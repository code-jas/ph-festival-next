'use client';
import React, { useState } from 'react';
import FestivalGallery from '@/app/components/features/festival/FestivalGallery';
import FestivalTimeline from '@/app/components/features/festival/FestivalTimeline';
import ViewButtons from '@/app/components/features/festival/ViewButtons';
import '@/assets/styles/festival.css';
import '@/assets/styles/backtotop.css';
import { FaAngleUp } from 'react-icons/fa6';
import { FestivalDetailsType } from '../typings/festival-detail-type';

interface FestivalClientProps {
    festivals: FestivalDetailsType[];
}

const FestivalsClient: React.FC<FestivalClientProps> = ({ festivals }) => {
    const [view, setView] = useState('gallery'); // Initial view is set to 'gallery'

    const toggleView = (view: string) => {
        setView(view);
    };

    return (
        <>
            <button id="back-to-top-btn"><FaAngleUp /></button>
            <ViewButtons toggleView={toggleView} />
            <div className="js-cont">
                <div className="js-scroll">
                    <div className="global-fest">
                        <div className="gall-title">
                            <h1>Festival {view == 'gallery' ? 'Gallery' : 'Timeline'}</h1>
                            <div className="underline"></div>
                        </div>
                        {view === 'gallery' ?
                            <FestivalGallery festivals={festivals} /> :
                            <FestivalTimeline festivals={festivals} />
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default FestivalsClient;
