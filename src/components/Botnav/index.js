import * as React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Botnav({_onRefresh}) {
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
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
            </Link>
            <button class="relative inline-flex flex-col items-center text-xs font-medium text-white py-2 px-6 flex-grow" onClick={e=>_onRefresh(e)}>
                <div class="absolute bottom-2 p-3 rounded-full border-4 border-white bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg"class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"/></svg>
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

