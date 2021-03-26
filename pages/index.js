import Link from 'next/link';
import Hero from 'components/hero';
import Projects from '@components/projects';
import projects from 'config/projects';

export default function IndexPage() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen">

      {/* Hero Section */}
      <section className="flex items-center justify-items-center min-h-full mb-16 sm:mb-36">
        <Hero />
      </section>

      {/* Projects */}
      <div className="mb-16 sm:mb-36">
        <h1 className="text-4xl font-semibold mb-12 text-center">Featured Projects</h1>
        <Projects projects={projects.slice(0, 3)} />
        <div className="flex justify-center items-center mt-24 ">
          <Link href="/work">
            <a className="p-4 px-6 bg-pink-700 font-mono text-white rounded-md shadow-lg">View all projects</a>
          </Link>
        </div>
      </div>

    </div>
  );
}
