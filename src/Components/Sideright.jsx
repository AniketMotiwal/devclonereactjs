import React, { useState } from 'react';

export default function Slideright() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={`absolute inset-0 right-0 left-auto bg-zinc-100 dark:bg-zinc-800 md:w-64 lg:w-1/4 xl:w-1/5 mt-20 mb-20 shadow-lg mr-10 ${isVisible ? 'w-621 transition-width duration-500 ease-in' : 'w-0'} hidden sm:hidden md:block`}>
            {/* Content for all screen sizes */}
            <div className="p-4 h-full overflow-y-auto">
                <h2 className="font-bold text-lg text-zinc-900 dark:text-white">#discuss</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Discussion threads targeting the whole community</p>
                <ul className="mt-4">
                    <li className="mb-2">
                        <a href="#" className="block p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded">
                            <p className="font-semibold text-zinc-900 dark:text-white">Meme Monday</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Share and enjoy memes with the community</p>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded">
                            <p className="font-semibold text-zinc-900 dark:text-white">Tech Talk Tuesdays</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Discuss the latest in tech advancements</p>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded">
                            <p className="font-semibold text-zinc-900 dark:text-white">Webinar Wednesdays</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Join webinars hosted by industry leaders</p>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Content only for xl devices */}
            <div className="hidden xl:block">
                <div className="bg-white shadow-md rounded-lg p-4 max-w-sm border-solid mb-4 mt-4">
                    <h2 className="text-lg font-semibold text-zinc-900">#watercooler</h2>
                    <p className="text-sm text-zinc-500">Light, and off-topic conversation.</p>
                    <ul className="mt-4 space-y-3">
                        <li className="flex justify-between items-center">
                            <span className="text-zinc-800 font-medium">Meme Monday</span>
                            <span className="text-zinc-500 text-sm">9 comments</span>
                        </li>
                        {/* Additional items */}
                    </ul>
                </div>
            </div>

            {/* Content only for large devices */}
            <div className="hidden lg:block xl:hidden">
                <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 max-w-sm">
                    <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">trending guides/resources</h2>
                    <ul className="space-y-2">
                        {/* Trending guides/resources */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
