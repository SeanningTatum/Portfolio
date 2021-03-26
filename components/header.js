import Link from 'next/link';

export default function Header() {
  return (

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

    </div>

  );
}
