import Image from "next/image";
import Link from "next/link";
import OptimizedImage from "../images/optimized-image-component";

const MasonaryWithGrid = () => {
  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4">
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />
    </div>
  );
};

export default MasonaryWithGrid;

const ColumnOne = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href='/projects/h4b-s3'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/4hBCJLJPHlYPFwRKnX5cBr/392a5ebf49172181a33758d2a98efd1a/h4b-s3.png"
            alt="h4b-s3"
            width={1728}
            height={1064}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Hack4Bengal Season 3</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <Link href='/projects/axtionable' >
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/6F2Fs3xL3wSGVR7DbEyMwr/baadd87e04843f4349f15e82fa501b94/axtionable.png"
            alt="axtionable"
            width={1512}
            height={1133}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Axtionable</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <Link href='projects/ganga-faucet-catalouge'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/yAJDKCtgA4gAdx8wiU5do/421cea49988eb71ccf3d14108576ecfb/ganga-bathings-catalogue.png"
            alt="h4b-s3"
            width={988}
            height={684}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Catalouge Design for Gangabathfittings</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #graphics #catalouge
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
        <OptimizedImage
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/68DnOUZ6DC8qGuS1Z44ouJ/ba44231448a2328179d18bca18617dba/retro_floppydisk.png"
          alt="h4b-s3"
          width={516}
          height={661}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Retro Floppy Disk</p>
          <p className="text-gray-500 text-[12px] font-normal">
            #graphics #ui
          </p>
        </div>
      </div>
      <Link href="/projects/h4b-s4-graphics" className="w-full">
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/1sRLXuoTkdMhuZgt8REB9N/ff76af7bc58ba979684f938634a8f4c0/h4b-s4-graphics-thumbnail.png"
            alt="h4b-s3"
            width={1920}
            height={1080}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Hack4Bengal S4 Graphics</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <Link href='/projects/pixel-graphics'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/7ewLyRnP37eLmxQWqeX7HE/8f68ede76e497a4e9741a0f2b0f46f2d/Pixel-Cherry.png"
            alt="h4b-s3"
            width={600}
            height={600}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Pixel Cherry</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #graphics #art
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
        <OptimizedImage
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/6RFc58JgQzx3dIpjbF0pIs/4f36329e97b7ea0015d417e162d24f34/retro_game_console.png"
          alt="h4b-s3"
          width={516}
          height={661}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Retro Game Console</p>
          <p className="text-gray-500 text-[12px] font-normal">
            #graphics #ui
          </p>
        </div>
      </div>
    </div>
  );
};

const ColumnTwo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/projects/sparkit" className="w-full">
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/79bVlYaTQfaS8K98cj3i9p/2f504b66a3aac8070d5d301381bcce17/sparkit-homepage.png"
            alt="h4b-s3"
            width={1508}
            height={1131}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Sparkit Webdesign</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <Link href='/projects/h4b-s4' >
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/4IPyGSuqOA0cdpDX7ZjwKq/c417b599218f2ec5a7ac27360a407956/h4b-s4.png"
            alt="h4b-s3"
            width={1728}
            height={1123}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Hack4Bengal Season 4</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <Link href='/projects/90s-art-ui'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/6jBJHDTXwIn6ZnEax2rY4C/fa7694184df9c39f29fbd1964507578f/90-s_Pixel_Art.png"
            alt="h4b-s3"
            width={542}
            height={377}
          />
          <div className="w-full flex flex-col leading-4">
            <p>90s Pixel Art Ui</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #graphics #pixelart
            </p>
          </div>
        </div>
      </Link>
      <Link href='https://centered-checkout-573080.framer.app/' >
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/5gl3RLfnddrK6eMskwfizS/4d751c68b71f81a7fcf12b338d079b0e/portfolio-himesh.png"
            alt="h4b-s3"
            width={1302}
            height={756}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Portfolio Himesh Mehta</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #framer #uiux
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
        <OptimizedImage
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/2iY8Ky3rJuMR3uHgzBGr7I/ecc18ac19f48ad5ed0661cfef9e40075/lisa_poster_-_1.png"
          alt="h4b-s3"
          width={958}
          height={1552}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Lisa Poster</p>
          <p className="text-gray-500 text-[12px] font-normal">
            #graphics #poster
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
        <OptimizedImage
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/bhR1gYEkDGq8skbDsqE2J/af1abdac5f90bb67bce9beea62c7eb72/azuren-1.png"
          alt="azuren"
          width={736}
          height={1103}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Azuren Character Card</p>
          <p className="text-gray-500 text-[12px] font-normal">
            #graphics #poster
          </p>
        </div>
      </div>
      
    </div>
  );
};

const ColumnThree = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href='/projects/pixel-graphics'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/diaRfjWLEctETFe8gWNal/a56b9bc618ee098c8efefd6573bc4b30/Pixel-Cat.png"
            alt="h4b-s3"
            width={600}
            height={600}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Pixel Cat</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #graphics #art
            </p>
          </div>
        </div>
      </Link>
      <Link href="/projects/h4b-s4-graphics" className="w-full">
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/3YNHKCmQffEts38NPa3kaZ/171a2b99e7c4770d91f724e508f920d9/h4b-4.0-kickoff.png"
            alt="h4b-s3"
            width={1080}
            height={1350}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Hack4Bengal Season 4 Kick Off poster</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #graphics #poster
            </p>
          </div>
        </div>
      </Link>
      <Link href='projects/portfolio-sharon'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/2OKBAWY6HLtf9k0B2zDWQL/7e0c3da5526f8ddffa55d8e12d623dcd/portfolio-sharon.png"
            alt="h4b-s3"
            width={1512}
            height={984}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Portfolio Sharon</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
        <OptimizedImage
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/3MXtNgAhumjoGCGRD16jZn/1dd0f777b9333aaa5e5899e0ca10fafd/exdat_-_1.png"
          alt="h4b-s3"
          width={1264}
          height={982}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Graphics Poster</p>
          <p className="text-gray-500 text-[12px] font-normal">
            #graphics #poster
          </p>
        </div>
      </div>
      <Link href='/projects/chit-chat-app'>
        <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
          <OptimizedImage
            className="w-full rounded-sm shadow select-none"
            src="https://images.ctfassets.net/xsgwjwcuxltx/tO71XK8XdO3b5BoRI4y9j/d76731f5024bf0ecd498c7720904d751/chit-chat.png"
            alt="h4b-s3"
            width={1508}
            height={1072}
          />
          <div className="w-full flex flex-col leading-4">
            <p>Chit Chat WebApp</p>
            <p className="text-gray-500 text-[12px] font-normal">
              #webdesign #uiux
            </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-2 text-[14px] font-medium  pb-2">
        <OptimizedImage
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/38YHsv47Wu2cTh8FAdjZgb/56f89bbc746312c05c9687bd69bdb23b/azuren-2.png"
          alt="azuren"
          width={736}
          height={1103}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Azuren Character Card 2</p>
          <p className="text-gray-500 text-[12px] font-normal">
            #graphics #poster
          </p>
        </div>
      </div>
    </div>
  );
};
