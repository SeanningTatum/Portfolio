import Link from 'next/link';
import { LOREM_IPSUM } from 'config/constants';

export default function IndexPage() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen">

      {/* Hero Section */}
      <section className="flex items-center justify-items-center min-h-full mb-16 sm:mb-36">
        <div className="max-w-2xl flex-1">
          <p className="mb-2 lg:mb-6 text-lg font-light">Greetings 🖖, My name is</p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-3 md:mb-6 ">Sean Stuart Urgel 👨‍💻</h1>
          <p className="font-light text-md md:text-lg mb-4">
            I'm a
            {' '}
            <span className="font-medium">Senior Software Engineer</span>
            {' '}
            that has worked and released apps with numerous
            startups and businesses from United States, UK, Australia, New Zealand, Singapore, China
            and Philippines.
          </p>
          <p className="font-light text-md md:text-lg mb-4">
            I am also the co-founder of React Cebu and a core member of
            Google Developer Group Cebu as a speaker on Flutter.
          </p>
        </div>
      </section>

      {/* Projects */}
      <div className="mb-16 sm:mb-36">
        {[1, 2, 3].map((key, ndx) => (
          <div
            key={key}
            className={
            `max-w-md bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl p-8 border cursor-pointer mb-16 ${ndx % 2 !== 0 && 'ml-auto'}`
          }
          >
            <h1 className="text-2xl font-semibold mb-1">Project name</h1>
            <div className="flex mb-2">
              <p className="text-gray-500 mr-4">Australia</p>
              <p className="text-gray-500 ">Nov 2019 - Oct 2020</p>
            </div>
            <p className="font-light mb-4">{LOREM_IPSUM}</p>
            <p className="font-mono text-sm font-medium">React &bull; React Native &bull; Typescript &bull; NodeJS &bull; NoSQL &bull; Docker</p>
          </div>
        ))}

        <div className="flex justify-center items-center mt-24">
          <Link href="/projects">
            <a className="p-4 px-6 bg-pink-700 font-mono text-white rounded-md">View all projects</a>
          </Link>
        </div>
      </div>

      {/* Contact */}
      <section className="flex-col max-w-lg mx-auto justify-center items-center text-center flex mb-16 sm:mb-36">
        <h1 className="text-3xl font-semibold mb-6">Get in touch</h1>

        <p className="font-light text-center text-lg mb-4">
          Although I'm currently not available for hire, my inbox is always open for
          possible collaboration or just to say hi.
          {' '}
          <a href="sendto:seantheurgel@gmail.com" className="text-pink-700">Send me an email</a>
          {' '}
          and let's connect.
        </p>

      </section>
    </div>
  );
}
