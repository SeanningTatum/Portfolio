import Experience from '@components/experience';
import education from 'config/education';
import workExperience from 'config/workExperience';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen ">
      <div className="max-w-xl text-lg font-light mb-16 md:mb-32">
        <h1 className="text-4xl font-semibold mb-8">About me</h1>
        <p className="mb-6">
          I'm a fullstack developer with a frontend and mobile focus.
          I love working on my side-projects learning something new everyday,
          tinkering with new tools and technologies.
        </p>
        <p className="mb-6">
          I also enjoy volunteering and am a speaker and conduct workshops
          in local tech communities such as Facebook Developer Groups Cebu and
          Google Developers Group Cebu.
        </p>
        <p className="mb-6">
          Some of the technologies I have learned and still learning are
          React, React Native, Flutter, Typescript, NodeJS, Google App Engine, GraphQL,
          TailwindCSS and Prisma 2.0.

        </p>
      </div>

      <div className="mb-24">

        {/* Work Experience */}
        <div className="flex justify-between flex-col md:flex-row">
          <h3 className="text-4xl mb-8 font-semibold flex-1">Work experience</h3>

          <div className="font-light flex-1">
            {workExperience.map((experience) => (
              <Experience {...experience} key={experience.work} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex justify-between flex-col md:flex-row">
          <h3 className="text-4xl mb-8 font-semibold flex-1">Education</h3>

          <div className="font-light flex-1">
            {education.map((experience) => (
              <Experience {...experience} key={experience.work} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
