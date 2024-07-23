import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Side from "../Components/Side"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        id="navbar"
        className="bg-white dark:bg-zinc-800 shadow-md px-4 py-2 flex justify-between items-center md:px-10 lg:px-10 xl:px-20"
      >
        <div className="relative flex items-center">
          {/* Your logo and search input */}
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo"
            className="h-8 mr-4"
          />
          <div className="flex items-center border border-black rounded-lg p-2 pr-8 md:pr-20 max-w-xl dark:bg-gray-800 hover:border-blue-500 focus:border-blue-500">
            <svg
              className="w-10 h-4 text-zinc-400 dark:text-zinc-300 md:mr-4" // Adjusted margin-right here
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow bg-transparent outline-none dark:text-white md:w-full sm w-1/2" // Adjusted width here
            />
        <span className="text-zinc-100 dark:text-zinc-300 text-xs sm:text-sm ml-2 md:ml-4 lg:ml-5 xl:ml-5 flex items-center">
              Powered  <span>by</span>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 inline-block"
                width="18"
                height="18"
                viewBox="0 0 500 500.34"
              >
                <defs></defs>
                <path
                  className="cls-1"
                  d="M250,0C113.38,0,2,110.16.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-131.35-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z"
                ></path>
              </svg>{' '}
              <span>Algolia</span>
            </span>

          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-6 ml-auto">
          {/* Always show the toggle button on small screens */}
          <div className="block md:hidden">
            {/* Toggle button for sidebar */}
            <button
              id="menuToggle"
              className="px-3 py-1 border rounded-md"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Adjusted the alignment for small screens */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-6">
            {/* Your login and create account buttons */}
            <button className="px-3 py-1 border rounded-md transition-colors duration-300 ease-in-out hover:text-gray-900 hover:bg-gray-300 text-black">
              Log in
            </button>
            <button className="px-3 py-1 border rounded-md transition-colors duration-300 ease-in-out hover:text-purple-900 hover:bg-blue-200 border-gray-500 text-black">
              Create account
            </button>
          </div>
        </div>
      </header>
      {/* Render the sidebar conditionally based on state */}
      <Side isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
