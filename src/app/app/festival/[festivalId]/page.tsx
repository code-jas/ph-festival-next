import { getFestivalById } from '@/app/actions/getFestival';
import React from 'react'
interface Params { 
    festivalId: string
}

const FestivalDetailsPage = async ({params}: {params:Params}) => {
    const festivalDetails = await getFestivalById(params);
    console.log('page festivalDetails :>> ', festivalDetails);

    return (
        <div>FestivalDetailsPage</div>
    )
}

export default FestivalDetailsPage