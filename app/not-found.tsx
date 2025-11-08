import { MorphingText } from '@/components/ui/morphing-text';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-svh sm:min-h-[calc(100%-64px)] flex flex-col items-center justify-center px-5 m-auto">
      <div className="flex flex-col items-center w-full">
        <MorphingText
          className="max-w-full w-full text-4xl mb-4 lg:mb-8"
          texts={["Page Not Found", "404"]}
        />
        <p className="text-xs lg:text-base text-gray-500 mb-6 text-center">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link href="/">
          <RainbowButton className="h-12 flex justify-center items-center text-base font-space-grotesk px-8">
            Back to works
          </RainbowButton>
        </Link>
      </div>
    </div>
  );
}