// src/app/members/[id]/page.js
import { membersData } from '@/lib/members';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const allMembers = Object.values(membersData).flatMap(div => div.members);
  return allMembers.map((member) => ({
    id: member.id,
  }));
}

export default function MemberDetail({ params }) {
  const member = Object.values(membersData)
    .flatMap(div => div.members)
    .find(m => m.id === params.id);

  if (!member) {
    return (
      <main className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/members" className="text-blue-400 hover:text-blue-300">
              ← Back to Members
            </Link>
          </div>
          <h1 className="text-4xl font-bold">メンバーが見つかりません</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/members" className="text-blue-400 hover:text-blue-300">
            ← Back to Members
          </Link>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <div className="flex items-center gap-8 mb-12">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
              {member.role && (
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                  {member.role}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-300">About</h2>
              <p className="text-gray-300">{member.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-300">Join Date</h2>
                <p className="text-gray-300">{member.joinDate}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-300">Twitter</h2>
                <a 
                  href={`https://twitter.com/${member.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  {member.twitter}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}