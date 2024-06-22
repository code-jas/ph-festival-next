// src/app/ClientLayout.tsx

'use client';

import { useEffect, useState } from 'react';
import ClientOnly from './components/common/ClientOnly';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
// import ReduxProvider from './provider/ReduxProvider';
import Loading from './components/common/Loading';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const handleLoad = () => setIsLoading(false);

      if (document.readyState === 'complete') {
         handleLoad();
      } else {
         window.addEventListener('load', handleLoad);
         return () => window.removeEventListener('load', handleLoad);
      }
   }, []);

   return (
      <>
         {isLoading ? (
            <Loading />
         ) : (
            <ClientOnly>
               {/* <ReduxProvider> */}
               <Navbar />
               <div>{children}</div>
               <Footer />
               {/* </ReduxProvider> */}
            </ClientOnly>
         )}
      </>
   );
};

export default ClientLayout;
