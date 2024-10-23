// src/components/AboutPreview.js
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPreview() {
  return (
    <section className="bg-gray-900/90 text-white backdrop-blur-sm py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="relative">
          <Image
            src="/textlogo_white.webp"
            alt="WHEREWEAR"
            width={200}
            height={80}
            className="mb-6"
          />
          <p className="text-gray-300 mb-6 line-clamp-3">
            Where Wear は、Apex Legendsのクラン機能実装日の2020年11月2日に発足されたゲーミングコミュニティです。「どこにいるか」を意味する「Where」と「着る」を意味する「Wear」を組み合わせ、どこにいても、何を着ていても問題ではないという意味になります。
          </p>
          <Link 
            href="/about"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
          >
            MORE
          </Link>
        </div>
      </div>
    </section>
  );
}