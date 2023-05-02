import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import Contact from './Contact';

const contacts = [
  { src: '/images/shady1.jpeg', name: 'Shady Lady' },
  { src: '/images/dizzy1.jpeg', name: 'Dizzy Doo Doo' },
  { src: '/images/arya1.jpeg', name: 'Arya Johnson' },
  { src: '/images/snowtroll1.jpeg', name: 'The Abominable Snow Troll' },
  { src: '/images/shady2.jpeg', name: 'Sh Sh Sh Shady' },
  { src: '/images/dizzy2.jpeg', name: 'Dizz Dizz' },
  { src: '/images/arya2.jpeg', name: 'Arya of House Johnson' },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-orange-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6 cursor-pointer hover:bg-gray-700 rounded-full" />
          <MagnifyingGlassIcon className="h-6 cursor-pointer hover:bg-gray-700 rounded-full" />
          <EllipsisHorizontalIcon className="h-6 cursor-pointer hover:bg-gray-700 rounded-full" />
        </div>
      </div>
      {contacts.map(contact => (
        <Contact
          key={contact.src}
          src={contact.src}
          name={contact.name}
          alt=""
        />
      ))}
    </div>
  );
}

export default Widgets;
