import Image from "next/image";

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
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/4hBCJLJPHlYPFwRKnX5cBr/392a5ebf49172181a33758d2a98efd1a/h4b-s3.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/6F2Fs3xL3wSGVR7DbEyMwr/baadd87e04843f4349f15e82fa501b94/axtionable.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Axtionable</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/68DnOUZ6DC8qGuS1Z44ouJ/ba44231448a2328179d18bca18617dba/retro_floppydisk.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Retro Floppy Disk</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/1sRLXuoTkdMhuZgt8REB9N/ff76af7bc58ba979684f938634a8f4c0/h4b-s4-graphics-thumbnail.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal S4 Graphics</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/7ewLyRnP37eLmxQWqeX7HE/8f68ede76e497a4e9741a0f2b0f46f2d/Pixel-Cherry.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal S4 Graphics</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
    </div>
  );
};

const ColumnTwo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/yAJDKCtgA4gAdx8wiU5do/421cea49988eb71ccf3d14108576ecfb/ganga-bathings-catalogue.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/4IPyGSuqOA0cdpDX7ZjwKq/c417b599218f2ec5a7ac27360a407956/h4b-s4.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/6jBJHDTXwIn6ZnEax2rY4C/fa7694184df9c39f29fbd1964507578f/90-s_Pixel_Art.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/5gl3RLfnddrK6eMskwfizS/4d751c68b71f81a7fcf12b338d079b0e/portfolio-himesh.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/2iY8Ky3rJuMR3uHgzBGr7I/ecc18ac19f48ad5ed0661cfef9e40075/lisa_poster_-_1.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div> 
    </div>
  );
};

const ColumnThree = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/diaRfjWLEctETFe8gWNal/a56b9bc618ee098c8efefd6573bc4b30/Pixel-Cat.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Hack4Bengal Season 3</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/2OKBAWY6HLtf9k0B2zDWQL/7e0c3da5526f8ddffa55d8e12d623dcd/portfolio-sharon.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Portfolio Sharon</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/3YNHKCmQffEts38NPa3kaZ/171a2b99e7c4770d91f724e508f920d9/h4b-4.0-kickoff.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Portfolio Sharon</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/3MXtNgAhumjoGCGRD16jZn/1dd0f777b9333aaa5e5899e0ca10fafd/exdat_-_1.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Portfolio Sharon</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[14px] font-medium cursor-pointer pb-2">
        <Image
          className="w-full rounded-sm shadow select-none"
          src="https://images.ctfassets.net/xsgwjwcuxltx/tO71XK8XdO3b5BoRI4y9j/d76731f5024bf0ecd498c7720904d751/chit-chat.png"
          alt="h4b-s3"
          width={0}
          height={0}
        />
        <div className="w-full flex flex-col leading-4">
          <p>Portfolio Sharon</p>
          <p className="text-gray-500 text-[12px] font-normal">#webdesign #uiux</p>
        </div>
      </div>
    </div>
  );
};
