import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen">
      <div className="mb-16 sm:mb-36 font-light">
        <h1 className="text-4xl font-semibold mb-4">Projects</h1>
        <div className="max-w-xl text-lg font-light mb-16 md:mb-32">
          <p className="mb-2">
            A list of personal projects that I've worked on for fun or learning purposes
          </p>
          <p>
            Alot of my projects have ended up in the developer graveyard, although
            I'm planning to fill up this page soon. Contact me if you have any ideas
            or want to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
}
