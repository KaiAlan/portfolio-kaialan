import React from 'react'

type Props = {
  projectType: string
  projectName: string
  description?: string
  metadata?: {
    cost: string
    turnaround: string
    clientCameFrom: string
    designTeam: string
  }
}

const ProjectDetails: React.FC<Props> = (props: Props) => {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-2'>
        <h3 className='text-blue-600 text-[12px] uppercase font-mono'>{props.projectType}</h3>
        <h1 className='text-4xl font-medium'>{props.projectName}</h1>
        <p className='text-gray-500 text-[12px]'>{props.description}</p>
        {props.metadata && (
          <div className='max-w-[500px] w-full flex justify-between items-start py-12 text-[12px]'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 font-mono uppercase'>cost</p>
              <div>
                <p>{props.metadata.cost}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 font-mono uppercase'>{props.metadata.turnaround}</p>
              <div>
                <p>2 Weeks</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 font-mono uppercase'>{props.metadata.clientCameFrom}</p>
              <div>
                <p>Twitter</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 font-mono uppercase'>{props.metadata.designTeam}</p>
              <div>
                <p>Just Kaialan</p>
              </div>
            </div>
          </div>
        )}
      </div>
  )
}

export default ProjectDetails