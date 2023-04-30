import Image from 'next/image';
import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center pr-12">
        <Image
          className="rounded-2xl"
          src="/images/headerlogo.png"
          width={40}
          height={40}
          alt="logo"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-700 p-2">
          <MagnifyingGlassIcon className="h-6 text-orange-500" />
          <input
            className="hidden text-orange-500 md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-orange-500 shrink"
            type="text"
            placeholder="Search this bar"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <p className="whitespace-nowrap text-orange-500 font-semibold pr-3">
          User Name
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleLeftRightIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
