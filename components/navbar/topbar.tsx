import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"


const Topbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center px-5 border-b border-b-[#EBEBEB]">
      <div className="flex justify-center items-center gap-2">
        <Button variant='secondary' className="w-7 h-7 rounded-[7px] shrink-0 cursor-pointer">
          <ArrowLeftIcon />
        </Button>
        <Button variant='ghost' className="w-7 h-7 rounded-[7px] shrink-0 cursor-pointer">
          <ArrowRightIcon />
        </Button>
      </div>
      <Button className="w-40 rounded-lg cursor-pointer font-bold">Hire Me</Button>
    </div>
  )
}

export default Topbar