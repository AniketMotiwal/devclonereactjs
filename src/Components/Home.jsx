import React from 'react';
import PostCard from '../Components/PostCard'; // Make sure the path to PostCard is correct

const dummyPosts = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--DShyBF6_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7uc7wxj38mtlwqui4dvj.png',
    avatar: 'https://placehold.co/32',
    author: 'lowlighter',
    date: 'May 24',
    title: 'Make naked websites look great with matcha.css!',
    tags: '#webdev #css #ui #tooling',
    reactions: '153 reactions',
    comments: '25 comments',
    readTime: '2 min read',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--wzgGMCLs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qpdtjnt4fnuwag8noec8.png',
    avatar: 'https://placehold.co/32',
    author: 'lowlighter',
    date: 'May 24',
    title: 'Build responsive layouts easily with Flexbox!',
    tags: '#webdev #css #responsive #design',
    reactions: '120 reactions',
    comments: '15 comments',
    readTime: '3 min read',
  },
  // Add more dummy posts here if needed
];

const HomePage = () => {
  return (
    <div className="flex justify-center mb-20 mt-[-20rem]md:mt-[-20rem] lg:mt-[-38rem]">
      <div className="p-4 mx-auto">
        <div className="flex justify-between border-b pb-2 mb-4">
          <div className="flex space-x-4">
            <button className="text-zinc-700 dark:text-zinc-300 bg-transparent hover:bg-white hover:text-blue-500 transition-colors duration-300">Relevant</button>
            <button className="text-zinc-700 dark:text-zinc-300 bg-transparent hover:bg-white hover:text-blue-500 transition-colors duration-300">Latest</button>
            <button className="text-zinc-700 dark:text-zinc-300 bg-transparent hover:bg-white hover:text-blue-500 transition-colors duration-300">Top</button>
          </div>
        </div>
        {dummyPosts.map(post => (
          <div key={post.id} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden w-full mx-auto mb-4">
            <img
              className="w-full h-48 object-cover"
              src={post.image}
              alt="Post image"
            />
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={post.avatar}
                  alt="User avatar"
                />
                <div>
                  <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{post.author}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{post.date}</div>
                </div>
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                {post.tags}
              </p>
              <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex space-x-2">
                  <span>❤️</span>
                  <span>🔥</span>
                  <span>👍</span>
                  <span>{post.reactions}</span>
                </div>
                <div>
                  <span>{post.comments}</span>
                </div>
                <div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <PostCard /> {/* This line adds the PostCard component */}
      </div>
    </div>
  );
};

export default HomePage;
