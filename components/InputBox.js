import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async e => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    try {
      await addDoc(collection(db, 'posts'), {
        message: inputRef?.current?.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    inputRef.current.value = '';
  };

  const addImageToPost = e => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-300 p-2 rounded-2xl shadow-md text-orange-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={40}
          height={40}
          alt="profile pic"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-700 placeholder-orange-500 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's happening, ${session?.user?.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-700" />
          <p className="text-xs sm:text-sm xl:text-base">Go Live!</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Upload Media</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Current Mood</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
