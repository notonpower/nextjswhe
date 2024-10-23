// src/app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="light">  {/* lightを強制 */}
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}