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
            I am also a hackathon winner, speaker co-founder for Facebook
            Developer Group Cebu and a core member of Google Developer Group
            Cebu for Flutter.
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
      <section className="flex-col mx-auto justify-center items-center text-center flex text-xl md:text-base font-light relative py-10 pb-16 sm:pb-36">
        <h1 className="text-4xl font-semibold mb-8">Let's work together</h1>
        <div className="px-12 sm:px-0 mb-6">
          <p className="mb-2">
            If you need a
            {' '}
            <span className="font-medium">Mobile App</span>
            ,
            {' '}
            <span className="font-medium">Web App</span>
            {' '}
            or
            {' '}
            <span className="font-medium">Website</span>
            .
          </p>
          <p>
            Let's ideate, talk and make magic happen. 🪄
          </p>
        </div>

        <div className="mb-6">
          <a href="sendto:seantheurgel@gmail.com" className="text-xl font-medium text-pink-700">seantheurgel@gmail.com</a>
          <p className="text-gray-500 text-sm">Drop me an email, I love my inbox</p>
        </div>

        <a href="https://www.linkedin.com/in/sean-urgel/" className="text-xl font-medium text-pink-700">LinkedIn</a>
        <p className="text-gray-500 text-sm">Let's connect!</p>

      </section>
      <div className="bg absolute bottom-0 left-0" />
    </div>
  );
}
