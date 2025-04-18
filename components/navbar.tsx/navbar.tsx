import Link from "next/link";
import OptimizedImage from "../images/optimized-image-component";

const Navbar = () => {
  return (
    <nav className="max-w-[1456px] w-full flex flex-col justify-center items-center mt-10 px-8">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start text-[12px] text-black">
        <div className="flex flex-col justify-start items-start gap-1">
          <Link href="/">
            <div className="flex gap-1 items-end justify-start w-full">
              <OptimizedImage
                src="/images/profile.png"
                alt="profile image"
                className="w-[60px] rounded-full"
              />
              <p className="text-[18px] text-black font-mono w-full">
                Kaialan Razz
              </p>
            </div>
          </Link>
          <p className="text-[12px] text-[#929292]">
            Elevating brands with stunning design.
          </p>
        </div>
        <div className="max-w-[900px] w-full flex flex-row justify-between items-start">
          <div className="flex flex-col justify-start items-start gap-8">
            <span className="text-[12px] text-[#929292] font-mono">Pages</span>
            <ul className="flex flex-col justify-start items-start gap-2">
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/case-studies">
                <li>Case Studies</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-8">
            <span className="text-[12px] text-[#929292] font-mono">Services</span>
            <ul className="flex flex-col justify-start items-start gap-2">
              <Link href="/#">
                <li>Web Design</li>
              </Link>
              <Link href="/#">
                <li>Branding</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-8">
            <span className="text-[12px] text-[#929292] font-mono">Contact</span>
            <ul className="flex flex-col justify-start items-start gap-2">
              <Link href="/">
                <li>dev.kaialan@gmail.com</li>
              </Link>
              <Link href="https://x.com/kaialan_">
                <li>x: @kaialan_</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
