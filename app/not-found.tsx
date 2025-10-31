import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">404</h1>
      <h2 className="mt-4 text-2xl font-medium text-gray-700 dark:text-gray-300">Page Not Found</h2>
      <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return Home
        </Link>
      </div>
    </main>
  );
}