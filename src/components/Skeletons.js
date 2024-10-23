// src/components/Skeletons.js
export function NewsCardSkeleton() {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
        <div className="animate-pulse">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
            <div className="h-6 w-20 bg-gray-700/50 rounded-full"></div>
          </div>
          <div className="h-8 w-3/4 bg-gray-700 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700/50 rounded"></div>
            <div className="h-4 bg-gray-700/50 w-5/6 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export function MemberCardSkeleton() {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
        <div className="animate-pulse flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gray-700"></div>
          <div className="flex-1">
            <div className="h-8 w-40 bg-gray-700 rounded mb-2"></div>
            <div className="h-6 w-24 bg-gray-700/50 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export function PageSkeleton({ type = 'news' }) {
    return (
      <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse mb-12">
            <div className="h-10 w-40 bg-gray-700 rounded mb-8"></div>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-24 bg-gray-700 rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                {type === 'news' ? <NewsCardSkeleton /> : <MemberCardSkeleton />}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }