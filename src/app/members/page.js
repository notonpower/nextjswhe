'use client';
import { membersData, memberCategories } from '@/lib/members';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';  // useEffect を追加
import { PageSkeleton } from '@/components/Skeletons';

export default function Members() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // filteredMembers の処理
  const allMembers = Object.values(membersData).flatMap(div => 
    div.members.map(member => ({
      ...member,
      divisionName: div.name
    }))
  );

  const filteredMembers = selectedCategory === 'all'
    ? allMembers
    : allMembers.filter(member => member.division === selectedCategory);

  if (isLoading) {
    return <PageSkeleton type="members" />;
  }

    return (
    <main className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-8">Members</h1>
          
          {/* カテゴリーフィルター */}
          <div className="flex flex-wrap gap-2">
            {memberCategories.map((category) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMembers.map((member) => (
            <Link 
              key={member.id}
              href={`/members/${member.id}`}
              className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 transition-all hover:bg-gray-800/70"
            >
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                      {member.divisionName}
                    </span>
                    {member.role && (
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                        {member.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            該当するメンバーはいません。
          </p>
        )}
      </div>
    </main>
  );
}