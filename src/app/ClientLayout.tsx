'use client';

import { useState, useEffect } from 'react';
import Loading from '@/app/components/common/Loading';
import Navbar from '@/app/components/common/Navbar';
import Footer from '@/app/components/common/Footer';
import ClientOnly from '@/app/components/common/ClientOnly';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

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
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ClientOnly>
      )}
    </>
  );
};

export default ClientLayout;
