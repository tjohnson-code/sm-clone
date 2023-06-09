import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';

function Feed() {
  return (
    <div className="grow h-screen pb-44 pt-6 mr-4 scrollbar-hide overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
