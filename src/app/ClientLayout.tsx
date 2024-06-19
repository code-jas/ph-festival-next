'use client';

import { useState, useEffect } from 'react';
import { Router } from 'next/router';
import Loading from './components/common/Loading';
import ClientOnly from './components/common/ClientOnly';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import ReduxProvider from './provider/ReduxProvider';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   useEffect(() => {
      const handleLoad = () => setIsLoading(false);

      if (document.readyState === 'complete') {
         handleLoad();
      } else {
         window.addEventListener('load', handleLoad);
         return () => window.removeEventListener('load', handleLoad);
      }
   }, []);

   useEffect(() => {
      const handleStart = () => setIsLoading(true);
      const handleComplete = () => setIsLoading(false);

      if (isClient) {
         Router.events.on('routeChangeStart', handleStart);
         Router.events.on('routeChangeComplete', handleComplete);
         Router.events.on('routeChangeError', handleComplete);

         return () => {
            Router.events.off('routeChangeStart', handleStart);
            Router.events.off('routeChangeComplete', handleComplete);
            Router.events.off('routeChangeError', handleComplete);
         };
      }
   }, [isClient]);

   if (!isClient) {
      return null; // Render nothing on the server side
   }

   return (
      <>
         <Loading isLoading={isLoading} />
         <div className={`comp-cont-el ${!isLoading ? 'fade-in' : ''}`}>
            <ClientOnly>
               <ReduxProvider>
                  <Navbar />
                  <div>{children}</div>
                  <Footer />
               </ReduxProvider>
            </ClientOnly>
         </div>
      </>
   );
};

export default ClientLayout;
