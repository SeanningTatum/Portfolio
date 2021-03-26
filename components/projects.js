import Link from 'next/link';

function Projects({ projects }) {
  return projects.map((project, ndx) => (
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
  ));
}

export default Projects;
