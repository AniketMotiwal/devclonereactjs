import React from 'react';
import { FaHome, FaBook, FaPodcast, FaVideo, FaTags, FaQuestionCircle, FaShoppingCart, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
<div className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-scroll h-screen p-4 mt-10 bg-white dark:bg-zinc-800 transition duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 ${isOpen ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>

      <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden">
        <FaTimes className="text-xl text-gray-500" />
      </button>
      <div className="mb-8 p-4 bg-white dark:bg-zinc-700 rounded-lg">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
          DEV Community is a community of 1,511,698 amazing developers
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
          We're a place where coders share, stay up-to-date and grow their careers.
        </p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Create account
        </button>
        <button className="mt-2 w-full text-blue-500 py-2 rounded-lg border border-blue-500 hover:bg-blue-50 dark:hover:bg-zinc-600">
          Log in
        </button>
      </div>

      {/* Additional Content */}
      <div className="max-w-sm mx-auto my-4 p-4 border border-zinc-300 rounded-lg shadow-lg bg-white mr-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">DEV Community</h2>
        </div>
        <div className="p-4 border border-green-400 rounded-lg bg-green-100">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--KfYhPrXu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxatl8njvv45ht30hcx9.png" alt="Button Image" className="w-full h-full cursor-pointer" />
        </div>
        <p className="mt-4 text-sm text-zinc-600">
          Fill out this survey and help us moderate our community by becoming a tag moderator here at DEV.
        </p>
      </div>
      {/* End of Additional Content */}

      {/* Popular Tags Section */}
      <div className="bg-white lg rounded-lg p-4 w-48">
        <div className="h-48 overflow-y-scroll">
          <h2 className="font-bold text-lg mb-4">Popular Tags</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#database</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#nextjs</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#api</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#github</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#cloud</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#machinelearning</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#frontend</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">#php</a></li>
          </ul>
        </div>
      </div>
      {/* End of Popular Tags Section */}

      <nav className="flex flex-col space-y-4 mt-8">
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaHome className="mr-2" /> Home
        </a>
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaBook className="mr-2" /> Reading List
        </a>
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaPodcast className="mr-2" /> Podcast
        </a>
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaVideo className="mr-2" /> Videos
        </a>
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaTags className="mr-2" /> Tags
        </a>
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaQuestionCircle className="mr-2" /> DEV Help
        </a>
        <a href="#" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-blue-500">
          <FaShoppingCart className="mr-2" /> Forem Shop
        </a>
      </nav>

      {/* Footer Section */}
      <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white p-4 mr-10">
        <footer className="container mx-auto px-4 py-6">
          <div className="text-sm">
            <p className="font-semibold">
              <a href="#" className="text-blue-500 text-xl hover:underline">DEV Community</a>
            </p>
            <p>A constructive and inclusive social network for software developers. With you every step of your journey.</p>
            <p>Built on <a href="https://forem.com" className="text-blue-500 hover:text-blue-600">Forem</a> — the open source software that powers DEV and other inclusive communities.</p>
            <p>Made with love and Ruby on Rails. DEV Community © 2016 - 2024.</p>
          </div>
        </footer>
      </div>
      {/* End of Footer Section */}
    </div>
  );
};

export default Sidebar;
