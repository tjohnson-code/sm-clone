import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [mediaToPost, setMediaToPost] = useState(null);

  const sendPost = async e => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        message: inputRef?.current?.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: serverTimestamp(),
      });

      if (mediaToPost) {
        const storageRef = ref(storage, `posts/${docRef.id}`);
        const uploadTask = uploadString(storageRef, mediaToPost, 'data_url');

        removeMedia();

        uploadTask.then(() => {
          getDownloadURL(storageRef).then(url => {
            const postRef = doc(db, 'posts', docRef.id);
            updateDoc(postRef, { postImage: url });
          });
        });
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    inputRef.current.value = '';
  };

  const addMediaToPost = e => {
    e.preventDefault();

    const file = e.target.files[0];
    if (!file) return;

    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('Please select an image or video file.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = readerEvent => {
      setMediaToPost(readerEvent.target.result);
    };
  };

  const removeMedia = () => {
    setMediaToPost(null);
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

        {mediaToPost && (
          <div
            onClick={removeMedia}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={mediaToPost} alt="" />
            <p></p>
          </div>
        )}
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
            onChange={addMediaToPost}
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
