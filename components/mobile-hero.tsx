import React from 'react'
import OptimizedImage from './images/optimized-image-component'

const MobileHero = () => {
  return (
    <div className='sm:hidden w-full px-5 py-16 flex flex-col gap-4'>
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <OptimizedImage
          src='/images/profile.png'
          alt='profile'
          width={64}
          height={64}
          className='w-16 h-16 rounded-full'
        />
        <h1 className='w-full text-center text-2xl text-black font-space-grotesk font-semibold'>Kaialan Razz</h1>
      </div>
      <p className='w-full text-base text-[#929292] text-center px-5'>UI/UX designer, currently Freelancing, building things that hopefully encourage us to lead more thoughtful lives.</p>
    </div>
  )
}

export default MobileHero