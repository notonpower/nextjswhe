// src/components/UpcomingMatch.js
'use client';
import { useEffect, useState, useMemo } from 'react';

export default function UpcomingMatch() {
  const [countdown, setCountdown] = useState('');
  
  // matchDate を useMemo で包む
  const matchDate = useMemo(() => new Date('2024-11-06T20:00:00+09:00'), []);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const distance = matchDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      return `COMING UP ${days} DAYS`;
    };

    setCountdown(calculateCountdown());

    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 60000);

    return () => clearInterval(timer);
  }, [matchDate]);

  return (
    <section className="bg-gray-800/90 text-white backdrop-blur-sm py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Next Match</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center">
  <div className="text-xl font-bold mb-2">VALORANT Regional League 2024</div>
  <div className="text-gray-400">2024.11.06 20:00-</div>
  <div className="text-sm text-gray-400 mt-1">BO3</div>
  <div className="text-blue-400 font-bold tracking-wider mt-3 text-lg">{countdown}</div>
</div>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-center flex-1 max-w-[120px]">
                <div className="font-bold text-lg md:text-xl">Where Wear</div>
                <div className="text-gray-400 text-sm">JP</div>
              </div>
              <div className="text-2xl font-bold w-20 text-center">VS</div>
              <div className="text-center flex-1 max-w-[120px]">
                <div className="font-bold text-lg md:text-xl">Team Alpha</div>
                <div className="text-gray-400 text-sm">CN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}