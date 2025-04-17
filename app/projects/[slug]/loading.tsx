export default function ProjectDetailLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-10 bg-gray-200 dark:bg-gray-800 w-3/4 mb-4 animate-pulse rounded"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 w-1/2 animate-pulse rounded"></div>
      </div>
      
      {/* Hero image skeleton */}
      <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 mb-8 animate-pulse rounded-lg"></div>
      
      {/* Content area skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-full"></div>
            ))}
            <div className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-4/5"></div>
            <div className="h-20"></div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i + 5} className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-full"></div>
            ))}
          </div>
          
          {/* Image gallery skeleton */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-8">
          {/* Project info */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 w-1/2 mb-4 animate-pulse rounded"></div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/4 animate-pulse rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/3 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
          
          {/* Technologies */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 w-1/2 mb-4 animate-pulse rounded"></div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 dark:bg-gray-800 w-16 animate-pulse rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}