import { getFestivalById } from '@/app/actions/getFestival';
import ClientOnly from '@/app/components/common/ClientOnly';
import React from 'react';
import FestivalDetailsClient from './FestivalDetailsClient';

interface Params {
    festivalId: string;
}

interface FestivalDetailsPageProps {
    params: Params;
}

const FestivalDetailsPage = async ({ params }: FestivalDetailsPageProps) => {
    const festival = await getFestivalById(params);
    console.log('festival :>> ', festival);

    if (!festival || Object.keys(festival).length === 0) {
        return (
            <ClientOnly>
                <div>Empty State Component</div>
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <FestivalDetailsClient festival={festival} />
        </ClientOnly>
    );
};

export default FestivalDetailsPage;
