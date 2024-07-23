import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { FaCommentsDollar } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const DummyPosts = [
  {
    id: 1,
    profileImg: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg",
    author: "Anita Olsen",
    date: "May 28",
    title: "What is the Best way to Learn to Think Like a Programmer?",
    tags: ["#Discuss", "#Learning", "#Programming"],
    likes: 3,
    comments: 5,
    readTime: "1 min read"
  },
  {
    id: 2,
    profileImg: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg",
    author: "Anita Olsen",
    date: "May 28",
    title: "What is the Best way to Learn to Think Like a Programmer?",
    tags: ["#Discuss", "#Learning", "#Programming"],
    likes: 3,
    comments: 5,
    readTime: "1 min read"
  },
];

const PostCard = ({ post }) => {
  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 rounded-full"
          src={post.profileImg}
          alt="Profile"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{post.author}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{post.date}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
        {post.title}
      </h2>
      <div className="flex space-x-2 mb-4">
        {post.tags.map((tag, index) => (
          <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex justify-between items-center text-zinc-500 dark:text-zinc-400 text-sm">
        <div className="flex space-x-4 items-center">
          <FcLike />
          <span>{post.likes}</span>
          <FaCommentsDollar />
          <span>{post.comments}</span>
        </div>
        <div className="flex items-center">
          <span>{post.readTime}</span>
          <CiBookmark />
        </div>
      </div>
    </div>
  );
};

const DummyPostList = () => {
  return (
    <div>
      {DummyPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default DummyPostList;
