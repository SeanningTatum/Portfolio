import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex-col mx-auto justify-center items-center text-center flex text-xl font-light relative py-10 pb-16 sm:pb-36">
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
          Let's ideate, brainstorm and make magic happen.
        </p>
      </div>

      <div className="flex flex-col justify-center text-center">
        <div className="mb-6">
          <a href="sendto:seantheurgel@gmail.com" className="text-xl font-medium text-pink-700">seantheurgel@gmail.com</a>
          <p className="text-gray-700 text-sm">Drop me an email, I love my inbox</p>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/sean-urgel/" className="text-xl font-medium text-pink-700">LinkedIn</a>
          <p className="text-gray-700 text-sm">Let's connect!</p>
        </div>
      </div>

    </footer>

  );
}
