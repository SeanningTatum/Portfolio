import Link from 'next/link';
import { useState } from 'react';
import Menu from './svg/menu';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative bg-white overflow-hidden container mx-auto">

        <div className="relative pt-6">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">

            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 mr-auto">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <h1 className="text-xl font-bold">seanurgel.</h1>
                  </a>
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>

                <Menu />
              </button>
            </div>

            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <Link href="/projects">
                <a className="font-medium text-gray-500 hover:text-gray-900 font-mono">Projects</a>
              </Link>
              <Link href="/blog">
                <a className="font-medium text-gray-500 hover:text-gray-900 font-mono">Blog</a>
              </Link>

              <Link href="/about">
                <a className="font-medium text-gray-500 hover:text-gray-900 font-mono">About</a>
              </Link>
            </div>
          </nav>
        </div>

        {show && (
        <div className="absolute h-screen w-screen z-10 bg-white sm:static md:hidden top-0 left-0">
          <h1>Menu</h1>
        </div>
        )}

      </div>

    </>

  );
}
