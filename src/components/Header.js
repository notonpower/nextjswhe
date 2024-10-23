// src/components/Header.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
    { name: 'Members', path: '/members' },
  ];

  return (
    <>
      <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
  <Link href="/" className="relative w-40 h-12 -ml-10"> {/* マイナスマージンを追加 */}
    <Image
      src="/umbrella.webp"
      alt="Wherewear Logo"
      fill
      style={{ objectFit: 'contain' }}
      priority
    />
  </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group text-gray-600 hover:text-black transition-colors duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* ハンバーガーメニューボタン */}
          <button
  className={`md:hidden fixed ${isMenuOpen ? 'top-6 right-4' : 'relative'} z-[70] p-2`}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
>
  <div className="w-6 h-6 relative">
    <div className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${
      isMenuOpen 
      ? 'rotate-45' 
      : '-translate-y-2'
    }`} />
    <div className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${
      isMenuOpen 
      ? 'opacity-0' 
      : 'opacity-100'
    }`} />
    <div className={`absolute top-1/2 left-0 w-6 h-0.5 bg-black transition-all duration-300 ${
      isMenuOpen 
      ? '-rotate-45' 
      : 'translate-y-2'
    }`} />
  </div>
</button>

      {/* モバイルメニュー */}
      <div
  className={`fixed inset-0 w-full min-h-screen bg-white z-[65] transition-transform duration-300 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } md:hidden`}
>
        <div className="px-8 pt-24">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-black text-xl hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      </div>
      </header>
    </>
  );
}