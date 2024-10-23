'use client';
import { newsData, categories } from '@/lib/news';
import Link from 'next/link';
import { useState, useEffect } from 'react';  // useEffect を追加
import { PageSkeleton } from '@/components/Skeletons';


export default function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
    if (isLoading) {
      return <PageSkeleton type="news" />;
    }
  
    const filteredNews = selectedCategory === 'all'
      ? newsData
      : newsData.filter(news => news.category.toLowerCase() === selectedCategory);

  return (
    
      <main className="min-h-screen text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-8">News</h1>
            
            {/* カテゴリーフィルター */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filteredNews.map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.id}`}
                className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 transition-all hover:bg-gray-800"
              >
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <time className="text-gray-400">{news.date}</time>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                    {news.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {news.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{news.excerpt}</p>
              </Link>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <p className="text-center text-gray-400 mt-8">
              該当するニュースはありません。
            </p>
          )}
        </div>
      </main>
    
  );
}