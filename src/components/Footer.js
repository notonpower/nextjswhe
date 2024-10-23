// src/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/" className="relative w-32 h-8 block">
              <Image
                src="/textlogo_white.webp"
                alt="WHEREWEAR"
                fill
                className="object-contain"
              />
            </Link>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://twitter.com/wherewear_jp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://discord.gg/wherewear" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">Team</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="text-gray-400 hover:text-white transition-colors">
                    Members
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Division</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/members?division=valorant" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    VALORANT Div
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/members?division=fortnite" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Fortnite Div
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              お問い合わせやビジネスのご相談は、<br />
              Discordまたは公式Twitterにて<br />
              お気軽にご連絡ください。
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © 2024 Where Wear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}