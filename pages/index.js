import Link from 'next/link';
import { LOREM_IPSUM } from 'config/constants';
import projects from 'config/projects';

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
            I am also a hackathon winner, speaker and co-founder for Facebook
            Developer Group Cebu and a core member of Google Developer Group
            Cebu for Flutter.
          </p>
        </div>
      </section>

      {/* Projects */}
      <div className="mb-16 sm:mb-36">
        <h1 className="text-4xl font-semibold mb-12 text-center">Featured Projects</h1>

        {projects.map((project, ndx) => (
          <div
            key={project.name}
            className={
            `max-w-md bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl p-8 border cursor-pointer mb-16 ${ndx % 2 !== 0 && 'ml-auto'}`
          }
          >
            <h1 className="text-2xl font-semibold mb-1">{project.name}</h1>
            <div className="mb-2">
              <p className="text-gray-400">{project.duration}</p>
              <p className="text-gray-500">{project.location}</p>

            </div>
            <p className="font-light mb-4">{project.description}</p>
            <p className="font-mono text-sm font-medium">
              {project.technologies.map((tech, idx) => `${tech} ${idx !== project.technologies.length - 1 ? '• ' : ''}`)}
            </p>
          </div>
        ))}

        <div className="flex justify-center items-center mt-24">
          <Link href="/projects">
            <a className="p-4 px-6 bg-pink-700 font-mono text-white rounded-md">View all projects</a>
          </Link>
        </div>
      </div>

    </div>
  );
}
