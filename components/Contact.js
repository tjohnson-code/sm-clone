import Image from 'next/image';

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-700 cursor-pointer p-2 rounded-xl text-blue-500">
      <Image
        className="rounded-full object-cover bg-fixed"
        src={src}
        width={50}
        height={50}
        alt="contact pic"
      />
      <p>{name}</p>
      <div className="absolute bottom-3 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
