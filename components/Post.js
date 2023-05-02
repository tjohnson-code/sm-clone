import {
  ChatBubbleBottomCenterTextIcon,
  HandThumbUpIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-gray-700 text-slate-50 mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-orange-500">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-gray-300">
          <Image
            className="object-cover"
            src={postImage}
            fill
            alt="post image"
          />
        </div>
      )}
      {/* Like/Comment/Share */}
      <div className="flex justify-between items-center rounded-b-2xl bg-gray-300 shadow-md text-orange-500 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatBubbleBottomCenterTextIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
