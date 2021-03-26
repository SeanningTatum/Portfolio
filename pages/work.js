import Link from 'next/link';
import Projects from '@components/projects';
import projects from 'config/projects';

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen">
      <div className="mb-16 sm:mb-36">
        <h1 className="text-4xl font-semibold mb-4">Work</h1>
        <div className="max-w-xl text-lg font-light mb-16 md:mb-32">
          <p className="mb-2">
            A list of projects where I was as a fulltime developer or freelancer.
          </p>
          <p>
            You can find my work experiences
            {' '}
            <Link href="/about">
              <a className="text-pink-700">here.</a>
            </Link>

          </p>
        </div>
      </div>

      <div className="mb-16 sm:mb-36">
        <Projects projects={projects} />
      </div>
    </div>
  );
}
