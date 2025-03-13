import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TODO List App",
  description: "A modern and stylish TODO list application",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 text-gray-900 antialiased`}>  
                <div className="min-h-screen flex flex-col items-center justify-center p-6">
                    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl border border-gray-200">
                        <header className="text-center mb-6">
                            <h1 className="text-5xl font-medium text-green-700 drop-shadow-lg">Danh sách công việc</h1>
                           
                        </header>
                        <main>{children}</main>
                        <footer className="text-center text-gray-500 mt-8 text-sm">
                            &copy; {new Date().getFullYear()}
                        </footer>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
