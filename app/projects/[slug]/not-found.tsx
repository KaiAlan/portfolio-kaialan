import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Project Not Found</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
        The project you're looking for doesn't exist or may have been moved.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Projects
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
