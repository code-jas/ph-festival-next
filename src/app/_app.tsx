import React from 'react';
import type { AppProps } from 'next/app';
import ReduxProvider from './provider/ReduxProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ReduxProvider>
            <Component {...pageProps} />
        </ReduxProvider>
    );
};

export default MyApp;
