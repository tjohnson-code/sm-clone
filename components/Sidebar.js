import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import SidebarRow from './SidebarRow';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session?.user?.image} title={session?.user?.name} />

      <SidebarRow Icon={UserCircleIcon} title="Fam" />
      <SidebarRow Icon={UserGroupIcon} title="Cliques" />
      <SidebarRow Icon={ShoppingBagIcon} title="Shop" />
      <SidebarRow Icon={ComputerDesktopIcon} title="View" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="Lets Go!" />
    </div>
  );
};

export default Sidebar;
