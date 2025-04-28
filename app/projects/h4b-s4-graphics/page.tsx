import OptimizedImage from '@/components/images/optimized-image-component'
import ProjectDetails from '@/components/project-details'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center py-12 px-4'>
      <ProjectDetails
        projectType='graphics'
        projectName='Hack4Bengal Season 4 Graphics'
      />
      <span className='w-full h-20' />
      <div className='w-full max-w-[1000px]'>
        <OptimizedImage
        src='https://images.ctfassets.net/xsgwjwcuxltx/1sRLXuoTkdMhuZgt8REB9N/ff76af7bc58ba979684f938634a8f4c0/h4b-s4-graphics-thumbnail.png'
        alt='htb-graphics'
        width={12}
        height={6}
        className='w-full'
        />
      </div>
      <div className='w-full columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 py-12'>
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1rkl8CJ8fJgvpFzTqL4P2X/462391b17f1102404f52d052142a6b5e/h4b-VH.png"
          alt='h4b-graphics'
          width={4}
          height={5}
          className='w-full'
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/3YNHKCmQffEts38NPa3kaZ/171a2b99e7c4770d91f724e508f920d9/h4b-4.0-kickoff.png"
          alt='h4b-graphics'
          width={4}
          height={5}
          className='w-full'
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/bQeRqSXs1Ro00ChJGZjrV/5501b8bfe9a6aefb9efd74486cd3e191/h4b-IPF.png"
          alt='h4b-graphics'
          width={4}
          height={5}
          className='w-full'
        />
      </div>
      <div className='w-full columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 py-12'>
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/6HBcNukBh5KwVHaR8YXzcB/30fc6b233269e4928f0862532ebb9f14/7-days-insta-story.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/2DUBEcDMpQUIzC0JSZJI42/d126f54cc9a97c32255585495050d4b7/24-hours-insta-post.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/6by4BSgsdm7q8GzyS94Nxy/e72b5bd1d2272b18cf7b73473bd6da0e/ram-navami.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/19eUKZqFfI8B31e3onCmPQ/3edbef0aaffd0810022801dab4d60214/bengali-new-year-post.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/3Qtcls7xkDOjP4hNe8NJGQ/9fbf9aeca7662a2a1994924ab520b065/evagelist_Insta_post.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/1XqKyFeI1SZ72Zzu7UN31I/2e4a6f69cf7a3c7609abf71ebebb412d/build_ai_agents_Insta_post.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/2p9dMjCsOQXHDM4DV41xhs/a5a13bd4ee34fe72afeae933f40e37e5/womens-day-IPF.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/2Gw2ntDfayIeRjfLcSn2DQ/f83c87e78f959e7847fe855f28fa259c/opening-ceremony-Insta-post.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
        <Image
          src='https://images.ctfassets.net/xsgwjwcuxltx/3A6H2d7xFbYms7d2RMJ35w/a465afa0924223997d65cd066e991253/intro_to_ai_Insta_post.png'
          alt='h4b-graphics'
          width={0}
          height={0}
          className='w-full'
        />
      </div>
    </div>
  )
}

export default Page