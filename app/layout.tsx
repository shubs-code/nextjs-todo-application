import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import NavigationBar from "@/components/Navigation/NavigationBar";
import Box from '@mui/material/Box';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO Application",
  description: "A fullstack nextjs todo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
      <AppRouterCacheProvider>
        <div className='min-h-screen flex flex-col '>
            <NavigationBar />
            {children}

        </div>
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
