// src/app/layout.js
// src/app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-900"> {/* 背景色を追加 */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}