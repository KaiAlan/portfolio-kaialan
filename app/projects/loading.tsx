export default function ProjectsLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <div className="bg-gray-200 dark:bg-gray-800 h-48 animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 w-3/4 mb-4 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-full mb-2 animate-pulse rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-5/6 animate-pulse rounded"></div>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}