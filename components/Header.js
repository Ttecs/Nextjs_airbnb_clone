import Image from "next/image";
import { SearchIcon ,GlobeAltIcon,MenuIcon,UserCircleIcon} from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="http://links.papareact.com/qd3"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full  py-2 ">
        <input
          className="flex-grow text-sm placeholder-gray-300 text-gray-500 pl-5 bg-transparent outline-none"
          type="text"
          placeholder="start your serch"
        />
        <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className='flex space-x-4 items-center  justify-end text-gray-500'>
          <p className='hidden md:inline cursor-pointer'>become a host </p>
          <GlobeAltIcon className='h-6 cursor-pointer'/>
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full'> 
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
          </div>
      </div>
    </header>
  );
}
