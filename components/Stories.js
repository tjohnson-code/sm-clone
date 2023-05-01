import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Shady',
    src: '/images/shady1.jpeg',
    profile: '/images/shady2.jpeg',
  },
  {
    name: 'Arya',
    src: '/images/arya1.jpeg',
    profile: '/images/arya2.jpeg',
  },
  {
    name: 'Snow Troll',
    src: '/images/snowtroll1.jpeg',
    profile: '/images/snowtroll2.jpeg',
  },
  {
    name: 'Dizzy',
    src: '/images/dizzy1.jpeg',
    profile: '/images/dizzy2.jpeg',
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
