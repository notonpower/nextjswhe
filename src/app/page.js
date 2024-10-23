// src/app/page.js
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { newsData } from '@/lib/news';
import RainEffect from '../components/RainEffect';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import UpcomingMatch from '@/components/UpcomingMatch';
import AboutPreview from '@/components/AboutPreview';
import MatchResults from '@/components/MatchResults';

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleNewsClick = (newsId) => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    router.push(`/news/${newsId}`);
  };

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNews(scrollPosition > 300);
    };

    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem('scrollPosition');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
<main className="min-h-screen relative pt-16 bg-gray-900 dark:bg-gray-900">
<RainEffect />
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
    <div className={`transition-all duration-1000 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="relative"> {/* 画像のコンテナを追加 */}
        <Image
          src="/textlogo_white.webp"
          alt="WHEREWEAR"
          width={500}
          height={200}
          className="mx-auto mb-8 max-w-[80vw] md:max-w-full" // モバイル用のサイズ制限を追加
          priority // 優先的に読み込む
        />
      </div>
    </div>
    <ScrollDownArrow />
  </div>

      <UpcomingMatch />
      <MatchResults /> 
      <section className={`bg-gray-800/90 text-white backdrop-blur-sm py-16 transition-all duration-1000 ${
        showNews ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
      }`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="space-y-8">
            {newsData.slice(0, 3).map((news) => (
              <button 
                key={news.id}
                onClick={() => handleNewsClick(news.id)}
                className="block w-full text-left group border-b border-gray-700 pb-6"
              >
                <time className="text-gray-400">{news.date}</time>
                <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">
                  {news.title}
                </h3>
                <p className="mt-2 text-gray-300">{news.excerpt}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <AboutPreview />
    </main>
    
  );
}