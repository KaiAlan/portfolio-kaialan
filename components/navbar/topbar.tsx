'use client'

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

const Topbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-16 flex justify-between items-center px-5 border-b border-b-[#EBEBEB]">
      <div className="flex justify-center items-center gap-2">
        <Button
          variant='secondary'
          className="w-7 h-7 rounded-[7px] shrink-0 cursor-pointer"
          onClick={() => router.back()}
          aria-label="Go Back"
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant='ghost'
          className="w-7 h-7 rounded-[7px] shrink-0 cursor-pointer"
          onClick={() => window.history.forward()}
          aria-label="Go Forward"
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <Button className="w-40 rounded-lg cursor-pointer font-bold">Hire Me</Button>
    </div>
  )
}

export default Topbar;
