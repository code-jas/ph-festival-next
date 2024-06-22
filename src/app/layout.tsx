// src/app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Ph Festival',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={montserrat.className} style={{ backgroundColor: '#FFFFFF' }}>
            <ClientLayout>{children}</ClientLayout>
         </body>
      </html>
   );
}
