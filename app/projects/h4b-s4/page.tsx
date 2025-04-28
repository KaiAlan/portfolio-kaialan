import OptimizedImage from '@/components/images/optimized-image-component'
import ProjectDetails from '@/components/project-details'
import React from 'react'

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Web Design" projectName="Hack4Bengal Season 4 Website" />
      <span className="w-full h-20" />
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center gap-8 mx-auto">
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/4IPyGSuqOA0cdpDX7ZjwKq/c417b599218f2ec5a7ac27360a407956/h4b-s4.png"
          alt="h4b-s4"
          width={1728}
          height={1123}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1bq2TS0bU1ItARbv41ac2Z/8b653db2ee314ffe49cf2592809c8f9b/Screenshot_2025-04-28_194904.png"
          alt="h4b-s4"
          width={1919}
          height={924}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/7mqVt81daogkXEJSHVjZQd/c4614bc937359b94f3c7c4972c74ed0c/Screenshot_2025-04-28_194855.png"
          alt="h4b-s4"
          width={1919}
          height={706}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/4aySi6MqMHhfxxomjOCu4S/38cacc1b6c17724513b7d2d8968448b6/Screenshot_2025-04-28_194925.png"
          alt="h4b-s4"
          width={1917}
          height={991}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/6ruMs2pH2ptHFzBHcNkCsh/d6c71fb800dceaef9098e3264acb75fd/Screenshot_2025-04-28_194936.png"
          alt="h4b-s4"
          width={1886}
          height={975}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/4B9sfSap6oxdg5NvT8MlOj/44b41eaba0c0b408cca286d24daf032d/Screenshot_2025-04-28_194950.png"
          alt="h4b-s4"
          width={1916}
          height={983}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/2aZTbnZ4ejY9geMQ0R8F1q/2202f5fa8be2b5b0ad2536f643b3dad6/Screenshot_2025-04-28_195751.png"
          alt="h4b-s4"
          width={1791}
          height={836}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Page