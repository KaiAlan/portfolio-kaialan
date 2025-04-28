import OptimizedImage from '@/components/images/optimized-image-component'
import ProjectDetails from '@/components/project-details'
import React from 'react'

const Page = () => {
  return (
     <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Graphics" projectName="Faucet Catalouge Design for Gangabathfittings" />
      <span className="w-full h-20" />
      
      <div className='w-full columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 py-12'>
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/5wQ4aXhXnJe35pzdV3bFaL/d26c628358e484a132230547372014e8/catalog-cover.png"
          alt="Pixel Art"
          width={1166}
          height={1436}
          className="w-full"
        />
            
          <OptimizedImage
            src="https://images.ctfassets.net/xsgwjwcuxltx/47XZI1OFdsQpgHQwjJ4xCs/38efea135a15a1088842a2e49da3595e/faucet-catalouge-2.png"
            alt="Pixel Art"
            width={2534}
            height={1754}
            className="w-full"
          />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/5gvHMlQ25ZTfYBHbzDA87U/a53df929241389e656d0a87853b5fb29/faucet-catalouge-1.png"
          alt="Pixel Art"
          width={2534}
          height={1754}
          className="w-full"
        />
        </div>
        <OptimizedImage
              src="https://images.ctfassets.net/xsgwjwcuxltx/yAJDKCtgA4gAdx8wiU5do/421cea49988eb71ccf3d14108576ecfb/ganga-bathings-catalogue.png"
              alt="Pixel Art"
              width={988}
              height={684}
              className="w-full"
            />
        </div>
  )
}

export default Page