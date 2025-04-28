import OptimizedImage from '@/components/images/optimized-image-component'
import ProjectDetails from '@/components/project-details'
import React from 'react'

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Graphics" projectName="Pixel Arts" />
      <span className="w-full h-20" />
      <div className='w-full columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 py-12'>
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/diaRfjWLEctETFe8gWNal/a56b9bc618ee098c8efefd6573bc4b30/Pixel-Cat.png"
          alt="Pixel Art"
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/7ewLyRnP37eLmxQWqeX7HE/8f68ede76e497a4e9741a0f2b0f46f2d/Pixel-Cherry.png"
          alt="Pixel Art"
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/6495K7Fd30qKKHwEtmpm70/9415bf37b373772291aa4a757b5f2905/Pixel-Heart.png"
          alt="Pixel Art"
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1GfzALbobOzhAtuWStqkHo/2425e9878715dbe8469c19effec8ae79/Pixel-Watermelon.png"
          alt="Pixel Art"
          width={1}
          height={1}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Page