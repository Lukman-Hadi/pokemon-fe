import * as React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Botnav() {
    return (
        <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-0 justify-between bg-indigo-600 w-full">
            <Link
                className="inline-flex flex-col items-center text-xs font-medium text-indigo-400 py-2 px-4 flex-grow"
                to="/"
            >
                <svg
                    class="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <span class="sr-only">Profile</span>
            </Link>
            <button class="relative inline-flex flex-col items-center text-xs font-medium text-white py-2 px-6 flex-grow">
                <div class="absolute bottom-2 p-3 rounded-full border-4 border-white bg-indigo-600">
                    <svg
                        class="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                </div>
            </button>

            <Link
                className="inline-flex flex-col items-center text-xs font-medium text-indigo-400 py-2 px-4 flex-grow"
                to="/mypokemon"
            >
                <svg
                    class="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </Link>
        </div>
        // <div className="block fixed inset-x-0 bottom-0 bg-white shadow">
        //     <div className="flex justify-between">
        //         <div className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        //             Mypokemon
        //         </div>
        //     </div>
        // </div>
    )
}