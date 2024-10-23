// src/app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="light">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}