'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '@/hooks/use-theme';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const authPages = ['/login', '/signup', '/onboarding'];
const dashboardPages = ['/dashboard', '/settings', '/integrations', '/workspace', '/help', '/admin'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = authPages.includes(pathname);
  const isDashboardPage = dashboardPages.some(page => pathname.startsWith(page));
  const showFooter = !isAuthPage && !isDashboardPage;

  // Initialize theme
  useTheme();

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-full flex flex-col">
          {!isAuthPage && <Navigation />}
          <main className={`flex-1 ${!isAuthPage ? 'pt-0' : ''}`}>
            {children}
          </main>
          {showFooter && <Footer />}
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
      </body>
    </html>
  );
}