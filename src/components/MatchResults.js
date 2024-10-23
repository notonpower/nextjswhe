// src/components/MatchResults.js
export default function MatchResults() {
    return (
      <section className="bg-gray-900/90 text-white backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Results</h2>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="space-y-6">
              {/* ヘッダー情報 */}
              <div className="text-center space-y-2">
                <div className="text-xl font-bold">VALORANT Regional League 2024</div>
                <div className="text-gray-400">2024.04.18</div>
                <div className="text-sm text-gray-400">BO3</div>
              </div>
  
              {/* チーム名と結果 */}
              <div className="flex justify-center items-center gap-4 md:gap-8">
  <div className="text-center flex-1 max-w-[120px]">
    <div className="font-bold text-lg md:text-xl">Where Wear</div>
    <div className="text-gray-400 text-sm">JP</div>
  </div>
  <div className="text-2xl font-bold text-green-400 w-20 text-center">2 - 1</div>
  <div className="text-center flex-1 max-w-[120px]">
    <div className="font-bold text-lg md:text-xl">Sentinels</div>
    <div className="text-gray-400 text-sm">NA</div>
  </div>
</div>
  
              {/* マップ詳細 */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 text-left text-gray-400">MAP 1</div>
                  <div className="col-span-1 text-center font-bold">Ascent</div>
                  <div className="col-span-1 text-right text-red-400">13-15 Lose</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 text-left text-gray-400">MAP 2</div>
                  <div className="col-span-1 text-center font-bold">Haven</div>
                  <div className="col-span-1 text-right text-green-400">14-12 Win</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 text-left text-gray-400">MAP 3</div>
                  <div className="col-span-1 text-center font-bold">Icebox</div>
                  <div className="col-span-1 text-right text-green-400">13-9 Win</div>
                </div>
              </div>
  
              {/* 最終結果 */}
              <div className="text-center pt-4 border-t border-gray-700">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-bold">
                  Victory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }