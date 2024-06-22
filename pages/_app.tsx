// pages/_app.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Loading from '../src/app/festival/loading';
// import ReduxProvider from '@/app/provider/ReduxProvider';

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const handleStart = (url: string) => url !== router.asPath && setLoading(true);
      const handleComplete = () => setLoading(false);

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
         router.events.off('routeChangeStart', handleStart);
         router.events.off('routeChangeComplete', handleComplete);
         router.events.off('routeChangeError', handleComplete);
      };
   }, [router]);

   return (
      <>
         {/* <ReduxProvider> */}
         {loading && <Loading />}
         <Component {...pageProps} />
         {/* </ReduxProvider> */}
      </>
   );
}

export default MyApp;
