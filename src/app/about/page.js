// src/app/about/page.js
'use client';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-20">
          <Image
            src="/textlogo_white.webp"
            alt="WHEREWEAR"
            width={300}
            height={120}
            className="mx-auto"
          />
        </div>
        
        <div className="space-y-12">
          <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 leading-relaxed">
          <p className="text-gray-300 mb-6">
  Where Wear は、Apex Legendsのクラン機能実装日の2020年11月2日に発足されたゲーミングコミュニティです。'どこにいるか'を意味する'Where'と'着る'を意味する'Wear'を組み合わせ、どこにいても、何を着ていても問題ではないという意味になります。この名前には、プレイヤーの居場所や外見に関係なく、誰もが一体となって楽しめる場所を提供するという我々の信念が込められています。
</p>
            <p className="text-gray-300 mb-6">
              Where Wearは、各メンバーが個々のスキルを最大限に発揮し、チームとして共に成長し続けることを目指しています。
            </p>
            <p className="text-gray-400 italic">
              Where wear is an e-sports team that was launched on November 2, 2020, the day the clan function of Apex Legends was implemented. Combining "Where" meaning "where you are" and "Wear" meaning "to wear," it may mean that it doesn't matter where you are or what you wear. I'm lying, it's just a pun.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}