export default function AboutLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Profile section skeleton */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        {/* Avatar skeleton */}
        <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        
        {/* Bio skeleton */}
        <div className="flex-1">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 w-1/3 mb-4 animate-pulse rounded"></div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-full"></div>
            ))}
            <div className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-3/4"></div>
          </div>
        </div>
      </div>
      
      {/* Skills section skeleton */}
      <div className="mb-16">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 w-1/4 mb-6 animate-pulse rounded"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg"></div>
          ))}
        </div>
      </div>
      
      {/* Experience section skeleton */}
      <div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 w-1/4 mb-6 animate-pulse rounded"></div>
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 pb-8">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 w-1/3 mb-2 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/4 mb-4 animate-pulse rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}