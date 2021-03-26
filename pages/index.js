import Hero from 'components/hero';
import FeaturedProjects from 'components/featuredProjects';

export default function IndexPage() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen">

      {/* Hero Section */}
      <section className="flex items-center justify-items-center min-h-full mb-16 sm:mb-36">
        <Hero />
      </section>

      {/* Projects */}
      <div className="mb-16 sm:mb-36">
        <FeaturedProjects />
      </div>

    </div>
  );
}
