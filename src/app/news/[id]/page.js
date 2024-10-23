// src/app/news/[id]/page.js
import { newsData } from '@/lib/news';
import Link from 'next/link';

export function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id,
  }));
}

export default function NewsDetail({ params }) {
  const news = newsData.find(n => n.id === params.id);

  if (!news) {
    return (
      <main className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/news" className="text-blue-400 hover:text-blue-300">
              ← Back to News
            </Link>
          </div>
          <h1 className="text-4xl font-bold">記事が見つかりません</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/news" className="text-blue-400 hover:text-blue-300">
            ← Back to News
          </Link>
        </div>
        <time className="text-gray-400">{news.date}</time>
        <h1 className="text-4xl font-bold mt-4 mb-8">{news.title}</h1>
        <div className="prose prose-invert max-w-none">
          {news.content}
        </div>
      </article>
    </main>
  );
}