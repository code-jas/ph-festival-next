import React from 'react';
import { FaAngleUp } from 'react-icons/fa6';
import MaintenanceState from '@/app/components/common/MaintenanceState';
import ViewButtons from '@/app/components/features/festival/ViewButtons';
import '@/assets/styles/festival.css'
import '@/assets/styles/backtotop.css'

const Festival = () => {
    return (
        <>
            <button id="back-to-top-btn"><FaAngleUp /></button>
            <ViewButtons/>
        </>
    );
};

export default Festival;
