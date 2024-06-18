'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

const MaintenanceState: React.FC = () => {
   const router = useRouter();
   console.log('router :>> ', router);
   const handleGoBack = () => {
      router.back();
   };
   return (
      <div id="about" className="about-main">
         <div
            className="flex items-center justify-center min-h-screen bg-cover"
            style={{ backgroundImage: "url('/images/bg-about-section-laptop-view.jpg')" }}
         >
            <div className=" p-8  text-center w-[600px]">
               <h1 className="text-lg font-bold text-[#6269CD]">404 error</h1>
               <h2 className="text-5xl font-bold my-4">Under maintenance</h2>
               <p className="text-lg mb-6 px-4 ">
                  The page you’re looking for is currently under maintenance and will be back soon.
                  Stay tuned!
               </p>
               <div className="flex justify-center space-x-4">
                  <button
                     onClick={handleGoBack}
                     className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2"
                  >
                     <FaArrowLeft /> Go back
                  </button>
                  <Link href="/app">
                     <button className="bg-[#6269CD] text-white py-3 px-6 rounded-lg hover:bg-[#6269cddc]">
                        Go home
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MaintenanceState;
